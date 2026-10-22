"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const headerOffset = () => {
      if (!window.matchMedia("(min-width: 768px)").matches) return 96;
      const deck = document.querySelector<HTMLElement>(".stack-deck");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (deck && !reduce) {
        const top = parseFloat(getComputedStyle(deck).getPropertyValue("--stack-top"));
        if (!Number.isNaN(top)) return top + 12;
      }
      return 132;
    };

    const align = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      const deck = document.querySelector(".stack-deck");
      const offset = headerOffset();
      deck?.classList.add("is-anchor-scroll");
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
      window.requestAnimationFrame(() => {
        const again = target.getBoundingClientRect().top;
        if (Math.abs(again - offset) > 2) {
          window.scrollBy({ top: again - offset, behavior: "auto" });
        }
        window.requestAnimationFrame(() => {
          deck?.classList.remove("is-anchor-scroll");
          const settled = target.getBoundingClientRect().top;
          if (settled < offset - 4) {
            window.scrollBy({ top: settled - offset, behavior: "auto" });
          }
        });
      });
    };

    const onClick = (event: MouseEvent) => {
      const source = event.target;
      if (!(source instanceof Element)) return;
      const link = source.closest("a");
      if (!link?.href.includes("#")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const normalize = (path: string) => path.replace(/\/$/, "") || "/";
      if (normalize(url.pathname) !== normalize(window.location.pathname)) return;
      const id = decodeURIComponent(url.hash.slice(1));
      if (!id || !document.getElementById(id)) return;
      event.preventDefault();
      const next = `${url.pathname}${url.search}#${id}`;
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
        history.pushState(null, "", next);
      }
      align(id);
    };

    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) align(id);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    if (window.location.hash) window.requestAnimationFrame(onHash);

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | null = null;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0, rootMargin: "0px" },
      );
      nodes.forEach((node) => observer?.observe(node));
    }
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
