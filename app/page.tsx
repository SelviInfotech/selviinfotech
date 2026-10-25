import Image from "next/image";
import Link from "next/link";
import { ClientStrip } from "@/components/client-strip";
import { LeafDecor } from "@/components/botanicals";
import { LineIcon, type LineIconName } from "@/components/line-icon";
import { ProcessTimeline } from "@/components/process-timeline";
import { TechMarks } from "@/components/tech-marks";
import {
  clientLogos,
  homeServices,
  homeStats,
  homeTestimonials,
  publishedWork,
  trainingPoints,
  whyTiles,
} from "@/data/home";

const goldButton =
  "inline-flex h-11 items-center gap-2 rounded-full bg-[#C9962F] px-5 text-sm font-semibold text-green-900 shadow-sm transition hover:bg-[#b8872a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900/40";
const ghostButton =
  "inline-flex h-11 items-center gap-2 rounded-full border border-green-900/20 bg-white/80 px-5 text-sm font-semibold text-green-900 transition hover:border-[#C9962F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900/30";

const trustPoints: { icon: LineIconName; title: string; detail: string }[] = [
  { icon: "quality", title: "Published", detail: "client work" },
  { icon: "training", title: "Verifiable", detail: "certificates" },
  { icon: "software", title: "Software", detail: "and training" },
];

const heroCards: { icon: LineIconName; label: string; className: string }[] = [
  { icon: "cloud", label: "Cloud Architecture", className: "absolute top-[4%] right-[2%] sm:top-[6%] sm:right-[4%]" },
  { icon: "software", label: "Web Applications", className: "absolute top-[38%] left-0 sm:top-[40%]" },
  { icon: "mobile", label: "Mobile Apps", className: "absolute right-0 bottom-[12%] sm:bottom-[16%]" },
];

