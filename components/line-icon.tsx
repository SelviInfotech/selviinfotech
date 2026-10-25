const icons = {
  software: ["M8 8 5 12l3 4", "M16 8l3 4-3 4", "M13 6l-2 12"],
  cloud: ["M7 17h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.7-1.2A3.2 3.2 0 0 0 7 17z"],
  mobile: ["M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z", "M11 18h2"],
  training: ["M3 9l9-5 9 5-9 5-9-5z", "M7 11.5V16c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-4.5"],
  consulting: ["M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3z", "M9 21h6"],
  discover: ["M11 11l-6 6", "M14 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"],
  plan: ["M4 6h16v12H4z", "M8 10h8", "M8 14h5"],
  develop: ["M8 8 5 12l3 4", "M16 8l3 4-3 4"],
  deploy: ["M12 19V6", "M7 11l5-5 5 5"],
  support: ["M12 21a8 8 0 1 0-8-8", "M12 8v5l3 2"],
  experience: ["M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.6z"],
  focus: ["M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z", "M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"],
  quality: ["M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z", "M9 12l2 2 4-4"],
  handover: ["M4 7h10v10H4z", "M14 10h6v10H8"],
} as const;

export type LineIconName = keyof typeof icons;

export function LineIcon({ name, className }: { name: LineIconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
