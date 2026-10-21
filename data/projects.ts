/**
 * Portfolio gate.
 *
 * PORTFOLIO_READY stays false until every entry below is a real engagement
 * the company is willing to publish. While this is false, /portfolio is left
 * out of the navigation and the sitemap, and the page sends noindex.
 *
 * isPortfolioPublic() also stays false if any field still contains the word
 * PLACEHOLDER, so flipping the flag alone cannot publish sample entries.
 */

export const PORTFOLIO_READY = false;

export type Project = {
  title: string;
  client: string;
  summary: string;
  stack: string[];
  /** Public path such as "/projects/example.webp", or null until a real image exists. */
  image: string | null;
};

export const projects: Project[] = [
  // PLACEHOLDER — replace this entire object. Do not publish invented work.
  {
    title: "PLACEHOLDER: Project title",
    client: "PLACEHOLDER: Client name",
    summary:
      "PLACEHOLDER: Replace this with a short account of the problem and what was delivered. Delete the word PLACEHOLDER from every field.",
    stack: ["PLACEHOLDER"],
    image: null,
  },
  // PLACEHOLDER — replace this entire object. Do not publish invented work.
  {
    title: "PLACEHOLDER: Project title",
    client: "PLACEHOLDER: Client name",
    summary:
      "PLACEHOLDER: Replace this with a short account of the problem and what was delivered. Delete the word PLACEHOLDER from every field.",
    stack: ["PLACEHOLDER"],
    image: null,
  },
  // PLACEHOLDER — replace this entire object. Do not publish invented work.
  {
    title: "PLACEHOLDER: Project title",
    client: "PLACEHOLDER: Client name",
    summary:
      "PLACEHOLDER: Replace this with a short account of the problem and what was delivered. Delete the word PLACEHOLDER from every field.",
    stack: ["PLACEHOLDER"],
    image: null,
  },
];

export function isPortfolioPublic() {
  if (!PORTFOLIO_READY || projects.length === 0) return false;
  return projects.every((project) => !JSON.stringify(project).includes("PLACEHOLDER"));
}
