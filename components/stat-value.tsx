"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function StatValue({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [shown, setShown] = useState(0);
  const finalText = `${value.toLocaleString("en-IN")}${suffix}`;

  useEffect(() => {
    if (!inView || reduce !== false) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setShown(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="inline-grid">
      <span className="sr-only">{finalText}</span>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {finalText}
      </span>
      <span className="stat-count-final col-start-1 row-start-1 tabular-nums" aria-hidden="true">
        {finalText}
      </span>
      <span className="stat-count-live col-start-1 row-start-1 tabular-nums" aria-hidden="true">
        {`${shown.toLocaleString("en-IN")}${suffix}`}
      </span>
    </span>
  );
}
