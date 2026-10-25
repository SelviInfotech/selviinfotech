import type { PublishedWork } from "@/data/home";

/** Product-style UI preview. Decorative, not a photograph of the client's product. */
export function WorkMock({ kind }: { kind: PublishedWork["mock"] }) {
  return (
    <div className="aspect-[16/10] overflow-hidden bg-[#f3ece4]" aria-hidden="true">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-1.5 bg-green-900 px-3 py-2">
          <span className="size-1.5 rounded-full bg-[#E7C97A]" />
          <span className="size-1.5 rounded-full bg-white/40" />
          <span className="size-1.5 rounded-full bg-white/25" />
          <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/15" />
        </div>
        <div className="min-h-0 flex-1">
          {kind === "tax" ? <TaxMock /> : null}
          {kind === "plant" ? <PlantMock /> : null}
          {kind === "nodes" ? <NodesMock /> : null}
          {kind === "grid" ? <GridMock /> : null}
        </div>
      </div>
    </div>
  );
}

function TaxMock() {
  return (
    <div className="grid h-full grid-cols-5 gap-2 p-3">
      <div className="col-span-2 space-y-2">
        {["Returns", "Filings", "Notices"].map((label, index) => (
          <div key={label} className="rounded-lg bg-white px-2 py-1.5 shadow-sm">
            <p className="text-[9px] font-semibold text-green-900">{label}</p>
            <div className="mt-1 h-1.5 rounded-full bg-[#eadfce]">
              <div className="h-1.5 rounded-full bg-[#C9962F]" style={{ width: `${60 + index * 12}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-3 flex items-end gap-1.5 rounded-lg bg-white p-2 shadow-sm">
        {[40, 65, 48, 80, 58, 90, 72].map((h) => (
          <span key={h} className="flex-1 rounded-sm bg-green-800/85" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function PlantMock() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      {["Line A", "Line B", "Line C"].map((label, index) => (
        <div key={label} className="flex flex-col rounded-lg bg-white p-2 shadow-sm">
          <p className="text-[9px] font-semibold text-green-900">{label}</p>
          <div className="mt-auto flex items-end gap-1 pt-2">
            {[30, 55, 40, 70].map((h, bar) => (
              <span key={h} className="w-2 rounded-sm bg-[#6E8258]" style={{ height: 8 + ((h + index * 8 + bar) % 28) }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function NodesMock() {
  return (
    <svg viewBox="0 0 320 160" className="h-full w-full">
      <rect x="16" y="16" width="288" height="128" rx="12" fill="#fff" />
      <g stroke="#C9962F" strokeWidth="1.6" fill="none">
        <path d="M70 80 H150" />
        <path d="M190 80 H250" />
        <path d="M170 62 V36 H250" />
        <path d="M170 98 V124 H110" />
      </g>
      {[
        [70, 80],
        [170, 80],
        [250, 80],
        [250, 36],
        [110, 124],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill="#0F3B24" />
      ))}
    </svg>
  );
}

function GridMock() {
  return (
    <div className="grid h-full grid-cols-2 gap-2 p-3">
      <div className="rounded-lg bg-white p-2 shadow-sm">
        <div className="h-2 w-16 rounded-full bg-green-900/80" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 rounded-full bg-[#eadfce]" />
          <div className="h-1.5 w-4/5 rounded-full bg-[#eadfce]" />
          <div className="h-1.5 w-2/3 rounded-full bg-[#C9962F]" />
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-green-900 p-2">
        <div className="h-2 w-10 rounded-full bg-[#E7C97A]" />
        <div className="mt-auto flex items-end gap-1">
          {[28, 44, 36, 56].map((h) => (
            <span key={h} className="w-3 rounded-sm bg-white/85" style={{ height: h / 2 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
