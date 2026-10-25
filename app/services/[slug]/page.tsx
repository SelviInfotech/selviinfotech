import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { RichText } from "@/components/rich-text";
import { TechPills } from "@/components/tech-pills";
import { getService, services } from "@/data/services";
import { workImage } from "@/data/visuals";
import { JsonLd } from "@/lib/json-ld";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${site.url}/services/${service.slug}/`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["Chennai", "Tamil Nadu", "India"],
  };

  return (
    <>
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={serviceSchema} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lede={service.intro}
        crumbs={[{ name: "Home", path: "/" }, { name: service.name }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 hover:bg-gold-hot">
            Start a conversation
          </Link>
          <a href={`tel:${site.phoneTel}`} className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream hover:bg-white/10">
            {site.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <figure className="mx-auto max-w-6xl px-5 pt-8">
        <img
          src={workImage(service.slug).src}
          alt={workImage(service.slug).alt}
          width={960}
          height={640}
          sizes="(min-width: 1152px) 1088px, 100vw"
          loading="lazy"
          decoding="async"
          className="h-52 w-full rounded-2xl object-cover md:h-64"
        />
      </figure>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">What this covers</p>
        <h2 className="mt-3 font-display text-4xl text-green-900">The work, in plain terms</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.sections.map((section, index) => (
            <article
              key={section.heading}
              className="reveal lift rounded-[1.6rem] border border-border bg-card p-6"
              style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
            >
              <p className="font-display text-sm text-gold">0{index + 1}</p>
              <h3 className="mt-2 font-display text-2xl text-green-900">{section.heading}</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/50 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">How we work</p>
          <h2 className="mt-3 mb-12 font-display text-4xl text-green-900">From first call to handover</h2>
          <ProcessTimeline />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-6 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-7">
          <TechPills items={service.tech} label="Tools we use" />
        </div>
        <aside className="rounded-[1.6rem] border border-border bg-card p-6 md:col-span-5">
          <h2 className="font-display text-2xl text-green-900">Talk to us</h2>
          <div className="mt-4 flex gap-2">
            <a href={`tel:${site.phoneTel}`} aria-label={`Call ${site.phoneDisplay}`} className="inline-flex size-10 items-center justify-center rounded-full border border-border text-green-800 hover:border-gold-bright">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d]">
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.6-.3M12 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 11.9C2.2 6.5 6.6 2.1 12 2.1c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.9 9.8" /></svg>
            </a>
            <a href={`mailto:${site.email}`} aria-label={`Email ${site.email}`} className="inline-flex size-10 items-center justify-center rounded-full border border-border text-green-800 hover:border-gold-bright">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6" /></svg>
            </a>
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="font-semibold text-green-800 underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
            <li><a className="font-semibold text-green-800 underline-offset-4 hover:underline break-words [overflow-wrap:anywhere]" href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
          <h3 className="mt-8 font-sans text-xs font-semibold tracking-[0.16em] text-gold uppercase">Related</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {service.related.map((item) => (
              <li key={item.href}>
                <Link className="text-green-800 underline-offset-4 hover:underline" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="px-5 pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">FAQ</p>
          <h2 className="mt-3 mb-10 text-center font-display text-4xl text-green-900">Common questions</h2>
          <FaqList items={service.faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
