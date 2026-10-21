import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { RichText } from "@/components/rich-text";
import { getService, services } from "@/data/services";
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
          <Link href="/contact/" className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 hover:bg-[#e0b85a]">
            Start a conversation
          </Link>
          <a href={`tel:${site.phoneTel}`} className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream hover:bg-white/10">
            {site.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">What this covers</p>
        <h2 className="mt-3 font-display text-4xl text-green-900">The work, in plain terms</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {service.sections.map((section, index) => (
            <article
              key={section.heading}
              className={`reveal lift rounded-[1.6rem] border border-border bg-card p-6 ${index === 0 ? "lg:col-span-2" : ""}`}
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

      <section className="bg-cream-dark/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">How we work</p>
          <h2 className="mt-3 mb-12 font-display text-4xl text-green-900">From first call to handover</h2>
          <ProcessTimeline />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Tech used</p>
          <h2 className="mt-3 font-display text-4xl text-green-900">Tools on this work</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.tech.map((item) => (
              <li key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-green-900">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-[1.6rem] border border-border bg-card p-6 md:col-span-5">
          <h2 className="font-display text-2xl text-green-900">Talk to us</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="font-semibold text-green-800 underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
            <li><a className="font-semibold text-green-800 underline-offset-4 hover:underline" href={site.whatsapp}>WhatsApp</a></li>
            <li><a className="font-semibold text-green-800 underline-offset-4 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
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
