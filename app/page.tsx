import Image from "next/image";
import Link from "next/link";
import { ClassScreen } from "@/components/class-screen";
import { ClientStrip } from "@/components/client-strip";
import { FaqList } from "@/components/faq-list";
import { HeroStage } from "@/components/hero-stage";
import { LeafDecor, PottedPlant } from "@/components/botanicals";
import { LineIcon } from "@/components/line-icon";
import { ProcessTimeline } from "@/components/process-timeline";
import { WorkMock } from "@/components/work-mock";
import {
  clientLogos,
  homeServices,
  homeStats,
  homeTestimonials,
  publishedWork,
  techLogos,
  trainingPoints,
  whyTiles,
} from "@/data/home";
import { JsonLd } from "@/lib/json-ld";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const homeFaqs = [
  {
    question: "Where does Selvi Infotech work?",
    answer:
      "We work with clients in Chennai and across Tamil Nadu, and with remote clients elsewhere in India. Call, WhatsApp, or email and we will tell you whether a meeting or a remote scope is the better start.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Software development, mobile app development with Flutter, React Native, and native Android or iOS, web development, web app maintenance, IT training, and IT consulting.",
  },
  {
    question: "How do I contact Selvi Infotech?",
    answer:
      "Email info@selviinfotech.com, call or WhatsApp +91 9500316716, or use the contact form. The form opens an email draft. It does not send the message by itself.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "React and Next.js, Node.js, C# and ASP.NET Core, Python, Java Spring Boot, SQL Server, and Azure. We pick from that list based on the system and on what your team can maintain.",
  },
  {
    question: "Can you maintain the software after launch?",
    answer:
      "Yes. Ongoing fixes, updates, and small changes are covered as [web maintenance](/services/web-maintenance/), scoped separately from the original build.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="relative overflow-hidden border-b border-border">
        <LeafDecor spot="hero" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 pt-28 pb-12 md:pt-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:pb-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">Software · Cloud · Training · Consulting</p>
            <h1 className="mt-4 max-w-xl font-display text-[2.6rem] leading-[1.08] text-green-900 sm:text-5xl lg:text-[3.35rem]">
              Technology that grows with <span className="text-gold">your business.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We design, develop, and deliver software, cloud architecture, and practical technology training that help businesses and individuals grow.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact/" prefetch={false} className="inline-flex h-12 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900 shadow-sm transition hover:bg-[#b8872a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900/40">
                Discuss a Project
              </Link>
              <Link href="/training/" prefetch={false} className="inline-flex h-12 items-center rounded-full border border-green-900/25 bg-white/60 px-6 text-sm font-semibold text-green-900 transition hover:border-[#C9962F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900/30">
                Explore Training
              </Link>
            </div>
          </div>
          <HeroStage />
        </div>
        {homeStats.length > 0 ? (
          <ul className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-10 sm:grid-cols-3">
            {homeStats.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-display text-3xl text-green-900">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section id="services" className="relative overflow-hidden px-5 py-16 md:py-20">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our services</p>
            <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">End-to-end Technology Services</h2>
            <p className="mt-3 text-muted-foreground">From idea to execution, we help you build, modernise, and scale with the right technology and architecture.</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {homeServices.map((item, index) => (
              <li key={item.title} className="reveal lift flex h-full flex-col rounded-[1.4rem] border border-border bg-card p-5" style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}>
                <span className="grid size-11 place-items-center rounded-2xl bg-[#f6e7c4] text-[#8A6416]">
                  <LineIcon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-[1.35rem] leading-tight text-green-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-green-800 underline-offset-4 hover:underline">
                  Learn More →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-900 text-cream" aria-labelledby="training-band">
        <LeafDecor spot="training" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#F0C463] uppercase">Training & mentoring</p>
            <h2 id="training-band" className="mt-3 font-display text-4xl text-cream md:text-5xl">Build Skills. Build Careers.</h2>
            <p className="mt-4 max-w-xl text-cream/80">
              Live online training and mentoring for people learning the tools we use on real projects. Corporate programs are scoped for the team in front of us.
            </p>
            <Link href="/training/" className="mt-6 inline-flex h-12 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900 hover:bg-[#b8872a]">
              Explore Training Programs
            </Link>
          </div>
          <div className="grid items-center gap-5 sm:grid-cols-[minmax(0,1fr)_auto]">
            <ClassScreen />
            <ul className="space-y-3 text-sm">
              {trainingPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-[#C9962F] text-[11px] font-bold text-green-900" aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="relative overflow-hidden px-5 py-16 md:py-20">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our work</p>
              <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Some of Our Recent Projects</h2>
              <p className="mt-3 text-muted-foreground">Published relationships. We do not invent results or client stories.</p>
            </div>
            <Link href="/portfolio/" className="inline-flex h-11 shrink-0 items-center rounded-full border border-green-900/20 px-5 text-sm font-semibold text-green-900 hover:border-[#C9962F]">
              View All Projects
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {publishedWork.map((project, index) => (
              <li key={project.name} className="reveal lift overflow-hidden rounded-[1.4rem] border border-border bg-card" style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}>
                <WorkMock kind={project.mock} />
                <div className="p-5">
                  <h3 className="font-display text-2xl text-green-900">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-[#f6e7c4] px-2.5 py-1 text-xs font-medium text-[#8A6416]">{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-green-800 underline-offset-4 hover:underline">
                    Visit site →
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="shrink-0 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">Trusted by</p>
            <ClientStrip />
          </div>
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden bg-cream-dark/45 px-5 py-16 md:py-20">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Why choose Selvi Infotech</p>
            <h2 className="mt-3 font-display text-4xl text-green-900">Your Technology Partner for Long-Term Success</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We combine practical building experience and a clear written scope so the work stays understandable after launch.
            </p>
            <Link href="/contact/" className="mt-6 inline-flex h-12 items-center rounded-full bg-green-900 px-6 text-sm font-semibold text-cream hover:bg-green-800">
              Talk to an Expert
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {whyTiles.map((tile, index) => (
              <li key={tile.title} className="reveal lift rounded-[1.3rem] border border-border bg-card p-5" style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}>
                <span className="grid size-10 place-items-center rounded-xl bg-[#f6e7c4] text-[#8A6416]">
                  <LineIcon name={tile.icon} className="size-5" />
                </span>
                <h3 className="mt-3 font-display text-xl text-green-900">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tile.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden px-5 py-16 md:py-20">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our process</p>
            <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">A Simple and Proven Development Process</h2>
            <p className="mt-3 text-muted-foreground">Five steps, from the first conversation to handover. You can see the work at each one.</p>
          </div>
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-dark/40 px-5 py-16 md:py-20" aria-labelledby="about-home">
        <LeafDecor spot="corners" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-[1.8rem] border border-border bg-card">
            <LeafDecor spot="page" />
            <PottedPlant className="absolute -bottom-6 left-2 h-64 w-48" />
            <div className="absolute top-8 right-6 max-w-[13rem] text-right">
              <p className="font-sans text-xs font-semibold tracking-[0.22em] text-gold">SELVI INFOTECH</p>
              <p className="mt-2 font-display text-3xl text-green-900">Software & training</p>
              <p className="mt-2 text-sm text-muted-foreground">One studio for building and teaching.</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">About Selvi Infotech</p>
            <h2 id="about-home" className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Driven by Passion for Technology and Knowledge Sharing</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Selvi Infotech Private Limited builds software and trains people in the same tools. The work and the teaching sit in one studio, for clients in Chennai, across Tamil Nadu, and remote teams in India.
            </p>
            <Link href="/about/" className="mt-6 inline-flex h-12 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900 hover:bg-[#b8872a]">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {homeTestimonials.length > 0 ? (
        <section className="px-5 py-16" aria-label="Client notes">
          <ul className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {homeTestimonials.map((item) => (
              <li key={item.name} className="rounded-[1.4rem] border border-border bg-card p-5">
                <blockquote className="text-green-900">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-3 text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="border-y border-border px-5 py-12" aria-labelledby="tech-logos">
        <div className="mx-auto max-w-7xl">
          <h2 id="tech-logos" className="text-center font-display text-3xl text-green-900 md:text-4xl">Technologies we use</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">Tools in the stack we ship with.</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {techLogos.map((logo) => (
              <li key={logo.name} className="flex items-center gap-2 text-sm font-medium text-green-900">
                <Image src={logo.src} alt={`${logo.name} logo`} width={28} height={28} sizes="28px" className="size-7" />
                <span aria-hidden="true" className="hidden text-sm sm:inline">{logo.name}</span>
              </li>
            ))}
          </ul>
          {clientLogos.length > 0 ? (
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-center text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">Our clients</h3>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-6">
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

      <section id="faq" className="px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-green-900">Common questions</h2>
            <p className="mt-4 text-muted-foreground">
              <a className="font-semibold text-green-800 underline decoration-[#C9962F] underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>
              <span aria-hidden="true"> · </span>
              <a className="font-semibold text-green-800 underline decoration-[#C9962F] underline-offset-4" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{site.place}</p>
          </div>
          <FaqList items={homeFaqs} className="lg:col-span-8" />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-[#f3ece3] px-5 py-16 md:py-20">
        <LeafDecor spot="cta" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-green-900 md:text-5xl">Let&apos;s Build Something Great Together</h2>
            <p className="mt-3 text-muted-foreground">Have a project idea, a training requirement, or a question? We&apos;d love to hear from you.</p>
          </div>
          <Link href="/contact/" className="inline-flex h-12 shrink-0 items-center rounded-full bg-[#C9962F] px-6 text-sm font-semibold text-green-900 hover:bg-[#b8872a]">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}
