import { PottedPlant } from "@/components/botanicals";

function Chip({ label, className }: { label: string; className: string }) {
  return (
    <div className={`absolute flex items-center gap-2 rounded-full border border-[#eadfce] bg-white/95 px-3 py-1.5 text-[12px] font-semibold text-green-900 shadow-[0_10px_24px_rgba(15,59,36,0.08)] ${className}`}>
      <span className="size-1.5 rounded-full bg-[#C9962F]" />
      {label}
    </div>
  );
}

export function HeroStage() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[540px] sm:h-[390px] lg:h-[470px]" aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 h-[470px] w-[540px] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.62] sm:scale-[0.76] lg:scale-100">
        <PottedPlant className="hero-float absolute bottom-2 left-0 h-44 w-32" />

        <div className="absolute top-16 left-16 w-[330px] -rotate-2">
          <div className="rounded-[1.15rem] bg-[#1b1c1a] p-2 shadow-[0_24px_50px_rgba(15,59,36,0.18)]">
            <div className="overflow-hidden rounded-[0.8rem] bg-[#102117]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="size-2 rounded-full bg-[#E7C97A]/80" />
                <span className="size-2 rounded-full bg-white/30" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="ml-2 text-[10px] tracking-wide text-white/50">dashboard.tsx</span>
              </div>
              <div className="grid grid-cols-5 gap-3 p-3">
                <div className="col-span-3 space-y-1.5 font-mono text-[10px] leading-4">
                  <p><span className="text-[#E7C97A]">const</span> <span className="text-white/90">scope</span> <span className="text-white/50">=</span> <span className="text-[#9dcea8]">await</span> <span className="text-white/90">plan()</span></p>
                  <p className="text-white/80">{"// written before the build"}</p>
                  <p><span className="text-[#E7C97A]">return</span> <span className="text-white/90">ship(scope)</span></p>
                  <div className="mt-3 grid grid-cols-4 items-end gap-1 pt-2">
                    {[40, 62, 48, 78].map((h) => (
                      <span key={h} className="rounded-sm bg-[#C9962F]" style={{ height: h / 3 }} />
                    ))}
                  </div>
                </div>
                <div className="col-span-2 space-y-2">
                  <div className="rounded-lg bg-white/10 p-2">
                    <p className="text-[9px] text-white/80">Services</p>
                    <p className="mt-1 text-[12px] font-semibold text-white">Live</p>
                  </div>
                  <div className="rounded-lg bg-[#C9962F]/20 p-2">
                    <p className="text-[9px] text-[#F0C463]">Training</p>
                    <p className="mt-1 text-[12px] font-semibold text-white">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-2 w-24 rounded-b-md bg-[#2a2b28]" />
          <div className="mx-auto h-1.5 w-36 rounded-b-lg bg-[#3a3b37]" />
        </div>

        <div className="hero-float-delay absolute top-28 right-6 w-[132px]">
          <div className="rotate-6 rounded-[1.4rem] border border-[#ece3d6] bg-white p-1.5 shadow-[0_18px_40px_rgba(15,59,36,0.14)]">
            <div className="overflow-hidden rounded-[1.1rem] bg-[#f7f3ec]">
              <div className="bg-green-900 px-3 py-2 text-[10px] font-semibold text-cream">App</div>
              <div className="space-y-2 p-2.5">
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <p className="text-[8px] text-[#8A6416]">Overview</p>
                  <div className="mt-1.5 flex h-8 items-end gap-1">
                    {[30, 50, 40, 70, 55].map((h) => (
                      <span key={h} className="w-2 rounded-sm bg-green-800/80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {["Tasks", "Notes"].map((row) => (
                  <div key={row} className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5">
                    <span className="size-2 rounded-full bg-[#C9962F]" />
                    <span className="text-[10px] text-green-900">{row}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-float absolute top-2 right-10 w-[168px]">
          <div className="rounded-2xl border border-[#eadfce] bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(15,59,36,0.1)]">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-[#f6e7c4] text-[#8A6416]">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M7 17h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.7-1.2A3.2 3.2 0 0 0 7 17z" />
                </svg>
              </span>
              <p className="text-[12px] font-semibold text-green-900">Cloud Architecture</p>
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-[9px] text-[#3e5346]">
              <span className="rounded-md bg-green-100 px-1.5 py-1">App</span>
              <span className="h-px flex-1 bg-[#C9962F]/50" />
              <span className="rounded-md bg-[#f6e7c4] px-1.5 py-1">API</span>
              <span className="h-px flex-1 bg-[#C9962F]/50" />
              <span className="rounded-md bg-green-100 px-1.5 py-1">Data</span>
            </div>
          </div>
        </div>

        <Chip label="Web Applications" className="hero-float top-36 left-0" />
        <Chip label="Mobile Apps" className="hero-float-delay right-0 bottom-16" />
        <Chip label="Cloud Architecture" className="hero-float bottom-6 left-28" />
      </div>
    </div>
  );
}
