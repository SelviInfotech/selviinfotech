# Selvi Infotech

Marketing site for **Selvi Infotech Private Limited**. The public location line is **Chennai & Tamil Nadu**, including titles, meta descriptions, Open Graph text, the JSON-LD postal address (Chennai, Tamil Nadu), and the footer and contact cards. It is a static Next.js export aimed at local and service searches.

The previous site was static HTML. This rebuild keeps the cream, green, and gold look, Playfair Display and Inter, the logo, the founder section, the client list, the training programs, and certificate verification.

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Use another port if 3000 is taken:

```bash
npx next dev -p 4317
```

## Production build

```bash
npm run build
```

`next build` writes a fully pre-rendered site to `out/`. Every route is an HTML file. The build also copies `out/training/index.html` to `out/training.html` and `out/verify/index.html` to `out/verify.html`, so the old URLs keep serving the same pages. Canonical tags point at `/training/` and `/verify/`.

Preview the export with any static file server:

```bash
npx serve out -l 4317
```

## Deploy on Render as a Static Site

1. In the Render dashboard, choose **New → Static Site** and connect this repository.
2. **Build command:** `npm ci && npm run build`
3. **Publish directory:** `out`
4. Add the custom domain `selviinfotech.com` (and `www` if you use it) under **Settings → Custom Domains**, then point DNS at the records Render shows. Render issues the TLS certificate.
5. Optional: use the included `render.yaml` blueprint instead of clicking through the form. It sets the same build command, publish path, security headers, and redirects from extensionless paths (`/training`) to the trailing-slash pages (`/training/`).

Render serves a folder’s `index.html`, so `/about/` is `out/about/index.html`. Redirect rules do not run when a file already exists at that path. That is why `/training.html` and `/verify.html` are real files in `out/` as well as redirect rules in `render.yaml`.

### Certificate verification and Appwrite

The verify page calls the same public Appwrite database as the previous site:

- Endpoint: `https://sgp.cloud.appwrite.io/v1`
- Project, database, and collection IDs live in `lib/appwrite.ts` (they were already in the public `appwrite-config.js`).
- A certificate ID must look like `SI` plus 9 letters or digits. The lookup lowercases the ID, matching the old `verify.js`.
- Appwrite only accepts browser calls from hostnames listed on the project. `selviinfotech.com` needs to stay on that list. Add any preview hostname (for example an `onrender.com` URL) before testing verification there.
- Override the IDs at build time with `NEXT_PUBLIC_APPWRITE_ENDPOINT`, `NEXT_PUBLIC_APPWRITE_PROJECT_ID`, `NEXT_PUBLIC_APPWRITE_DATABASE_ID`, and `NEXT_PUBLIC_APPWRITE_COLLECTION_ID` if they ever change.

The contact form does not post to a server. It opens a `mailto:` draft to info@selviinfotech.com.

### Portfolio

`data/projects.ts` has three placeholder entries. `/portfolio` stays out of the navigation and the sitemap, and sends `noindex`, while `PORTFOLIO_READY` is `false` or any field still contains the word `PLACEHOLDER`. Replace the entries, add images under `public/`, then set the flag to `true` and rebuild.

### Blog

Posts are Markdown or MDX with frontmatter in `content/blog/`. Add a file, run the build, and it is included in the sitemap.

## SEO checklist for the owner

Do these outside the codebase. The site cannot do them for you.

1. **Google Business Profile.** Claim or create the profile for Selvi Infotech Private Limited. Use the same name, phone (+91 9500316716), website, and a real street address if you have one. The site lists the location as Chennai & Tamil Nadu because a street address was not provided.
2. **Google Search Console.** Add the property `https://selviinfotech.com/`, verify it (DNS is the durable method), then submit `https://selviinfotech.com/sitemap.xml`.
3. **Request indexing** for the homepage and the five service URLs after the new site is live.
4. **Reviews.** Ask clients who will put their name to a review on the Business Profile. Do not add testimonials to this site unless they are real and you can name who said them.
5. **Directories.** List the company, with the same name, phone, and URL, on places you actually belong (Udyam is already `UDYAM-TN-24-0163072`). Inconsistent names confuse local results.
6. **Social profiles.** Keep the links in the header, footer, and contact cards current: Instagram `https://www.instagram.com/selvi_infotech`, LinkedIn `https://www.linkedin.com/company/selvi-infotech`, Facebook `https://www.facebook.com/selvi.infotech`, and Medium `https://medium.com/selvi-infotech`.
7. **After a few weeks,** look in Search Console for queries you want (software development Chennai, mobile app development Tamil Nadu, web maintenance Tamil Nadu, Flutter developers Tamil Nadu, IT training Chennai) and adjust the page that is closest to each query. Do not add pages that repeat the same text.

Homepage figures such as “50+ projects” and “10,000+ students” are carried over from the previous site. Do not add new statistics unless you can stand behind them.
