"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";

const bars = [46, 70, 54, 86, 64, 92, 74];
const stages = [
  ["Scope written", "100%"],
  ["Build in cycles", "72%"],
  ["Handover", "40%"],
] as const;

const chips = [
  { label: "Written scope", className: "top-2 left-0" },
  { label: "Built in cycles", className: "top-16 -right-1 sm:right-0" },
  { label: "Handover & support", className: "bottom-3 left-6" },
];

export function HeroMockup() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 140, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 140, damping: 20, mass: 0.4 });
  const boardX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const boardY = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const chipX = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const chipY = useTransform(sy, [-0.5, 0.5], [-12, 12]);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce === true) return;
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    px.set((event.clientX - box.left) / box.width - 0.5);
    py.set((event.clientY - box.top) / box.height - 0.5);
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[24rem] w-full max-w-[28rem] sm:h-[27rem]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
      aria-hidden="true"
    >
      <div className="absolute top-10 right-6 left-10 h-64 rounded-full bg-[#c9943a]/30 blur-3xl" />
      <div className="absolute right-0 bottom-8 size-40 rounded-full bg-[#2d7348]/40 blur-3xl" />

      <motion.div className="absolute inset-x-3 top-8 bottom-16" style={reduce === true ? undefined : { x: boardX, y: boardY }}>
        <div className="absolute -top-5 right-3 left-10 h-[92%] rounded-[1.6rem] border border-white/10 bg-[#163d26] shadow-2xl" />
        <div className="absolute top-6 -right-3 left-16 h-[78%] rounded-[1.4rem] border border-cream/10 bg-[#0f3320]/90" />
        <div className="relative flex h-full flex-col rounded-[1.6rem] border border-cream/30 bg-cream p-4 text-green-900 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
          <div className="flex items-center justify-between">
            <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-gold uppercase">Delivery board</p>
            <span className="flex gap-1" aria-hidden="true">
              <i className="inline-block size-2 rounded-full bg-[#e7c3c3]" />
              <i className="inline-block size-2 rounded-full bg-gold-bright" />
              <i className="inline-block size-2 rounded-full bg-green-800" />
            </span>
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5 rounded-xl bg-green-100/80 px-3 pt-3">
            {bars.map((height, index) => (
              <motion.span
                key={height + index}
                className="block w-full origin-bottom rounded-t-md bg-green-800"
                style={{ height: `${height}%` }}
                initial={{ scaleY: 0.15 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: reduce === true ? 0 : 0.9, delay: reduce === true ? 0 : index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
          <ul className="mt-4 space-y-2.5">
            {stages.map(([label, width], index) => (
              <li key={label}>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>{label}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-green-100">
                  <motion.span
                    className="block h-full origin-left rounded-full bg-gold-bright"
                    style={{ width }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: reduce === true ? 0 : 1, delay: reduce === true ? 0 : 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.className} rounded-2xl border border-cream/40 bg-green-900/95 px-3 py-2 text-cream shadow-xl backdrop-blur`}
          style={reduce === true ? undefined : { x: chipX, y: chipY }}
        >
          <p className="text-sm font-semibold tracking-wide text-cream">{chip.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
