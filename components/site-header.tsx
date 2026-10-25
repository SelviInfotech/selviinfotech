"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LogoLockup } from "@/components/logo-lockup";
import { services } from "@/data/services";

const links = [
  { href: "/portfolio/", label: "Our Work", match: "/portfolio" },
  { href: "/training/", label: "Training", match: "/training" },
  { href: "/about/", label: "About", match: "/about" },
  { href: "/contact/", label: "Contact", match: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }
  const servicesMenuId = useId();
  const servicesRootRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const focusServicesOnOpen = useRef(false);
  const servicesActive = pathname.startsWith("/services/");

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

  function active(match: string) {
    return pathname === match || pathname.startsWith(`${match}/`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadfce] bg-[#faf7f3]/95 pt-[env(safe-area-inset-top)] text-green-900 shadow-[0_1px_0_rgba(15,59,36,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center gap-3 px-4 sm:px-5">
        <Link href="/" prefetch={false} aria-label="Selvi Infotech home" className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9962F]">
          <LogoLockup />
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <Link href="/" prefetch={false} className={navClass(pathname === "/")} aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <div
            ref={servicesRootRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeServices();
            }}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              className={navClass(servicesActive)}
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
              <span aria-hidden="true" className={`text-[10px] transition ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            <div inert={servicesOpen ? undefined : true} aria-hidden={servicesOpen ? undefined : true} className={`absolute top-full left-0 z-[80] pt-2 ${servicesOpen ? "" : "invisible pointer-events-none"}`}>
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
                    prefetch={false}
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
            <Link key={link.href} href={link.href} prefetch={false} className={navClass(active(link.match))} aria-current={active(link.match) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact/" prefetch={false} className="ml-2 inline-flex h-11 items-center rounded-full bg-[#C9962F] px-4 text-sm font-semibold text-green-900 shadow-sm transition hover:bg-[#b8872a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-900/40">
            Talk to an Expert
          </Link>
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-5 bg-green-900" />
          <span className="block h-0.5 w-5 bg-green-900" />
          <span className="block h-0.5 w-5 bg-green-900" />
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-[70] max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-t border-border bg-cream shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            <Link href="/" className="rounded-xl px-3 py-3 text-base font-semibold" onClick={() => setOpen(false)}>Home</Link>
            <p className="px-3 pt-2 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Services</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}/`} className="rounded-xl px-3 py-3 text-base" onClick={() => setOpen(false)}>
                {service.name}
              </Link>
            ))}
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-3 text-base font-semibold" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact/" className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-[#C9962F] text-sm font-semibold text-green-900" onClick={() => setOpen(false)}>
              Talk to an Expert
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function navClass(isActive: boolean) {
  return `inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9962F] ${isActive ? "text-gold" : "text-green-900 hover:text-green-800"}`;
}
