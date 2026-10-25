"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "@/components/hero-visual";

const ease = [0.22, 1, 0.36, 1] as const;

function enter(reduce: boolean | null, delay: number) {
  if (reduce) return {};
  return {
    initial: { y: 16 },
    animate: { y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-green-900 text-cream" id="home">
      <div className="mesh" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="mesh-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pt-28 pb-8 md:gap-10 md:pt-40 md:pb-16 lg:grid-cols-12 lg:gap-12 lg:pb-20">
        <div className="lg:col-span-6">
          <motion.p
            {...enter(reduce, 0)}
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-gold-bright uppercase"
          >
            Software studio
          </motion.p>
          <motion.h1 {...enter(reduce, 0.08)} className="mt-5 max-w-xl font-display text-[2.15rem] leading-[1.05] text-cream sm:text-[2.65rem] md:mt-6 md:text-5xl md:leading-[1.02] xl:text-[3.35rem]">
            Software, mobile apps &amp; websites
            <span className="mt-2 block text-gold-bright">built for growing businesses</span>
          </motion.h1>
          <motion.p {...enter(reduce, 0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            We design, build, and maintain custom systems, phone apps, and websites, then hand them over with the source. Training uses the same tools.
          </motion.p>
          <motion.div {...enter(reduce, 0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex h-12 items-center rounded-full bg-gold-bright px-6 text-sm font-semibold text-green-900 transition hover:-translate-y-0.5 hover:bg-[#e0b85a] motion-reduce:hover:translate-y-0"
            >
              Start a project
            </Link>
            <a
              href="#services"
              className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Explore services
            </a>
            <Link href="/verify/" className="px-2 text-sm font-semibold text-gold-bright underline-offset-4 hover:underline">
              Verify a certificate
            </Link>
          </motion.div>
        </div>
        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
