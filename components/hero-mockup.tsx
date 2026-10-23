"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { workImages } from "@/data/visuals";

const layers = [
  {
    key: "software",
    image: workImages["software-development"],
    frame: "absolute inset-y-8 right-0 left-10 overflow-hidden rounded-[1.6rem] shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
    depth: 10,
  },
  {
    key: "mobile",
    image: workImages["mobile-app-development"],
    frame: "absolute top-0 left-0 w-[48%] overflow-hidden rounded-2xl border-4 border-cream shadow-xl",
    depth: 18,
  },
  {
    key: "web",
    image: workImages["web-development"],
    frame: "absolute right-2 bottom-0 w-[46%] overflow-hidden rounded-2xl border-4 border-cream shadow-xl",
    depth: 22,
  },
] as const;

export function HeroMockup() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.45 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.45 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [16, -16]);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    px.set((event.clientX - box.left) / box.width - 0.5);
    py.set((event.clientY - box.top) / box.height - 0.5);
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-[5/4] w-full max-w-[34rem]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <div className="absolute top-8 right-6 size-40 rounded-full bg-[#c9943a]/25 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-6 left-4 size-32 rounded-full bg-[#2d7348]/40 blur-3xl" aria-hidden="true" />
      {layers.map((layer, index) => (
        <PhotoLayer key={layer.key} layer={layer} index={index} reduce={reduce === true} sx={sx} sy={sy} drift={drift} />
      ))}
    </div>
  );
}

function PhotoLayer({
  layer,
  index,
  reduce,
  sx,
  sy,
  drift,
}: {
  layer: (typeof layers)[number];
  index: number;
  reduce: boolean;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
  drift: ReturnType<typeof useTransform<number, number>>;
}) {
  const x = useTransform(sx, [-0.5, 0.5], [layer.depth, -layer.depth]);
  const pointerY = useTransform(sy, [-0.5, 0.5], [layer.depth * 0.6, -layer.depth * 0.6]);
  const scrollY = useTransform(drift, (value) => value * (index === 0 ? 0.35 : 1));
  const y = useTransform([pointerY, scrollY], ([pointer, scroll]: number[]) => pointer + scroll);

  return (
    <motion.figure
      className={layer.frame}
      style={reduce ? undefined : { x, y }}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.12 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={layer.image.src}
        alt={layer.image.alt}
        width={960}
        height={640}
        className="aspect-[4/3] h-full w-full object-cover"
      />
    </motion.figure>
  );
}
