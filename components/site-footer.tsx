import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-green-900 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <BrandMark className="h-12 w-12" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
            Software, mobile apps, websites, maintenance, consulting, and IT training for teams in Chennai, across Tamil Nadu, and remote clients in India.
          </p>
          <p className="footer-address mt-4 text-sm text-cream/90">
            {site.place}, {site.countryName}
          </p>
          <p className="mt-1 text-xs tracking-wide text-cream/55">Udyam {site.udyam}</p>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-gold-bright uppercase">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link className="hover:text-white" href="/services/software-development/">Software development</Link></li>
            <li><Link className="hover:text-white" href="/services/mobile-app-development/">Mobile apps</Link></li>
            <li><Link className="hover:text-white" href="/services/web-development/">Web development</Link></li>
            <li><Link className="hover:text-white" href="/services/web-maintenance/">Web maintenance</Link></li>
            <li><Link className="hover:text-white" href="/training/">Training programs</Link></li>
            <li><Link className="hover:text-white" href="/services/it-consulting/">IT consulting</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-gold-bright uppercase">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link className="hover:text-white" href="/about/">About</Link></li>
            <li><Link className="hover:text-white" href="/#founder">Founder</Link></li>
            <li><Link className="hover:text-white" href="/#process">How we work</Link></li>
            <li><Link className="hover:text-white" href="/blog/">Blog</Link></li>
            <li><Link className="hover:text-white" href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-gold-bright uppercase">Students</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link className="hover:text-white" href="/verify/">Verify a certificate</Link></li>
            <li><Link className="hover:text-white" href="/training/">Courses</Link></li>
            <li><Link className="hover:text-white" href="/training/#corporate">Corporate training</Link></li>
            <li><a className="hover:text-white break-words [overflow-wrap:anywhere]" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-white" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <SocialLinks className="flex flex-wrap gap-x-4 gap-y-2" linkClassName="hover:text-white" />
        </div>
      </div>
    </footer>
  );
}
