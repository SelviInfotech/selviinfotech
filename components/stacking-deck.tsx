"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactElement, type ReactNode } from "react";

type StackCardProps = {
  index?: number;
  children: ReactNode;
};

export function StackCard({ index = 0, children }: StackCardProps) {
  return (
    <div className="stack-card" data-stack-card style={{ ["--stack-z" as string]: String(index + 1) }}>
      <div className="stack-card-face">
        {children}
        <div className="stack-card-shade" aria-hidden="true" />
      </div>
    </div>
  );
}

function useStackMotion(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const cards = () => Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"));

    const clearMotion = () => {
      cards().forEach((card) => {
        card.style.top = "";
        card.style.removeProperty("--cover");
      });
    };

    const layout = () => {
      if (mobileQuery.matches || reduceQuery.matches) {
        clearMotion();
        return;
      }
      const viewHeight = window.innerHeight;
      cards().forEach((card, index) => {
        const peek = 76 + index * 14;
        const height = card.getBoundingClientRect().height;
        const top = height + peek <= viewHeight - 8 ? peek : Math.min(peek, viewHeight - height - 12);
        card.style.top = `${top}px`;
      });
    };

    const paint = () => {
      frame = 0;
      if (mobileQuery.matches || reduceQuery.matches) return;
      const deck = root.getBoundingClientRect();
      if (deck.bottom < -200 || deck.top > window.innerHeight + 200) return;

      const list = cards();
      const rects = list.map((card) => card.getBoundingClientRect());
      list.forEach((card, index) => {
        const next = rects[index + 1];
        if (!next) {
          card.style.setProperty("--cover", "0");
          return;
        }
        const current = rects[index];
        const distance = next.top - current.top;
        const range = Math.max(220, Math.min(window.innerHeight * 0.62, current.height));
        const progress = 1 - Math.min(1, Math.max(0, distance / range));
        card.style.setProperty("--cover", progress.toFixed(3));
      });
    };

    const requestPaint = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(paint);
    };

    const onChange = () => {
      layout();
      requestPaint();
    };

    layout();
    requestPaint();

    const observer = new ResizeObserver(onChange);
    observer.observe(root);
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", onChange, { passive: true });
    mobileQuery.addEventListener("change", onChange);
    reduceQuery.addEventListener("change", onChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", onChange);
      mobileQuery.removeEventListener("change", onChange);
      reduceQuery.removeEventListener("change", onChange);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [rootRef]);
}

export function StackingDeck({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useStackMotion(rootRef);
  const items = Children.toArray(children);

  return (
    <div ref={rootRef} className="stack-deck">
      {items.map((child, index) =>
        isValidElement(child) ? cloneElement(child as ReactElement<StackCardProps>, { index }) : child,
      )}
    </div>
  );
}
