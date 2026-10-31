import Link from "next/link";
import { LeafDecor } from "@/components/botanicals";
import { LogoLockup } from "@/components/logo-lockup";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

const year = new Date().getFullYear();

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/training/", label: "Training" },
  { href: "/portfolio/", label: "Our Work" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
  { href: "/verify/", label: "Verify a certificate" },
];

const serviceLinks = [
  { href: "/services/software-development/", label: "Software Development" },
  { href: "/services/web-development/", label: "Web Development" },
  { href: "/services/mobile-app-development/", label: "Mobile App Development" },
  { href: "/services/it-consulting/", label: "Cloud & Architecture" },
  { href: "/training/", label: "Training & Mentoring" },
  { href: "/services/web-maintenance/", label: "Consulting & Support" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-green-900 text-cream">
      <LeafDecor spot="footer" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <LogoLockup tone="light" size="lg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">
            Software, cloud architecture, and practical training for businesses and the people who build with them.
          </p>
          <SocialLinks
            variant="icons"
            className="mt-5 flex gap-2"
            linkClassName="inline-flex size-10 items-center justify-center rounded-full border border-[#E7C97A]/50 text-[#F0C463] hover:bg-white/10"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-[#F0C463] uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-[#F0C463] uppercase">Our Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-sans text-sm font-semibold tracking-[0.16em] text-[#F0C463] uppercase">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/85">
            <li>
              <a className="hover:text-white break-words [overflow-wrap:anywhere]" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>Serving clients worldwide</li>
            <li className="text-xs tracking-wide text-cream/55">Udyam {site.udyam}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-sm text-cream/70">© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
