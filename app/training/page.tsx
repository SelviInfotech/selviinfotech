import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { StatValue } from "@/components/stat-value";
import { courses, trainingFaqs } from "@/data/courses";
import { JsonLd } from "@/lib/json-ld";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "IT Training in Chennai & Tamil Nadu | Selvi Infotech",
  description:
    "IT training in Chennai and Tamil Nadu: full stack web, Flutter and React Native, data science, Python, Java, cloud, and UI/UX. Certificates can be verified online.",
  path: "/training/",
});

const badgeTone = {
  popular: "bg-green-800 text-white",
  new: "bg-gold-bright text-green-900",
  level: "bg-cream-dark text-green-900",
} as const;

export default function TrainingPage() {
  return (
    <>
      <JsonLd data={faqSchema(trainingFaqs)} />
      <PageHero
        eyebrow="Certified programs"
        title={
          <>
            Industry-ready <span className="text-gold-bright">training programs</span>
          </>
        }
        lede="Hands-on, project-based courses designed to launch your tech career or upskill your team. Taught by industry practitioners, in Chennai and across Tamil Nadu, and online for remote learners."
        crumbs={[{ name: "Home", path: "/" }, { name: "Training" }]}
      >
        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
          <div>
            <dt className="font-display text-3xl text-cream tabular-nums"><StatValue value={10000} /></dt>
            <dd className="text-xs tracking-wide text-cream/70 uppercase">Students trained</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-cream tabular-nums"><StatValue value={7} /></dt>
            <dd className="text-xs tracking-wide text-cream/70 uppercase">Programs</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-cream">100%</dt>
            <dd className="text-xs tracking-wide text-cream/70 uppercase">Placement support</dd>
          </div>
        </dl>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Our courses</p>
        <h2 className="mt-3 font-display text-4xl text-green-900">Choose a learning path</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From beginner to advanced. Completion certificates are issued by {site.name} and can be checked on the{" "}
          <Link href="/verify/" className="font-semibold text-green-800 underline underline-offset-4">verification page</Link>.
        </p>
        <div className="mt-12 flex flex-col gap-8">
          {courses.map((course) => (
            <article key={course.id} id={course.id} className="reveal overflow-hidden rounded-[1.75rem] border border-border bg-card">
              <div className="grid gap-6 border-b border-border p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-8">
                  <div className="flex flex-wrap gap-2">
                    {course.badges.map((badge) => (
                      <span key={badge.label} className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeTone[badge.tone]}`}>
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-green-900">{course.title}</h3>
                  <p className="mt-2 text-muted-foreground">{course.tagline}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-2 md:col-span-4 md:justify-end">
                  {[course.duration, course.mode, "Certificate"].map((pill) => (
                    <li key={pill} className="rounded-full border border-border px-3 py-1 text-sm text-green-900">
                      {pill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-8 p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-8">
                  <h4 className="font-sans text-xs font-semibold tracking-[0.16em] text-gold uppercase">Curriculum</h4>
                  <ol className="mt-4 grid gap-4 sm:grid-cols-2">
                    {course.modules.map((module, index) => (
                      <li key={module.title} className="rounded-2xl bg-cream-dark/60 p-4">
                        <p className="font-display text-sm text-gold">{String(index + 1).padStart(2, "0")}</p>
                        <p className="mt-1 font-semibold text-green-900">{module.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{module.detail}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="md:col-span-4">
                  <h4 className="font-sans text-xs font-semibold tracking-[0.16em] text-gold uppercase">Highlights</h4>
                  <ul className="mt-4 space-y-2 text-sm text-green-900">
                    {course.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gold" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact/" className="mt-6 inline-flex h-11 items-center rounded-full bg-green-800 px-5 text-sm font-semibold text-white hover:bg-green-900">
                    Enquire now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="corporate" className="px-5 pb-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-green-900 px-6 py-12 text-cream md:grid-cols-2 md:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-bright uppercase">For companies</p>
            <h2 className="mt-3 font-display text-4xl text-cream">Corporate and team training</h2>
            <p className="mt-4 text-cream/80">
              We design and deliver customised training programs for enterprises looking to upskill their development teams. Scheduling can be on-site in Chennai and across Tamil Nadu, online, or a mix. The curriculum follows the tools your developers already use.
            </p>
          </div>
          <div>
            <ul className="space-y-2 text-sm text-cream/90">
              <li>✓ Custom curriculum aligned to your tech stack</li>
              <li>✓ On-site, online, or hybrid delivery</li>
              <li>✓ Batch sizes discussed when you enquire</li>
              <li>✓ Pre and post-training skill checks when useful</li>
              <li>✓ Completion certificates for participants</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact/" className="inline-flex h-12 items-center rounded-full bg-gold-bright px-5 text-sm font-semibold text-green-900">
                Request a proposal
              </Link>
              <a href={`mailto:${site.email}`} className="inline-flex h-12 items-center rounded-full border border-cream/40 px-5 text-sm font-semibold text-cream">
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-display text-4xl text-green-900">Common questions</h2>
          <FaqList items={trainingFaqs} />
        </div>
      </section>
      <CtaBand title="Ask about the next batch" body="We share the schedule, fees, and a suggested path after you write." />
    </>
  );
}
