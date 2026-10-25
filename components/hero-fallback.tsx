import { useId } from "react";
import { lotusPath, lotusPetals } from "@/lib/lotus";

export function HeroFallback() {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 640 520" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gold`} x1="80" y1="420" x2="520" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#C9962F" />
          <stop offset="0.45" stopColor="#D4A440" />
          <stop offset="1" stopColor="#F0C463" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="46%" r="42%">
          <stop offset="0" stopColor="#F0C463" stopOpacity="0.22" />
          <stop offset="1" stopColor="#F0C463" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
      </defs>
      <ellipse cx="320" cy="250" rx="210" ry="170" fill={`url(#${id}-glow)`} />
      <g stroke={`url(#${id}-gold)`} fill="none" strokeLinejoin="round" strokeLinecap="round">
        {lotusPetals.map((petal) => (
          <path key={`${petal.rotation}-${petal.z}`} d={lotusPath(petal, 320, 300, 150)} strokeWidth="2.4" filter={`url(#${id}-soft)`} opacity="0.45" />
        ))}
        {lotusPetals.map((petal) => (
          <path key={`line-${petal.rotation}-${petal.z}`} d={lotusPath(petal, 320, 300, 150)} strokeWidth="1.7" />
        ))}
      </g>
      <g stroke="#C9962F" strokeWidth="1" opacity="0.28">
        {Array.from({ length: 7 }, (_, index) => {
          const y = 430 - index * 18;
          const inset = index * 22;
          return <line key={y} x1={120 + inset} y1={y} x2={520 - inset} y2={y + 36} />;
        })}
      </g>
    </svg>
  );
}
