import { useId } from "react";
import { lotusPath, lotusPetals } from "@/lib/lotus";

export function BrandMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#C9962F" />
          <stop offset="0.48" stopColor="#D4A440" />
          <stop offset="1" stopColor="#F0C463" />
        </linearGradient>
      </defs>
      {lotusPetals.map((petal) => (
        <path
          key={`${petal.rotation}-${petal.length}`}
          d={lotusPath(petal, 32, 40, 16)}
          fill="none"
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.35"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
