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

/** Gentler than a linear scrub: slow at the start and the settle. */
function smootherstep(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function useStackMotion(rootRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let stickyTop = 80;

    const cards = () => Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"));

    const readStickyTop = () => {
      const fromDeck = parseFloat(getComputedStyle(root).getPropertyValue("--stack-top"));
      if (!Number.isNaN(fromDeck)) stickyTop = fromDeck;
    };

    const clearMotion = () => {
      cards().forEach((card) => {
        card.style.removeProperty("--cover");
        card.style.removeProperty("--arrive");
        delete card.dataset.cover;
        delete card.dataset.arrive;
      });
    };

    const write = (card: HTMLElement, key: "cover" | "arrive", value: number) => {
      const next = value.toFixed(4);
      if (card.dataset[key] === next) return;
      card.dataset[key] = next;
      card.style.setProperty(key === "cover" ? "--cover" : "--arrive", next);
    };

    const paint = () => {
      frame = 0;
      if (mobileQuery.matches || reduceQuery.matches) {
        clearMotion();
        return;
      }

      const deck = root.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      if (deck.bottom < -400 || deck.top > viewHeight + 400) return;

      const list = cards();
      if (!list.length) return;
      const rects = list.map((card) => card.getBoundingClientRect());
      let moving = false;

      list.forEach((card, index) => {
        const current = rects[index];
        if (!current || current.height < 1) return;
        const next = rects[index + 1];
        let coverTarget = 0;
        if (next) {
          const distance = next.top - current.top;
          const linear = 1 - Math.min(1, Math.max(0, distance / current.height));
          coverTarget = smootherstep(linear);
        }

        const distanceToStick = current.top - stickyTop;
        const arriveLinear = 1 - Math.min(1, Math.max(0, distanceToStick / current.height));
        const arriveTarget = smootherstep(arriveLinear);

        const coverPrev = card.dataset.cover === undefined ? coverTarget : Number(card.dataset.cover);
        const arrivePrev = card.dataset.arrive === undefined ? arriveTarget : Number(card.dataset.arrive);
        let cover = coverPrev + (coverTarget - coverPrev) * 0.28;
        let arrive = arrivePrev + (arriveTarget - arrivePrev) * 0.28;
        if (Math.abs(cover - coverTarget) < 0.004) cover = coverTarget;
        else moving = true;
        if (Math.abs(arrive - arriveTarget) < 0.004) arrive = arriveTarget;
        else moving = true;

        write(card, "cover", cover);
        write(card, "arrive", arrive);
      });

      if (moving) frame = window.requestAnimationFrame(paint);
    };

    const requestPaint = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(paint);
    };

    const onChange = () => {
      readStickyTop();
      if (mobileQuery.matches || reduceQuery.matches) {
        clearMotion();
        return;
      }
      requestPaint();
    };

    readStickyTop();
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
