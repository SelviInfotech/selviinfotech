import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FounderSpotlight } from "@/components/founder-spotlight";
import { ProcessTimeline } from "@/components/process-timeline";
import { StatValue } from "@/components/stat-value";
import { TechMarquee } from "@/components/tech-marquee";
import { isTestimonialsPublic, testimonials } from "@/data/testimonials";
import { JsonLd } from "@/lib/json-ld";
import { faqSchema } from "@/lib/schema";

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
];

const offerings = [
  {
    href: "/services/software-development/",
    title: "Software Development",
    body: "Custom enterprise software solutions architected for scale, security, and performance. From ERP systems to SaaS platforms — we build it all.",
    detail: "React, Next.js, Node.js, .NET, Python, Java, SQL Server.",
    cta: "Start a project",
    featured: true,
  },
  {
    href: "/services/mobile-app-development/",
    title: "Mobile App Development",
    body: "Native and cross-platform mobile applications for iOS and Android. Beautiful UI, smooth performance, and seamless user experience.",
    detail: "Flutter, React Native, and native Android or iOS.",
    cta: "See mobile work",
    featured: false,
  },
  {
    href: "/services/web-development/",
    title: "Web Development",
    body: "Business websites and web applications with React and Next.js, handed over with source and notes on how to deploy.",
    detail: "Public sites and logged-in products, scoped separately.",
    cta: "Plan a site",
    featured: false,
  },
  {
    href: "/services/web-maintenance/",
    title: "Web App Maintenance",
    body: "Keep your existing web applications running at peak performance. Bug fixes, updates, security patches, and feature enhancements on demand.",
    detail: "Sites we built, and stacks we know after a review.",
    cta: "Talk maintenance",
    featured: false,
  },
  {
    href: "/training/",
    title: "Training Programs",
    body: "Industry-aligned technology training with certified curriculum. Hands-on learning in software development, cloud, data science, and more.",
    detail: "Seven programs. Certificates can be verified online.",
    cta: "View programs",
    featured: false,
  },
  {
    href: "/services/it-consulting/",
    title: "IT Consultations",
    body: "Strategic technology consulting to align your IT roadmap with business goals. Architecture reviews, tech stack guidance, and digital transformation advisory.",
    detail: "A written note you can act on, or take elsewhere.",
    cta: "Book a call",
    featured: false,
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 md:pt-40 lg:grid-cols-12 lg:pb-28">
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
          <div className="relative lg:col-span-5" aria-hidden="true">
            <div className="float-a rounded-3xl border border-cream/15 bg-green-900/50 p-5 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#c46a5a]" />
                <span className="size-2.5 rounded-full bg-gold-bright" />
                <span className="size-2.5 rounded-full bg-[#7dcea0]" />
                <span className="ml-2 font-mono text-xs text-cream/50">studio.ts</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-7 text-cream/85">
                <span className="text-gold-bright">const</span> selvi = {"{"}
                {"\n"}  build: ["React", "Flutter", ".NET"],
                {"\n"}  host: "Azure",
                {"\n"}  care: "maintenance",
                {"\n"}  train: ["web", "mobile", "data"]
                {"\n"}
                {"}"}
                <span className="caret" />
              </pre>
            </div>
            <div className="float-b absolute -bottom-6 -left-2 w-40 rounded-[1.6rem] border border-cream/20 bg-cream p-3 text-green-900 shadow-xl sm:-left-8">
              <div className="rounded-2xl bg-green-100 px-3 py-4">
                <p className="font-display text-2xl">App</p>
                <p className="mt-1 text-[11px] tracking-wide text-green-800 uppercase">Flutter · iOS · Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-cream-dark/60" aria-label="Studio record">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-3">
          {[
            [50, "Projects delivered"],
            [10000, "Students trained"],
            [10, "Years of experience"],
          ].map(([value, label]) => (
            <div key={String(label)}>
              <dt className="font-display text-4xl text-green-900 tabular-nums md:text-5xl">
                <StatValue value={Number(value)} />
              </dt>
              <dd className="mt-1 text-sm tracking-wide text-muted-foreground uppercase">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">What we offer</p>
          <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">Services, built as products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end digital solutions for companies in Chennai and Tamil Nadu, and for remote clients across India.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className={`reveal group lift flex flex-col rounded-[1.6rem] border p-6 ${item.featured ? "border-white/10 bg-green-900 text-cream md:col-span-2 lg:row-span-2 lg:p-8" : "border-border bg-card"}`}
              style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
            >
              <h3 className={`font-display text-2xl ${item.featured ? "text-cream md:text-4xl" : "text-green-900"}`}>{item.title}</h3>
              <p className={`mt-3 leading-relaxed ${item.featured ? "text-cream/80" : "text-muted-foreground"}`}>{item.body}</p>
              <p className={`mt-4 text-sm ${item.featured ? "text-gold-bright" : "text-green-800 md:opacity-0 md:transition md:group-hover:opacity-100 md:group-focus-within:opacity-100"}`}>
                {item.detail}
              </p>
              <Link
                href={item.href}
                className={`mt-auto pt-6 text-sm font-semibold underline-offset-4 hover:underline ${item.featured ? "text-gold-bright" : "text-green-800"}`}
              >
                {item.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card py-8">
        <p className="px-5 text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">Stack we ship</p>
        <div className="mt-4">
          <TechMarquee />
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl text-green-900">The studio advantage</h2>
            <p className="mt-4 text-muted-foreground">We combine technical depth with a client-first mindset to deliver exceptional results.</p>
            <Link href="/about/" className="mt-6 inline-flex h-12 items-center rounded-full bg-green-800 px-6 text-sm font-semibold text-white hover:bg-green-900">
              About the company
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {advantages.map(([title, body], index) => (
              <article key={title} className="reveal rounded-2xl border border-border bg-card p-5" style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
                <h3 className="font-display text-2xl text-green-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-cream-dark/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">How we work</p>
            <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">A process you can see</h2>
            <p className="mt-4 text-muted-foreground">A transparent, structured approach that ensures quality outcomes every time.</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <FounderSpotlight />

      <section id="clients" className="border-y border-border py-16" aria-labelledby="clients-heading">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Trusted by</p>
          <h2 id="clients-heading" className="mt-3 font-display text-4xl text-green-900">Clients</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">Names are shown as wordmarks. We do not use their logos here.</p>
        </div>
        <div className="mt-8">
          <ClientMarquee />
        </div>
      </section>

      {isTestimonialsPublic() ? (
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
      ) : null}

      <section id="faq" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">FAQ</p>
          <h2 className="mt-3 text-center font-display text-4xl text-green-900">Common questions</h2>
          <div className="mt-10">
            <FaqList items={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBand />
      <ContactSection />
    </>
  );
}
