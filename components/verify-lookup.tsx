"use client";

import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { appwriteConfig, appwriteIsConfigured } from "@/lib/appwrite";
import { site } from "@/lib/site";

type Certificate = {
  certificateId: string;
  name: string;
};

function normalizeCertId(raw: string) {
  return raw.trim().replace(/[\s-]+/g, "").toUpperCase();
}

function validateCertId(certId: string) {
  if (!certId) return "Please enter a certificate ID.";
  if (!/^SI[A-Z0-9]{9}$/.test(certId)) {
    return "Certificate ID format should look like SIXXXXXXXXX.";
  }
  return "";
}

export function VerifyLookup() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [notice, setNotice] = useState(!appwriteIsConfigured());
  const [result, setResult] = useState<
    | { kind: "valid"; cert: Certificate }
    | { kind: "missing"; certId: string }
    | null
  >(null);

  async function verify() {
    const certId = normalizeCertId(value);
    setValue(certId);
    const message = validateCertId(certId);
    if (message) {
      setToast(message);
      setResult(null);
      return;
    }

    setToast("");
    setResult(null);
    setLoading(true);

    try {
      if (!appwriteIsConfigured()) {
        setNotice(true);
        return;
      }

      const { endpoint, projectId, databaseId, collectionId } = appwriteConfig;
      const url = new URL(
        `${endpoint}/databases/${databaseId}/collections/${collectionId}/documents`,
      );
      // Same query as the previous verify.js: IDs are matched in lowercase.
      url.searchParams.append("queries[]", `equal("certificateId", ["${certId.toLowerCase()}"])`);
      url.searchParams.append("limit", "1");

      const response = await fetch(url.toString(), {
        headers: { "X-Appwrite-Project": projectId },
      });
      if (!response.ok) throw new Error(`Appwrite error: ${response.status}`);

      const data = (await response.json()) as {
        documents?: { certificateId?: string; name?: string }[];
      };
      const document = data.documents?.[0];
      if (document?.certificateId && document.name) {
        setResult({
          kind: "valid",
          cert: { certificateId: document.certificateId, name: document.name },
        });
      } else {
        setResult({ kind: "missing", certId });
      }
    } catch {
      setToast("Unable to reach the certificate database. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const verifiedOn = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="rounded-[1.75rem] border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-3xl text-green-900">Certificate lookup</h2>
        <p className="mt-2 text-muted-foreground">
          Your certificate ID is printed on the certificate document, for example <strong>SIXXXXXXXXX</strong>.
        </p>
        <label htmlFor="certInput" className="mt-6 block text-sm font-medium text-green-900">
          Certificate ID
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="certInput"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                void verify();
              }
            }}
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter certificate ID"
            className="h-12 w-full rounded-xl border border-border bg-cream px-3 text-base outline-none focus-visible:border-green-800 focus-visible:ring-3 focus-visible:ring-green-800/20"
          />
          <button
            type="button"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-green-800 px-6 text-sm font-semibold text-white hover:bg-green-900 disabled:opacity-60"
            onClick={() => void verify()}
            disabled={loading}
          >
            {loading ? "Checking…" : "Verify"}
          </button>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Certificate IDs are not case-sensitive.</p>
      </div>

      {notice ? (
        <p role="status" id="setupNotice" className="mt-4 rounded-2xl border border-gold-bright/50 bg-accent px-4 py-3 text-sm text-green-900">
          Certificate verification is not configured. The Appwrite project, database, and collection IDs are missing.
        </p>
      ) : null}

      {loading ? (
        <p className="mt-4 text-sm text-green-800" role="status">
          Checking certificate database…
        </p>
      ) : null}

      {toast ? (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {toast}
        </p>
      ) : null}

      {result?.kind === "valid" ? (
        <article className="mt-6 overflow-hidden rounded-[1.75rem] border border-border bg-card">
          <header className="flex items-start gap-4 bg-green-900 px-6 py-5 text-cream">
            <span className="grid size-10 place-items-center rounded-full bg-gold-bright font-semibold text-green-900" aria-hidden="true">
              ✓
            </span>
            <div>
              <h3 className="font-display text-2xl text-cream">Certificate valid</h3>
              <p className="text-sm text-cream/80">This certificate has been verified in the Selvi Infotech registry.</p>
            </div>
          </header>
          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <BrandMark className="h-12 w-12" />
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold tracking-wide text-green-800 uppercase">Authentic</span>
            </div>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Certificate ID</dt>
                <dd className="mt-1 font-mono text-lg text-green-900">{result.cert.certificateId}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Student name</dt>
                <dd className="mt-1 text-lg text-green-900">{result.cert.name}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              This certificate was issued by {site.name}. Verified on {verifiedOn}.
            </p>
          </div>
        </article>
      ) : null}

      {result?.kind === "missing" ? (
        <article className="mt-6 rounded-[1.75rem] border border-border bg-card p-6 text-center">
          <p className="mx-auto grid size-12 place-items-center rounded-full bg-destructive/10 text-destructive" aria-hidden="true">
            ✕
          </p>
          <h3 className="mt-4 font-display text-2xl text-green-900">Invalid certificate ID</h3>
          <p className="mt-2 font-mono text-gold">{result.certId}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            No certificate was found with this ID. Check the ID printed on the certificate. Need help?{" "}
            <a className="font-semibold text-green-800 underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </article>
      ) : null}
    </div>
  );
}
