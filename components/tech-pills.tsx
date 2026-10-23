function TechGlyph({ name }: { name: string }) {
  const kind = /flutter|react native|android|ios|mobile/i.test(name)
    ? "phone"
    : /sql|database/i.test(name)
      ? "data"
      : /azure|cloud/i.test(name)
        ? "cloud"
        : "code";

  const path =
    kind === "phone"
      ? "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4 15.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      : kind === "data"
        ? "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zm0 4c0 1.7 3.1 3 7 3s7-1.3 7-3M5 14c0 1.7 3.1 3 7 3s7-1.3 7-3M5 6v12"
        : kind === "cloud"
          ? "M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18z"
          : "M8 8l-3 4 3 4M16 8l3 4-3 4M13 6l-2 12";

  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export function TechPills({ items, showLabel = true, centered = false }: { items: readonly string[]; showLabel?: boolean; centered?: boolean }) {
  return (
    <div>
      {showLabel ? <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Technologies we use</p> : null}
      <ul className={`${showLabel ? "mt-3" : ""} flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
        {items.map((item) => (
          <li key={item}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-800/15 bg-green-100 px-3 py-1.5 text-sm font-medium text-green-900 transition hover:-translate-y-0.5 hover:border-gold-bright motion-reduce:hover:translate-y-0">
              <TechGlyph name={item} />
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
