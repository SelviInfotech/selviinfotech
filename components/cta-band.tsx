import Link from "next/link";
import { LeafDecor } from "@/components/botanicals";

export function CtaBand({
  title = "Let's Build Something Great Together",
  body = "Tell us what the system has to do. We will reply with questions, then a written scope.",
}: {
  title?: string;
  body?: string;
  layout?: "band" | "panel";
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-[#f3ece3] px-5 py-16 md:py-20">
      <LeafDecor spot="cta" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-green-900 md:text-5xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact/" className="inline-flex h-12 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900 hover:bg-[#b8872a]">
            Discuss a Project
          </Link>
          <Link href="/verify/" className="inline-flex h-12 items-center rounded-full border border-green-900/20 px-6 text-sm font-semibold text-green-900 hover:border-[#C9962F]">
            Verify a certificate
          </Link>
        </div>
      </div>
    </section>
  );
}
