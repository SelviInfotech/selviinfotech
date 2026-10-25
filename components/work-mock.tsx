import type { PublishedWork } from "@/data/home";

export function WorkMock({ kind }: { kind: PublishedWork["mock"] }) {
  return (
    <div className="aspect-[16/10] overflow-hidden bg-[#f4efe8]" aria-hidden="true">
      {kind === "tax" ? <TaxMock /> : null}
      {kind === "plant" ? <PlantMock /> : null}
      {kind === "nodes" ? <NodesMock /> : null}
      {kind === "grid" ? <GridMock /> : null}
    </div>
  );
}

function TaxMock() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-3 h-2 w-24 rounded-full bg-green-900/80" />
      <div className="grid flex-1 grid-cols-3 gap-2">
        {["68", "42", "81"].map((n) => (
          <div key={n} className="rounded-xl bg-white p-2 shadow-sm">
            <div className="h-1.5 w-8 rounded-full bg-[#C9962F]" />
            <p className="mt-2 font-display text-lg text-green-900">{n}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlantMock() {
  return (
    <div className="flex h-full items-end gap-2 p-4">
      {[46, 72, 58, 88, 64].map((h) => (
        <span key={h} className="flex-1 rounded-t-md bg-green-800/80" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function NodesMock() {
  return (
    <div className="relative h-full">
      <svg viewBox="0 0 320 180" className="h-full w-full">
        <g stroke="#C9962F" strokeWidth="1.4" fill="none">
          <path d="M60 90 H140" />
          <path d="M180 90 H250" />
          <path d="M160 70 V40 H230" />
          <path d="M160 110 V140 H90" />
        </g>
        {[
          [60, 90],
          [160, 90],
          [250, 90],
          [230, 40],
          [90, 140],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill="#0F3B24" />
        ))}
      </svg>
    </div>
  );
}

function GridMock() {
  return (
    <div className="grid h-full grid-cols-2 gap-2 p-4">
      <div className="rounded-xl bg-white p-3 shadow-sm">
        <div className="h-2 w-16 rounded-full bg-green-900/70" />
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-[#eadfce]" />
          <div className="h-1.5 w-4/5 rounded-full bg-[#eadfce]" />
          <div className="h-1.5 w-2/3 rounded-full bg-[#C9962F]/70" />
        </div>
      </div>
      <div className="rounded-xl bg-green-900 p-3">
        <div className="h-2 w-12 rounded-full bg-[#E7C97A]" />
        <div className="mt-4 flex items-end gap-1">
          {[40, 70, 50, 90].map((h) => (
            <span key={h} className="w-3 rounded-sm bg-white/80" style={{ height: h / 3 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
