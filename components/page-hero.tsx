import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeafDecor } from "@/components/botanicals";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  crumbs: { name: string; path?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      <LeafDecor spot="page" />
      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-12 md:pt-36 md:pb-14">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? <p className="mt-6 text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.08] text-green-900 md:text-6xl">{title}</h1>
        {lede ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
