import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FounderSpotlight } from "@/components/founder-spotlight";
import { HeroMockup } from "@/components/hero-mockup";
import { ProcessTimeline } from "@/components/process-timeline";
import { StackCard, StackingDeck } from "@/components/stacking-deck";
import { clients } from "@/data/clients";
import { workImages } from "@/data/visuals";
import { isTestimonialsPublic, testimonials } from "@/data/testimonials";
import { JsonLd } from "@/lib/json-ld";
import { faqSchema } from "@/lib/schema";
import { engagementSteps, site, stack } from "@/lib/site";

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

const offerings = [
  {
    href: "/services/software-development/",
    title: "Software Development",
    body: "Custom systems scoped in writing, built in cycles, and handed over with the source.",
    cta: "Start a project",
    featured: true,
    image: workImages["software-development"],
  },
  {
    href: "/services/mobile-app-development/",
    title: "Mobile App Development",
    body: "Phone apps for Android and iOS, scoped before the first screen is built.",
    cta: "See mobile work",
    featured: false,
    image: workImages["mobile-app-development"],
  },
  {
    href: "/services/web-development/",
    title: "Web Development",
    body: "Public sites and logged-in products, handed over with the source and deploy notes.",
    cta: "Plan a site",
    featured: false,
    image: workImages["web-development"],
  },
  {
    href: "/services/web-maintenance/",
    title: "Web App Maintenance",
    body: "Fixes, updates, and small changes so a live site stays true and runnable.",
    cta: "Talk maintenance",
    featured: false,
    image: workImages["web-maintenance"],
  },
  {
    href: "/training/",
    title: "Training Programs",
    body: "Hands-on programs for new developers and teams. Certificates can be verified online.",
    cta: "View programs",
    featured: false,
    image: workImages.training,
  },
  {
    href: "/services/it-consulting/",
    title: "IT Consultations",
    body: "A written note on architecture or next steps, one you can act on or take elsewhere.",
    cta: "Book a call",
    featured: false,
    image: workImages["it-consulting"],
  },
];

