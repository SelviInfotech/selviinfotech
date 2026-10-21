import { RichText } from "@/components/rich-text";
import type { Faq } from "@/data/services";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="faq-item reveal lift rounded-2xl border border-border bg-card px-5 open:border-gold-bright/40"
          style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-medium text-green-900">
            {item.question}
            <span className="when-closed grid size-7 shrink-0 place-items-center rounded-full bg-green-100 text-lg text-green-800" aria-hidden="true">
              +
            </span>
            <span className="when-open grid size-7 shrink-0 place-items-center rounded-full bg-green-800 text-lg text-cream" aria-hidden="true">
              –
            </span>
          </summary>
          <p className="pb-5 leading-relaxed text-muted-foreground">
            <RichText text={item.answer} />
          </p>
        </details>
      ))}
    </div>
  );
}
