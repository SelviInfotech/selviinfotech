"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
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
  const servicesMenuId = useId();
  const servicesRootRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const focusServicesOnOpen = useRef(false);

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

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen || !focusServicesOnOpen.current) return;
    focusServicesOnOpen.current = false;
    servicesRootRef.current?.querySelector<HTMLAnchorElement>("[data-service-link]")?.focus();
  }, [servicesOpen]);

  function openServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      if (servicesRootRef.current?.matches(":hover")) return;
      setServicesOpen(false);
    }, 180);
  }

  function closeServices(focusButton = false) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(false);
    if (focusButton) servicesButtonRef.current?.focus();
  }

  function focusServiceLink(index: number) {
    const linksInMenu = servicesRootRef.current?.querySelectorAll<HTMLAnchorElement>("[data-service-link]");
    if (!linksInMenu?.length) return;
    const next = (index + linksInMenu.length) % linksInMenu.length;
    linksInMenu[next]?.focus();
  }

  const bar = solid || open;
  const muted = bar ? "text-green-800/80 hover:text-green-900" : "text-cream/85 hover:text-white";
  const servicesActive = pathname.startsWith("/services/");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-colors duration-300 ${bar ? "border-b border-border bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 md:h-[4.5rem]">
        <Link href="/" className="shrink-0 rounded-xl bg-cream p-1" aria-label="Selvi Infotech home">
          <img src="/logo.png" alt="" width={48} height={41} className="h-10 w-auto" />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Primary">
          <div
            ref={servicesRootRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeServices();
            }}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              className={`inline-flex items-center gap-1 rounded-md px-1 py-3 text-sm font-medium ${servicesActive ? "text-gold" : muted}`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              aria-controls={servicesMenuId}
              onClick={() => (servicesOpen ? closeServices() : openServices())}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  focusServicesOnOpen.current = true;
                  openServices();
                }
                if (event.key === "Escape") closeServices(true);
              }}
            >
              Services
              <span aria-hidden="true" className={`text-[10px] transition ${servicesOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            <div
              inert={servicesOpen ? undefined : true}
              aria-hidden={servicesOpen ? undefined : true}
              className={`absolute top-full left-0 z-[80] pt-2 ${servicesOpen ? "" : "invisible pointer-events-none"}`}
            >
              <div
                id={servicesMenuId}
                role="menu"
                aria-label="Services"
                className="w-72 rounded-2xl border border-border bg-card p-2 shadow-xl"
                onKeyDown={(event) => {
                  const current = servicesRootRef.current?.querySelectorAll<HTMLAnchorElement>("[data-service-link]");
                  const items = current ? Array.from(current) : [];
                  const index = items.indexOf(document.activeElement as HTMLAnchorElement);
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    focusServiceLink(index + 1);
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    focusServiceLink(index <= 0 ? items.length - 1 : index - 1);
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    focusServiceLink(0);
                  } else if (event.key === "End") {
                    event.preventDefault();
                    focusServiceLink(items.length - 1);
                  } else if (event.key === "Escape") {
                    event.preventDefault();
                    closeServices(true);
                  }
                }}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    data-service-link
                    role="menuitem"
                    href={`/services/${service.slug}/`}
                    className="block rounded-xl px-3 py-2.5 text-sm text-green-900 hover:bg-green-100 focus-visible:bg-green-100 focus-visible:outline-none"
                    onClick={() => closeServices()}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
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
          <SocialLinks
            variant="icons"
            className="flex items-center gap-1 border-l border-current/15 pl-3"
            linkClassName={`inline-flex size-8 items-center justify-center rounded-full ${muted}`}
          />
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
        <div className="absolute inset-x-0 top-full z-[70] max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-cream shadow-xl lg:hidden">
          <nav className="mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            <p className="px-3 pt-2 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Services</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="rounded-xl px-3 py-3 text-base text-green-900 active:bg-green-100"
                onClick={() => setOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-base text-green-900 active:bg-green-100" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            {showPortfolio ? (
              <Link href="/portfolio/" className="rounded-xl px-3 py-3 text-base text-green-900" onClick={() => setOpen(false)}>
                Portfolio
              </Link>
            ) : null}
            <Link href="/verify/" className="rounded-xl px-3 py-3 text-base font-semibold text-gold" onClick={() => setOpen(false)}>
              Verify certificate
            </Link>
            <p className="px-3 pt-4 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Social</p>
            <SocialLinks
              className="flex flex-col"
              linkClassName="block rounded-xl px-3 py-3 text-base text-green-900 active:bg-green-100"
            />
            <Button nativeButton={false} render={<Link href="/contact/" onClick={() => setOpen(false)} />} className="mt-3 h-12 rounded-full">
              Get started
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
