import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-green-900 text-cream">
      <div className="mesh" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-32">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">404</p>
        <h1 className="mt-4 font-display text-5xl text-cream">This page is not on the site.</h1>
        <p className="mt-4 text-lg text-cream/80">The address may have changed. Try the homepage, the services, or certificate verification.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900">
            Home
          </Link>
          <Link href="/verify/" className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream">
            Verify certificate
          </Link>
        </div>
      </div>
    </section>
  );
}
