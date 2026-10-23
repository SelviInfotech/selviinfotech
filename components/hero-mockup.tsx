"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { workImages } from "@/data/visuals";

const layers = [
  {
    key: "software",
    image: workImages["software-development"],
    frame: "absolute inset-0",
    depth: 8,
  },
  {
    key: "web",
    image: workImages["web-development"],
    frame: "absolute top-4 right-4 aspect-[16/10] w-[46%] sm:w-[42%]",
    depth: 16,
  },
  {
    key: "mobile",
    image: workImages["mobile-app-development"],
    frame: "absolute bottom-4 left-4 aspect-[4/3] w-[48%] sm:w-[44%]",
    depth: 20,
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
  const drift = useTransform(scrollYProgress, [0, 1], [12, -12]);

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
      className="relative mx-auto h-60 w-full max-w-[36rem] sm:h-80 lg:h-[28rem]"
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
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
  const pointerY = useTransform(sy, [-0.5, 0.5], [layer.depth * 0.55, -layer.depth * 0.55]);
  const scrollY = useTransform(drift, (value) => value * (index === 0 ? 0.4 : 1));
  const y = useTransform([pointerY, scrollY], ([pointer, scroll]: number[]) => pointer + scroll);
  const framed = index > 0;

  return (
    <motion.figure
      className={`${layer.frame} overflow-hidden rounded-[1.35rem] ${framed ? "border-4 border-cream shadow-[0_18px_40px_rgba(0,0,0,0.35)]" : "shadow-[0_24px_60px_rgba(0,0,0,0.35)]"}`}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={layer.image.src}
        alt={index === 0 ? layer.image.alt : ""}
        width={960}
        height={640}
        className="h-full w-full scale-110 object-cover"
        style={reduce ? undefined : { x, y }}
        aria-hidden={index === 0 ? undefined : true}
      />
    </motion.figure>
  );
}
