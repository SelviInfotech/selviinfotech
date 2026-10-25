"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ReactNode } from "react";
import { HeroFallback } from "@/components/hero-fallback";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <HeroFallback />;
    return this.props.children;
  }
}

function canRender3d() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(max-width: 640px)").matches) return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false;
  if (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 2) return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [mode, setMode] = useState<"fallback" | "scene">("fallback");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 640px)");
    const update = () => setMode(canRender3d() ? "scene" : "fallback");
    update();
    motion.addEventListener("change", update);
    narrow.addEventListener("change", update);
    return () => {
      motion.removeEventListener("change", update);
      narrow.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="relative mx-auto h-[19.5rem] w-full max-w-[36rem] sm:h-[25rem] lg:h-[28.5rem]">
      <p className="sr-only">
        A gold line lotus, the Selvi Infotech mark, drawn with depth.
      </p>
      <div className="absolute inset-0" aria-hidden="true">
        {mode === "scene" ? (
          <SceneBoundary>
            <HeroScene />
          </SceneBoundary>
        ) : (
          <HeroFallback />
        )}
      </div>
    </div>
  );
}
