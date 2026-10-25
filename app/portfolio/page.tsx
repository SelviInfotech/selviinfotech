import { PageHero } from "@/components/page-hero";
import { WorkMock } from "@/components/work-mock";
import { publishedWork } from "@/data/home";
import { isPortfolioPublic, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

const caseStudies = isPortfolioPublic() ? projects : [];

export const metadata = pageMetadata({
  title: "Our Work | Software Company in Chennai & Tamil Nadu | Selvi Infotech",
  description:
    "Published work by Selvi Infotech Private Limited in Chennai and Tamil Nadu, including IvyTax, ASHT, Achutha AI, and Ains.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects we can name in public"
        lede="These are published relationships. We link to the company site and do not invent results, stacks, or case-study numbers."
        crumbs={[{ name: "Home", path: "/" }, { name: "Our Work" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-2 md:py-16">
        {publishedWork.map((project) => (
          <article key={project.name} className="overflow-hidden rounded-[1.4rem] border border-border bg-card">
            <WorkMock kind={project.mock} />
            <div className="p-5">
              <h2 className="font-display text-2xl text-green-900">{project.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-[#f6e7c4] px-2.5 py-1 text-xs font-medium text-[#8A6416]">{tag}</li>
                ))}
              </ul>
              <a href={project.href} className="mt-4 inline-flex text-sm font-semibold text-green-800 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
                Visit site →
              </a>
            </div>
          </article>
        ))}
        {caseStudies.map((project) => (
          <article key={project.title} className="rounded-[1.4rem] border border-border bg-card p-5">
            <h2 className="font-display text-2xl text-green-900">{project.title}</h2>
            <p className="mt-2 text-sm font-semibold text-gold">{project.client}</p>
            <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
          </article>
        ))}
      </section>
    </>
  );
}
