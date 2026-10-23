import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { formatPostDate, getPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Notes on Apps, Websites, and Maintenance | Selvi Infotech",
  description:
    "Practical notes from Selvi Infotech in Chennai and Tamil Nadu on mobile app cost, website maintenance, and how software projects are scoped.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = getPosts();
  return (
    <>
      <PageHero
        eyebrow="Notes"
        title={
          <>
            Notes from the <span className="text-gold-bright">studio</span>
          </>
        }
        lede="Short, specific writing about software, apps, and websites for clients in Chennai, Tamil Nadu, and across India. No invented numbers."
        crumbs={[{ name: "Home", path: "/" }, { name: "Blog" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-2 md:py-16">
        {posts.map((post, index) => (
          <article key={post.slug} className="reveal lift flex flex-col rounded-[1.6rem] border border-border bg-card p-6" style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
            <p className="text-sm text-gold">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h2 className="mt-3 font-display text-3xl text-green-900">
              <Link href={`/blog/${post.slug}/`} className="hover:text-green-800">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 flex-1 text-muted-foreground">{post.description}</p>
            <Link href={`/blog/${post.slug}/`} className="mt-6 text-sm font-semibold text-green-800 underline-offset-4 hover:underline">
              Read the note →
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
