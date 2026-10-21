import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/page-hero";
import { formatPostDate, getPost, getPosts } from "@/lib/blog";
import { JsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.meta.title} | Selvi Infotech`,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}/`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: {
      a: ({ href = "", ...props }) =>
        href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} target="_blank" rel="noopener noreferrer" />,
    },
  });

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    mainEntityOfPage: `${site.url}/blog/${post.meta.slug}/`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
  };

  return (
    <>
      <JsonLd data={article} />
      <PageHero
        eyebrow={
          <>
            <time dateTime={post.meta.date}>{formatPostDate(post.meta.date)}</time>
            {" · "}
            {site.shortName}
          </>
        }
        title={post.meta.title}
        lede={post.meta.description}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.meta.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <div className="prose-selvi">{content}</div>
        <p className="mt-12">
          <Link href="/blog/" className="text-sm font-semibold text-green-800 underline underline-offset-4">
            All notes
          </Link>
        </p>
      </article>
    </>
  );
}
