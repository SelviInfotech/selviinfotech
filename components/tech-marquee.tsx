import { stack } from "@/lib/site";

export function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <div className="marquee overflow-hidden" aria-label="Technologies we deliver">
      <ul className="marquee-track-slow items-center py-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className={index >= stack.length ? "marquee-clone" : undefined}
            aria-hidden={index >= stack.length ? true : undefined}
          >
            <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-green-900 uppercase">
              <span className="size-1.5 rounded-full bg-gold-bright" aria-hidden="true" />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
