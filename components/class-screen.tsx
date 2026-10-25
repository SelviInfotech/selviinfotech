/** Illustration of a live online class. Abstract tiles, not photographs of people. */
export function ClassScreen({ className = "" }: { className?: string }) {
  const tiles = ["A", "B", "C", "D"];
  return (
    <div className={`overflow-hidden rounded-[1.4rem] bg-[#1b1c1a] p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${className}`} aria-hidden="true">
      <div className="overflow-hidden rounded-[1rem] bg-[#102117]">
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-[11px] font-semibold text-cream">Live session</p>
          <span className="rounded-full bg-[#C9962F] px-2 py-0.5 text-[10px] font-semibold text-green-900">Online</span>
        </div>
        <div className="grid grid-cols-2 gap-2 px-3 pb-3">
          {tiles.map((tile) => (
            <div key={tile} className="flex aspect-video items-center justify-center rounded-xl bg-white/10">
              <span className="grid size-8 place-items-center rounded-full bg-[#6E8258]/80 text-xs font-semibold text-white">{tile}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2 text-[10px] text-white/70">
          <span className="rounded-full bg-white/10 px-2 py-1">Mic</span>
          <span className="rounded-full bg-white/10 px-2 py-1">Chat</span>
          <span className="ml-auto text-[#F0C463]">Tamil / English</span>
        </div>
      </div>
    </div>
  );
}
