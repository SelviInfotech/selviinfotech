const icons = {
  software: ["M8 8 5 12l3 4", "M16 8l3 4-3 4", "M13 6l-2 12"],
  cloud: ["M7 17h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.7-1.2A3.2 3.2 0 0 0 7 17z"],
  mobile: ["M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z", "M11 18h2"],
  training: ["M3 9l9-5 9 5-9 5-9-5z", "M7 11.5V16c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-4.5"],
  consulting: ["M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3z", "M9 21h6"],
  discover: ["M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z", "M21 21l-4.3-4.3"],
  plan: ["M7 3h7l5 5v13H7z", "M14 3v5h5", "M10 13h6", "M10 17h4"],
  develop: ["M9 8 5 12l4 4", "M15 8l4 4-4 4"],
  deploy: ["M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"],
  support: ["M4 13a8 8 0 0 1 16 0", "M4 13v5a2 2 0 0 0 2 2h1v-7H4z", "M20 13v5a2 2 0 0 1-2 2h-1v-7h3z"],
  experience: ["M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.6z"],
  focus: ["M12 21s-7-4.4-7-10a7 7 0 0 1 14 0c0 5.6-7 10-7 10z", "M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"],
  quality: ["M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z", "M9 12l2 2 4-4"],
  handover: ["M4 7h10v10H4z", "M14 10h6v10H8"],
  language: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M3 12h18", "M12 3c2.4 2.6 3.6 6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-6-3.6-9s1.2-6.4 3.6-9z"],
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
