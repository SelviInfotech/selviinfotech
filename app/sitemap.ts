import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { services } from "@/data/services";
import { isPortfolioPublic } from "@/data/projects";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about/", "/contact/", "/training/", "/verify/", "/blog/"];
  const servicePaths = services.map((service) => `/services/${service.slug}/`);
  const postPaths = getPosts().map((post) => `/blog/${post.slug}/`);
  const portfolio = isPortfolioPublic() ? ["/portfolio/"] : [];

  return [...staticPaths, ...servicePaths, ...postPaths, ...portfolio].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
