export function HeroFallback() {
  return (
    <svg viewBox="0 0 640 520" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="hero-lid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d5536" />
          <stop offset="1" stopColor="#0d2818" />
        </linearGradient>
        <linearGradient id="hero-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f1e7" />
          <stop offset="1" stopColor="#e4d5c2" />
        </linearGradient>
        <filter id="hero-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#04140c" floodOpacity="0.35" />
        </filter>
      </defs>
      <ellipse cx="320" cy="470" rx="210" ry="22" fill="#04140c" opacity="0.35" />

      <g filter="url(#hero-soft)" transform="translate(28 78) rotate(-8 210 180)">
        <path d="M40 292h340l28 46H12z" fill="url(#hero-base)" />
        <rect x="78" y="304" width="250" height="8" rx="2" fill="#d9cdb8" />
        <rect x="168" y="318" width="70" height="10" rx="3" fill="#cfc3b0" />
        <g transform="translate(46 36)">
          <rect width="300" height="198" rx="12" fill="url(#hero-lid)" />
          <rect x="12" y="12" width="276" height="174" rx="6" fill="#f5efe6" />
          <rect x="12" y="12" width="276" height="28" rx="6" fill="#0d2818" />
          <rect x="12" y="34" width="276" height="6" fill="#0d2818" />
          <circle cx="28" cy="26" r="4" fill="#c9943a" />
          <rect x="104" y="18" width="92" height="16" rx="8" fill="#143524" />
          <text x="150" y="30" textAnchor="middle" fill="#f5efe6" fontSize="9" fontFamily="Inter, sans-serif">
            preview.site
          </text>
          <text x="28" y="68" fill="#7a5410" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="1.2">
            SAMPLE SCREEN
          </text>
          <text x="28" y="96" fill="#0d2818" fontSize="22" fontFamily="Georgia, serif">
            Your offer,
          </text>
          <text x="28" y="122" fill="#0d2818" fontSize="22" fontFamily="Georgia, serif">
            clearly
          </text>
          <rect x="28" y="140" width="54" height="22" rx="11" fill="#c9943a" />
          <text x="55" y="155" textAnchor="middle" fill="#0d2818" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">
            Ask
          </text>
          <rect x="168" y="64" width="104" height="46" rx="8" fill="#eaf3ed" />
          <text x="180" y="92" fill="#0d2818" fontSize="12" fontFamily="Inter, sans-serif">
            Orders
          </text>
          <rect x="168" y="120" width="104" height="46" rx="8" fill="#eaf3ed" />
          <text x="180" y="148" fill="#0d2818" fontSize="12" fontFamily="Inter, sans-serif">
            Schedule
          </text>
        </g>
      </g>

      <g filter="url(#hero-soft)" transform="translate(430 92) rotate(7 70 160)">
        <rect width="132" height="250" rx="22" fill="#143524" />
        <rect x="8" y="10" width="116" height="230" rx="16" fill="#f5efe6" />
        <rect x="46" y="16" width="40" height="8" rx="4" fill="#143524" />
        <text x="18" y="48" fill="#7a5410" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.8">
          APP PREVIEW
        </text>
        <text x="18" y="72" fill="#0d2818" fontSize="18" fontFamily="Georgia, serif">
          Today
        </text>
        {["Bookings", "Messages", "Schedule", "Profile"].map((label, index) => (
          <g key={label} transform={`translate(16 ${86 + index * 36})`}>
            <rect width="100" height="30" rx="8" fill="#eaf3ed" />
            <rect x="6" y="6" width="18" height="18" rx="5" fill="#1a4a2e" />
            <text x="30" y="20" fill="#0d2818" fontSize="9" fontFamily="Inter, sans-serif">
              {label}
            </text>
          </g>
        ))}
      </g>

      {[
        { x: 78, y: 36, label: "React", color: "#61DAFB" },
        { x: 520, y: 28, label: "Flutter", color: "#02569B" },
        { x: 548, y: 392, label: "Next.js", color: "#111111" },
        { x: 96, y: 400, label: "Node.js", color: "#5FA04E" },
      ].map((chip) => (
        <g key={chip.label} transform={`translate(${chip.x} ${chip.y})`}>
          <rect width="78" height="36" rx="18" fill="#f7f1e8" />
          <circle cx="18" cy="18" r="7" fill={chip.color} />
          <text x="32" y="22" fill="#0d2818" fontSize="11" fontFamily="Inter, sans-serif">
            {chip.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
