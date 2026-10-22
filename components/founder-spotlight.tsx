import { site } from "@/lib/site";

export function FounderSpotlight({ id = "founder" }: { id?: string }) {
  return (
    <section id={id} className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-12 md:py-28">
      <div className="reveal md:col-span-5">
        <div className="relative">
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
      </div>
      <div className="reveal md:col-span-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Leadership</p>
        <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Kumaran</h2>
        <p className="mt-2 text-gold">{site.founder.role}</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          With over a decade of experience in software engineering and technology education, our founder established Selvi Infotech with a singular mission: to bridge the gap between industry demand and skilled talent in Tamil Nadu and beyond.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Having trained more than 10,000 students and delivered 50+ enterprise projects, the founder brings deep expertise in software architecture, agile delivery, and curriculum design — making Selvi Infotech a trusted name for both businesses and aspiring technologists across India.
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
    </section>
  );
}
