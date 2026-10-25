import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about/", "/contact/", "/training/", "/verify/", "/blog/", "/portfolio/"];
  const servicePaths = services.map((service) => `/services/${service.slug}/`);
  const postPaths = getPosts().map((post) => `/blog/${post.slug}/`);

  return [...staticPaths, ...servicePaths, ...postPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path.startsWith("/services/") || path === "/portfolio/" ? 0.8 : 0.6,
  }));
}
