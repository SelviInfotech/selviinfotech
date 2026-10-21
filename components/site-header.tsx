"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { isPortfolioPublic } from "@/data/projects";

const links = [
  { href: "/training/", label: "Training" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const showPortfolio = isPortfolioPublic();

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = solid || open;
  const muted = bar ? "text-green-800/80 hover:text-green-900" : "text-cream/85 hover:text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${bar ? "border-b border-border bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 md:h-[4.5rem]">
        <Link href="/" className="shrink-0 rounded-xl bg-cream p-1" aria-label="Selvi Infotech home">
          <img src="/logo.png" alt="" width={48} height={41} className="h-10 w-auto" />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              type="button"
              className={`text-sm font-medium ${muted}`}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services
            </button>
            {servicesOpen ? (
              <div id="services-menu" className="absolute top-8 left-0 w-72 rounded-2xl border border-border bg-card p-2 shadow-xl">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}/`} className="block rounded-xl px-3 py-2 text-sm text-green-900 hover:bg-green-100">
                    {service.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium ${pathname.startsWith(link.href) ? "text-gold" : muted}`} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          {showPortfolio ? (
            <Link href="/portfolio/" className={`text-sm font-medium ${muted}`}>
              Portfolio
            </Link>
          ) : null}
          <Link href="/verify/" className={`text-sm font-semibold ${bar ? "text-gold" : "text-gold-bright"}`}>
            Verify
          </Link>
          <Button nativeButton={false} render={<Link href="/contact/" />} className={`h-10 rounded-full px-4 ${bar ? "" : "bg-gold-bright text-green-900 hover:bg-[#e0b85a]"}`}>
            Get started
          </Button>
        </nav>

        <button
          type="button"
          className={`ml-auto inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border lg:hidden ${bar ? "border-border" : "border-cream/30"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-0.5 w-5 ${bar ? "bg-green-800" : "bg-cream"}`} />
          <span className={`block h-0.5 w-5 ${bar ? "bg-green-800" : "bg-cream"}`} />
          <span className={`block h-0.5 w-5 ${bar ? "bg-green-800" : "bg-cream"}`} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
            <p className="px-2 pt-2 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Services</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}/`} className="rounded-xl px-2 py-2 text-green-900" onClick={() => setOpen(false)}>
                {service.name}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-2 py-2 text-green-900" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            {showPortfolio ? (
              <Link href="/portfolio/" className="rounded-xl px-2 py-2 text-green-900" onClick={() => setOpen(false)}>
                Portfolio
              </Link>
            ) : null}
            <Link href="/verify/" className="rounded-xl px-2 py-2 font-semibold text-gold" onClick={() => setOpen(false)}>
              Verify certificate
            </Link>
            <Button nativeButton={false} render={<Link href="/contact/" onClick={() => setOpen(false)} />} className="mt-3 h-12 rounded-full">
              Get started
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
