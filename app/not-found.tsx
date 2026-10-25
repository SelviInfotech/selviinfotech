import Link from "next/link";
import { LeafDecor } from "@/components/botanicals";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      <LeafDecor spot="page" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-32">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">404</p>
        <h1 className="mt-4 font-display text-5xl text-green-900">This page is not on the site.</h1>
        <p className="mt-4 text-lg text-muted-foreground">The address may have changed. Try the homepage, the services, or certificate verification.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex h-12 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900">
            Home
          </Link>
          <Link href="/verify/" className="inline-flex h-12 items-center rounded-full border border-green-900/20 px-6 text-sm font-semibold text-green-900">
            Verify certificate
          </Link>
        </div>
      </div>
    </section>
  );
}