const aboutFacts: { icon: LineIconName; label: string }[] = [
  { icon: "software", label: "Software and training in one studio" },
  { icon: "plan", label: "Written scope before the build" },
  { icon: "quality", label: "Certificates you can verify" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <LeafDecor spot="hero" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-5 pt-24 pb-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 lg:pt-28 lg:pb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">Software · Cloud · Training · Consulting</p>
            <h1 className="mt-3 max-w-xl font-display text-[2.65rem] leading-[1.02] font-bold text-green-900 sm:text-5xl lg:text-[3.55rem]">
              Technology that
              <br />
              grows with
              <br />
              <span className="hero-gold">your business.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              We design, develop, and deliver software, cloud architecture, and practical technology training that help businesses and individuals grow.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact/" prefetch={false} className={goldButton}>
                Discuss a Project
                <ArrowIcon />
              </Link>
              <Link href="/training/" prefetch={false} className={ghostButton}>
                Explore Training
                <ArrowIcon />
              </Link>
            </div>
            <ul className="mt-5 grid max-w-lg grid-cols-3 gap-2 sm:gap-3">
              {trustPoints.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f6e7c4] text-[#8A6416] sm:size-9">
                    <LineIcon name={item.icon} className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold leading-tight text-green-900 sm:text-sm">{item.title}</span>
                    <span className="block text-[11px] leading-tight text-muted-foreground">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none">
            <Image
              src="/images/hero-devices.webp"
              alt="Laptop showing code, a smartphone, and potted plants on a light desk"
              fill
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="hero-blend object-contain object-center"
            />
            {heroCards.map((card) => (
              <p key={card.label} className={`${card.className} flex items-center gap-2 rounded-2xl border border-[#eadfce] bg-white/95 px-2.5 py-2 shadow-[0_10px_28px_rgba(15,59,36,0.08)]`}>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#C9962F] text-[#8A6416]">
                  <LineIcon name={card.icon} className="size-4" />
                </span>
                <span className="text-xs font-semibold whitespace-nowrap text-green-900 sm:text-sm">{card.label}</span>
              </p>
            ))}
          </div>
        </div>
        {homeStats.length > 0 ? (
          <ul className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-8 sm:grid-cols-3">
            {homeStats.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-display text-3xl text-green-900">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section id="services" className="relative overflow-hidden px-5 py-10 lg:py-12">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our services</p>
            <h2 className="mt-2 font-display text-3xl text-green-900 md:text-4xl">End-to-end Technology Services</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">From idea to execution, we help you build, modernise, and scale with the right technology and architecture.</p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {homeServices.map((item, index) => (
              <li key={item.title} className="reveal lift flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-[0_8px_24px_rgba(15,59,36,0.04)]" style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}>
                <span className="grid size-10 place-items-center rounded-full bg-[#f6e7c4] text-[#8A6416]">
                  <LineIcon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-3 font-sans text-[0.95rem] leading-snug font-bold text-green-900">{item.title}</h3>
                <p className="mt-1.5 flex-1 text-[13px] leading-snug text-muted-foreground">{item.body}</p>
                <Link href={item.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Learn more
                  <span className="sr-only"> about {item.title}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-900 text-cream" aria-labelledby="training-band">
        <LeafDecor spot="training" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 lg:grid-cols-2 lg:gap-8 lg:py-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src="/images/training-session.webp"
              alt="A person in a video call on a laptop during a live training session"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#F0C463] uppercase">Training & mentoring</p>
            <h2 id="training-band" className="mt-2 font-display text-3xl text-cream md:text-4xl">Build Skills. Build Careers.</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/80 md:text-base">
              Live online training and mentoring for people learning the tools we use on real projects. Corporate programs are scoped for the team in front of us.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {trainingPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-2 rounded-xl border border-[#F0C463]/30 bg-white/5 px-2.5 py-2">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-[#F0C463]/70 text-[#F0C463]">
                    <LineIcon name={point.icon} className="size-4" />
                  </span>
                  <span className="text-xs leading-snug font-semibold text-cream">{point.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/training/" className={`${goldButton} mt-4`}>
              Explore Training Programs
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="relative overflow-hidden px-5 py-10 lg:py-12">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our work</p>
            <h2 className="mt-2 font-display text-3xl text-green-900 md:text-4xl">Some of Our Recent Projects</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">Published relationships. We do not invent results or client stories.</p>
            <Link href="/portfolio/" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-900">
              View all projects
              <ArrowIcon />
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {publishedWork.map((project, index) => (
              <li key={project.name} className="reveal lift overflow-hidden rounded-2xl border border-border bg-card" style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}>
                <div className="relative aspect-[4/3]">
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-base font-bold text-green-900">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                      {project.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{project.summary}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-[#f6e7c4] px-2.5 py-0.5 text-[11px] font-medium text-[#6b4a12]">{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 border-t border-border pt-5 sm:flex-row">
            <p className="shrink-0 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">Trusted by</p>
            <ClientStrip />
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden bg-cream-dark/45 px-5 py-10 lg:py-12">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Why choose Selvi Infotech</p>
            <h2 className="mt-2 font-display text-3xl text-green-900 md:text-4xl">Your Technology Partner for Long-Term Success</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We combine practical building experience and a clear written scope so the work stays understandable after launch.
            </p>
            <Link href="/contact/" className="mt-4 inline-flex h-11 items-center rounded-full bg-green-900 px-5 text-sm font-semibold text-cream hover:bg-green-800">
              Talk to an Expert
            </Link>
          </div>
          <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:col-span-7">
            {whyTiles.map((tile) => (
              <li key={tile.title} className="flex gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f6e7c4] text-[#8A6416]">
                  <LineIcon name={tile.icon} className="size-6" />
                </span>
                <span>
                  <h3 className="font-sans text-sm font-bold text-green-900">{tile.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{tile.body}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden px-5 py-10 lg:py-12">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our process</p>
            <h2 className="mt-2 font-display text-3xl text-green-900 md:text-4xl">A Simple and Proven Development Process</h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">Five steps, from the first conversation to handover. You can see the work at each one.</p>
          </div>
          <div className="mt-6">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-dark/40 px-5 py-10 lg:py-12" aria-labelledby="about-home">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.webp"
              alt="A person working at a laptop in a bright workspace"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">About Selvi Infotech</p>
            <h2 id="about-home" className="mt-2 font-display text-3xl text-green-900 md:text-4xl">Driven by Passion for Technology and Knowledge Sharing</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Selvi Infotech Private Limited builds software and trains people in the same tools. The work and the teaching sit in one studio, including for remote teams.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {aboutFacts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#C9962F]">
                    <LineIcon name={fact.icon} className="size-5" />
                  </span>
                  <span className="text-xs leading-snug font-semibold text-green-900">{fact.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/about/" className={`${goldButton} mt-5`}>
              Learn More About Us
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {homeTestimonials.length > 0 ? (
        <section className="px-5 py-10" aria-label="Client notes">
          <ul className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {homeTestimonials.map((item) => (
              <li key={item.name} className="rounded-2xl border border-border bg-card p-5">
                <blockquote className="text-green-900">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-3 text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="border-y border-border px-5 py-8 lg:py-10" aria-labelledby="tech-logos">
        <div className="mx-auto max-w-7xl">
          <h2 id="tech-logos" className="text-center font-display text-3xl text-green-900 md:text-4xl">Technologies we use</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">Tools in the stack we ship with.</p>
          <div className="mt-5 overflow-x-auto">
            <TechMarks />
          </div>
          {clientLogos.length > 0 ? (
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-center text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our clients</h3>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-6">
                {clientLogos.map((logo) => (
                  <li key={logo.name}>
                    <a href={logo.href} target="_blank" rel="noopener noreferrer">
                      <Image src={logo.src} alt={`${logo.name} logo`} width={120} height={36} sizes="120px" className="h-8 w-auto" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-[#f3ece3] px-5 py-10 lg:py-14">
        <LeafDecor spot="cta" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-green-900 md:text-5xl">Let&apos;s Build Something Great Together</h2>
          <p className="mt-2 text-muted-foreground">Have a project idea, a training requirement, or a question? We&apos;d love to hear from you.</p>
          <Link href="/contact/" className={`${goldButton} mt-5`}>
            Discuss a Project
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
