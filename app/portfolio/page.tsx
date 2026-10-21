import { PageHero } from "@/components/page-hero";
import { isPortfolioPublic, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

const visible = isPortfolioPublic();

export const metadata = pageMetadata({
  title: "Portfolio | Selvi Infotech",
  description: "Selected software and app work by Selvi Infotech Private Limited.",
  path: "/portfolio/",
  noIndex: !visible,
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        lede={
          visible
            ? "A short record of work we are willing to describe in public."
            : "This page is hidden from the menu and the sitemap until real projects replace the placeholders in data/projects.ts and PORTFOLIO_READY is set to true. The cards below are not client work."
        }
        crumbs={[{ name: "Home", path: "/" }, { name: "Portfolio" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3">
        {projects.map((project, index) => (
          <article key={`${project.title}-${index}`} className="rounded-[1.5rem] border border-dashed border-gold-bright/60 bg-card p-5">
            <h2 className="font-display text-2xl text-green-900">{project.title}</h2>
            <p className="mt-2 text-sm font-semibold text-gold">{project.client}</p>
            <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full bg-cream-dark px-3 py-1 text-xs text-green-900">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
