import { site } from "@/lib/site";

export function FounderSpotlight({ id = "founder", variant = "page" }: { id?: string; variant?: "page" | "stack" }) {
  const stack = variant === "stack";
  return (
    <section id={id} className={stack ? "stack-fill px-5 py-14 md:py-16" : "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:py-20"}>
      {stack ? (
        <div className="founder-layout mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <FounderPortrait />
          </div>
          <div className="md:col-span-7">
            <FounderCopy stacked />
          </div>
        </div>
      ) : (
        <>
          <div className="reveal md:col-span-5">
            <FounderPortrait />
          </div>
          <div className="reveal md:col-span-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <FounderCopy />
          </div>
        </>
      )}
    </section>
  );
}

function FounderPortrait() {
  return (
    <div className="founder-portrait relative">
      <img
        src="/images/kumaran.webp"
        alt="Kumaran, Founder and Managing Director of Selvi Infotech Private Limited"
        width={800}
        height={1068}
        loading="lazy"
        decoding="async"
        className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
      />
      <p className="absolute bottom-4 left-4 rounded-full bg-cream/95 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-green-900 uppercase">
        Founder &amp; MD
      </p>
    </div>
  );
}

function FounderCopy({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className={stacked ? "founder-copy" : undefined}>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Leadership</p>
        <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Kumaran</h2>
        <p className="mt-2 text-gold">{site.founder.role}</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Kumaran founded Selvi Infotech to close the gap between the software companies need and the people who can build and look after it. He leads the studio’s project work and its training programs.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A project starts with a written scope, moves in cycles you can see, and ends with a handover. Training uses the same tools. Nearby teams and remote teams follow that same path.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          <a className="text-green-800 underline decoration-gold-bright underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="text-green-800 underline decoration-gold-bright underline-offset-4" href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
            Company LinkedIn
          </a>
        </div>
    </div>
  );
}
