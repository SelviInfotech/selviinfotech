import Link from "next/link";
import { engagementSteps, site } from "@/lib/site";

export function CtaBand({
  title = "Ready to build something that lasts?",
  body = "Tell us what the system has to do. We will reply with questions, then a written scope.",
  layout = "band",
}: {
  title?: string;
  body?: string;
  layout?: "band" | "panel";
}) {
  if (layout === "panel") {
    return (
      <section className="stack-fill px-4 py-16 sm:px-5">
        <div className="cta-panel relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.7rem] bg-green-900 px-6 py-8 text-cream md:px-12 md:py-10">
          <div className="mesh" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">Next step</p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-cream/80">{body}</p>
          </div>
          <ul className="relative mt-8 grid gap-3 md:grid-cols-3">
            {engagementSteps.map(([stepTitle, stepBody]) => (
              <li key={stepTitle} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
                <p className="font-display text-xl text-cream">{stepTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{stepBody}</p>
              </li>
            ))}
          </ul>
          <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 transition hover:-translate-y-0.5 hover:bg-[#e0b85a] motion-reduce:hover:translate-y-0"
              >
                Start a conversation
              </Link>
              <Link
                href="/verify/"
                className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream transition hover:bg-white/10"
              >
                Verify a certificate
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-cream/85">
              <a className="font-semibold text-gold-bright underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <span aria-hidden="true"> · </span>
              <a className="font-semibold text-cream underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-green-900 px-6 py-12 text-cream md:px-14 md:py-16">
        <div className="mesh" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">Next step</p>
            <h2 className="mt-3 font-display text-3xl text-cream md:text-5xl">{title}</h2>
            <p className="mt-4 text-lg text-cream/80">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 transition hover:-translate-y-0.5 hover:bg-[#e0b85a] motion-reduce:hover:translate-y-0"
            >
              Start a conversation
            </Link>
            <Link
              href="/verify/"
              className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Verify a certificate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
