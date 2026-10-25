import Link from "next/link";
import { ClientStrip } from "@/components/client-strip";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { FounderSpotlight } from "@/components/founder-spotlight";
import { HomeHero } from "@/components/home-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { TechPills } from "@/components/tech-pills";
import { StackCard, StackingDeck } from "@/components/stacking-deck";
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
  ["Written into the scope", "Access, data, and hosting choices are part of the written scope, including who can see what after launch."],
  ["Visible cycles", "You see the software while it can still change, on the dates written into the scope."],
  ["Sized for the work", "We size the system for the traffic and data you actually have, and we say so when a design will not hold."],
  ["Builders and trainers", "The people who build the software also run the training, in the same tools."],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeHero />

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
                className={`offer-card reveal lift flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border transition-colors hover:border-gold-bright ${item.featured ? "border-white/10 bg-green-900 text-cream" : "border-border bg-card"}`}
                style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
              >
                <div className="overflow-hidden">
                  <div data-parallax="8">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      width={960}
                      height={640}
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full scale-110 object-cover"
                    />
                  </div>
                </div>
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
          <div className="mt-6">
            <TechPills items={stack} showLabel={false} />
          </div>
          <div id="clients" className="mt-5 flex flex-col items-start gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:gap-4">
            <p className="shrink-0 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Trusted by</p>
            <ClientStrip />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <div data-parallax="16">
              <img
                src={workImages["web-development"].src}
                alt={workImages["web-development"].alt}
                width={960}
                height={640}
                sizes="(min-width: 1152px) 1088px, 100vw"
                loading="lazy"
                decoding="async"
                className="aspect-[21/8] w-full scale-110 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </StackCard>

      <StackCard>
      <section id="why-us" className="stack-fill px-5 py-14 md:py-16">
        <div className="why-layout mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4">
            <div className="mb-5 overflow-hidden rounded-2xl">
              <div data-parallax="14">
                <img
                  src={workImages["it-consulting"].src}
                  alt={workImages["it-consulting"].alt}
                  width={960}
                  height={640}
                  sizes="(min-width: 1024px) 360px, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full scale-110 object-cover"
                />
              </div>
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl text-green-900">The studio advantage</h2>
            <p className="mt-4 text-muted-foreground">A project starts with a written scope, moves in cycles you can see, and ends with the source and a person to call.</p>
            <p className="mt-4 text-muted-foreground">
              Selvi Infotech Private Limited builds software, mobile apps, and websites, maintains systems that are already live, and trains people in the same tools. We work with clients in Chennai, across Tamil Nadu, and with remote clients elsewhere in India.
            </p>
            <Link href="/about/" className="mt-6 inline-flex h-12 items-center self-start rounded-full bg-green-800 px-6 text-sm font-semibold text-white hover:bg-green-900">
              About the company
            </Link>
          </div>
          <div className="why-points grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {advantages.map(([title, body], index) => (
              <article key={title} className="reveal lift flex h-full flex-col rounded-2xl border border-border bg-card p-5" style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
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
            <p className="mt-3 text-muted-foreground">Five steps, from the first call to handover. You can see the work at each one.</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>
      </StackCard>

      <StackCard>
      <FounderSpotlight variant="stack" />
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