const advantages = [
  ["Trusted & Secure", "We follow industry best practices for security, data privacy, and compliance in every project we deliver."],
  ["On-Time Delivery", "Our agile approach ensures consistent, predictable delivery milestones with full transparency throughout the process."],
  ["High Performance", "We build optimized, scalable solutions that perform exceptionally under real-world loads and traffic."],
  ["Expert Team", "Our certified engineers and trainers bring years of industry experience across multiple domains and technologies."],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="relative overflow-hidden bg-green-900 text-cream" id="home">
        <div className="mesh" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="mesh-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-28 pb-14 md:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-gold-bright uppercase">
              Premium IT Solutions
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-cream md:text-7xl">
              Crafting Digital
              <span className="mt-2 block text-gold-bright">Excellence</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              We design, build, and maintain world-class software solutions — from custom enterprise platforms to mobile apps and developer training programs that grow your team&apos;s capabilities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 transition hover:-translate-y-0.5 hover:bg-[#e0b85a] motion-reduce:hover:translate-y-0"
              >
                Start a project
              </Link>
              <a
                href="#services"
                className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream transition hover:bg-white/10"
              >
                Explore services
              </a>
              <Link href="/verify/" className="px-2 text-sm font-semibold text-gold-bright underline-offset-4 hover:underline">
                Verify a certificate
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <HeroMockup />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream-dark/60" aria-label="How a project runs">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {engagementSteps.map(([title, body]) => (
            <li key={title}>
              <p className="font-display text-2xl text-green-900">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <StackingDeck>
      <StackCard>
      <section id="services" className="stack-fill px-5 py-14 md:py-16">
        <div className="stack-body mx-auto flex w-full max-w-6xl flex-col">
          <div className="max-w-2xl shrink-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">What we offer</p>
            <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Services, built as products</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              End-to-end digital solutions for companies in Chennai and Tamil Nadu, and for remote clients across India.
            </p>
          </div>
          <div className="offer-grid mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, index) => (
              <article
                key={item.title}
                className={`offer-card reveal lift flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border ${item.featured ? "border-white/10 bg-green-900 text-cream" : "border-border bg-card"}`}
                style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={960}
                  height={640}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full shrink-0 object-cover"
                />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className={`font-display text-2xl leading-tight ${item.featured ? "text-cream" : "text-green-900"}`}>{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${item.featured ? "text-cream/80" : "text-muted-foreground"}`}>{item.body}</p>
                  <Link
                    href={item.href}
                    className={`mt-auto pt-3 inline-flex text-sm font-semibold underline-offset-4 hover:underline ${item.featured ? "text-gold-bright" : "text-green-800"}`}
                  >
                    {item.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </StackCard>

      <StackCard>
      <section className="stack-fill px-5 py-14 md:py-16" aria-labelledby="stack-heading">
        <div className="stack-body mx-auto flex w-full max-w-6xl flex-col">
          <div className="flex shrink-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Technologies we use</p>
              <h2 id="stack-heading" className="mt-3 font-display text-4xl text-green-900 md:text-5xl">The stack we ship</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              We pick from this stack based on the system and on what your team can maintain.
            </p>
          </div>
          <ul className="tech-grid mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item} className="rounded-full border border-green-800/15 bg-green-100 px-3 py-1.5 text-sm font-medium text-green-900">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      </StackCard>

      <StackCard>
      <section id="why-us" className="stack-fill px-5 py-14 md:py-16">
        <div className="why-layout mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl text-green-900">The studio advantage</h2>
            <p className="mt-4 text-muted-foreground">We combine technical depth with a client-first mindset to deliver exceptional results.</p>
            <p className="mt-4 text-muted-foreground">
              Selvi Infotech Private Limited builds software, mobile apps, and websites, maintains systems that are already live, and trains people in the same tools. We work with clients in Chennai, across Tamil Nadu, and with remote clients elsewhere in India.
            </p>
            <Link href="/about/" className="mt-6 inline-flex h-12 items-center self-start rounded-full bg-green-800 px-6 text-sm font-semibold text-white hover:bg-green-900">
              About the company
            </Link>
          </div>
          <div className="why-points grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {advantages.map(([title, body], index) => (
              <article key={title} className="reveal lift flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-5" style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
                <h3 className="font-display text-2xl text-green-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </StackCard>

      <StackCard>
      <section id="process" className="stack-fill px-5 py-14 md:py-16">
        <div className="stack-body mx-auto flex w-full max-w-6xl flex-col">
          <div className="mb-6 max-w-2xl shrink-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">How we work</p>
            <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">A process you can see</h2>
            <p className="mt-3 text-muted-foreground">A transparent, structured approach that ensures quality outcomes every time.</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>
      </StackCard>

      <StackCard>
      <FounderSpotlight variant="stack" />
      </StackCard>

      <StackCard>
      <section id="clients" className="stack-fill px-5 py-14 md:py-16" aria-labelledby="clients-heading">
        <div className="stack-body mx-auto flex w-full max-w-6xl flex-col">
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Trusted by</p>
              <h2 id="clients-heading" className="mt-3 font-display text-4xl text-green-900">Clients</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Names are shown as wordmarks. We do not use their logos here.</p>
          </div>
          <ul className="client-grid mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {clients.map((client) => (
              <li key={client.name} className="min-h-0">
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={client.label}
                  className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card px-4 py-4 transition hover:border-gold-bright"
                >
                  <span className="font-display text-2xl text-green-900">{client.name}</span>
                  <span className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{client.tag}</span>
                </a>
              </li>
            ))}
            <li className="min-h-0">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-green-900 px-4 py-4 text-cream">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold-bright uppercase">Start a project</p>
                <a className="mt-2 text-sm font-semibold break-words text-cream underline decoration-gold-bright underline-offset-4 [overflow-wrap:anywhere]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <a className="mt-1 text-sm font-semibold text-cream underline decoration-gold-bright underline-offset-4" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>
          <p className="mt-4 shrink-0 text-sm leading-relaxed text-muted-foreground">
            We work with clients in Chennai and across Tamil Nadu, and with remote clients elsewhere in India.
          </p>
        </div>
      </section>
      </StackCard>

      {isTestimonialsPublic() ? (
        <StackCard>
        <section className="mx-auto max-w-6xl px-5 py-16" aria-label="Client notes">
          <ul className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <li key={item.name} className="rounded-2xl border border-border bg-card p-5">
                <blockquote className="text-green-900">&ldquo;{item.quote}&rdquo;</blockquote>
                <p className="mt-3 text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </li>
            ))}
          </ul>
        </section>
        </StackCard>
      ) : null}

      <StackCard>
      <section id="faq" className="stack-fill px-5 py-14 md:py-16">
        <div className="faq-layout mx-auto grid w-full max-w-6xl items-start gap-8 lg:grid-cols-12">
          <div className="faq-copy lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">FAQ</p>
              <h2 className="mt-3 font-display text-4xl text-green-900">Common questions</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We work with clients in Chennai and across Tamil Nadu, and with remote clients elsewhere in India. Call, WhatsApp, or email and we will tell you whether a meeting or a remote scope is the better start.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Talk to the studio</p>
              <p className="mt-3">
                <a className="font-semibold text-green-800 underline decoration-gold-bright underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p className="mt-1">
                <a className="font-semibold text-green-800 underline decoration-gold-bright underline-offset-4" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{site.place}</p>
            </div>
          </div>
          <FaqList items={homeFaqs} className="faq-list max-w-none lg:col-span-8" />
        </div>
      </section>
      </StackCard>

      <StackCard>
      <CtaBand layout="panel" />
      </StackCard>
      <StackCard>
      <ContactSection />
      </StackCard>
      </StackingDeck>
    </>
  );
}
