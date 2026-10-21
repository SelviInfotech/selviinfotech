import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { VerifyLookup } from "@/components/verify-lookup";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Verify Certificate | Selvi Infotech",
  description:
    "Verify a Selvi Infotech training certificate. Enter the certificate ID printed on the document to check it against the student registry.",
  path: "/verify/",
});

const programs = [
  ["Full stack development", "Front-end and back-end work covering React, Node.js, databases, APIs, and deployment."],
  ["Mobile app development", "iOS and Android applications using React Native and Flutter, with project work."],
  ["Data science and AI", "Python, machine learning, data analysis, and model deployment."],
];

export default function VerifyPage() {
  return (
    <>
      <PageHero
        eyebrow="Students"
        title="Verify your certificate"
        lede="Enter the certificate ID to check it against the Selvi Infotech training registry."
        crumbs={[{ name: "Home", path: "/" }, { name: "Verify certificate" }]}
      />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <VerifyLookup />
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-display text-3xl text-green-900">Programs behind these certificates</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Certificates on this page come from the courses we run in Chennai and across Tamil Nadu, and online.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {programs.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-2xl text-green-900">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
        <Link href="/training/" className="mt-8 inline-flex h-12 items-center rounded-full bg-green-800 px-6 text-sm font-semibold text-white">
          View all courses
        </Link>
      </section>
    </>
  );
}
