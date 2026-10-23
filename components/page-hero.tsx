import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";

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
    <section className="relative overflow-hidden bg-green-900 text-cream">
      <div className="mesh" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="mesh-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-14 md:pt-44 md:pb-16">
        <Breadcrumbs onDark items={crumbs} />
        {eyebrow ? (
          <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-cream md:text-6xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
