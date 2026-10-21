import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

const blogDir = path.join(process.cwd(), "content/blog");

function asDateString(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readFile(file: string) {
  const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? file.replace(/\.mdx?$/, ""));
  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: asDateString(data.date),
    } satisfies PostMeta,
    content,
  };
}

export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => readFile(file).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = fs
    .readdirSync(blogDir)
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .find((name) => readFile(name).meta.slug === slug);
  return file ? readFile(file) : null;
}

export function formatPostDate(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
