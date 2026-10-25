import Link from "next/link";
import { ClientStrip } from "@/components/client-strip";
import { CtaBand } from "@/components/cta-band";
import { FounderSpotlight } from "@/components/founder-spotlight";
import { PageHero } from "@/components/page-hero";
import { TechPills } from "@/components/tech-pills";
import { workImages } from "@/data/visuals";
import { pageMetadata } from "@/lib/seo";
import { site, stack } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Selvi Infotech | Software Company in Chennai & Tamil Nadu",
  description:
    "Selvi Infotech Private Limited is a software company in Chennai and Tamil Nadu, led by founder Kumaran. Software, mobile apps, web, maintenance, consulting, and IT training.",
  path: "/about/",
});

const facts = [
  ["Legal name", site.name],
  ["Udyam registration", site.udyam],
  ["Email", site.email],
  ["Phone and WhatsApp", site.phoneDisplay],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title={
          <>
            About <span className="text-gold-bright">Selvi Infotech</span>
          </>
        }
        lede="Selvi Infotech Private Limited builds software, mobile apps, and websites, maintains systems that are already live, and trains people in the same tools."
        crumbs={[{ name: "Home", path: "/" }, { name: "About" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">The studio</p>
          <h2 className="mt-3 font-display text-4xl text-green-900">In person when it helps, remote when it does not</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Training runs in person and as live online sessions. Cloud classes are primarily online because of the lab setup. A project starts with a written scope, whether the client is nearby or working remotely.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Selvi Infotech Private Limited builds software, mobile applications, and IT training. The same people who write the software also teach the tools.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We work with startups and larger teams on systems that still need care after launch. Training uses the stacks we ship, and a completion certificate can be checked on the verification page.
          </p>
        </div>
        <div>
          <img
            src={workImages["software-development"].src}
            alt={workImages["software-development"].alt}
            width={960}
            height={640}
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
            decoding="async"
            className="mb-4 aspect-[16/10] w-full rounded-2xl object-cover"
          />
        <dl className="grid gap-3 sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{label}</dt>
              <dd className="mt-2 break-words text-green-900 [overflow-wrap:anywhere]">
                {label === "Email" ? <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{value}</a> : null}
                {label === "Phone and WhatsApp" ? <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>{value}</a> : null}
                {label !== "Email" && label !== "Phone and WhatsApp" ? value : null}
              </dd>
            </div>
          ))}
        </dl>
        </div>
      </section>

      <section className="border-y border-border bg-card py-10">
        <p className="px-5 text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">How we work</p>
        <ul className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-center gap-3 px-5">
          {["Written scope", "Hands-on training", "Agreed support", "Handover notes", "Visible cycles", "Scoped dates"].map((item) => (
            <li key={item} className="rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-green-900">
              {item}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-6 max-w-6xl px-5">
          <TechPills items={stack} showLabel={false} centered />
        </div>
      </section>

      <FounderSpotlight />

      <section className="border-t border-border py-12 md:py-14" aria-labelledby="about-clients">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Trusted by</p>
            <h2 id="about-clients" className="mt-3 font-display text-4xl text-green-900">Companies we work with</h2>
            <p className="mt-3 text-muted-foreground">Names are shown as wordmarks. We do not use their logos here.</p>
          </div>
          <ClientStrip />
        </div>
        <p className="mt-8 text-center">
          <Link href="/contact/" className="text-sm font-semibold text-green-800 underline underline-offset-4">
            Work with us
          </Link>
        </p>
      </section>
      <CtaBand />
    </>
  );
}
