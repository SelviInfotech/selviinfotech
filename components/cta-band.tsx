import Link from "next/link";

export function CtaBand({
  title = "Ready to build something that lasts?",
  body = "Tell us what the system has to do. We will reply with questions, then a written scope.",
}: {
  title?: string;
  body?: string;
}) {
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
