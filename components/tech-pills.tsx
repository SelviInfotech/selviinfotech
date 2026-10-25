const techIcons: Record<string, { src: string; alt: string }[]> = {
  "React / Next.js": [
    { src: "/icons/tech/react.svg", alt: "React logo" },
    { src: "/icons/tech/nextdotjs.svg", alt: "Next.js logo" },
  ],
  Flutter: [{ src: "/icons/tech/flutter.svg", alt: "Flutter logo" }],
  "React Native": [{ src: "/icons/tech/react.svg", alt: "React Native logo" }],
  "Node.js": [{ src: "/icons/tech/nodedotjs.svg", alt: "Node.js logo" }],
  "C# / .NET": [
    { src: "/icons/tech/csharp.svg", alt: "C# logo" },
    { src: "/icons/tech/dotnet.svg", alt: ".NET logo" },
  ],
  "ASP.NET Core": [{ src: "/icons/tech/dotnet.svg", alt: "ASP.NET Core logo" }],
  Python: [{ src: "/icons/tech/python.svg", alt: "Python logo" }],
  "Java Spring Boot": [{ src: "/icons/tech/springboot.svg", alt: "Spring Boot logo" }],
  "SQL Server": [{ src: "/icons/tech/microsoftsqlserver.svg", alt: "SQL Server logo" }],
  Azure: [{ src: "/icons/tech/microsoftazure.svg", alt: "Microsoft Azure logo" }],
  "Native Android": [{ src: "/icons/tech/android.svg", alt: "Android logo" }],
  "Native iOS": [{ src: "/icons/tech/apple.svg", alt: "Apple logo" }],
};

export function TechPills({
  items,
  showLabel = true,
  centered = false,
  label = "Technologies we use",
}: {
  items: readonly string[];
  showLabel?: boolean;
  centered?: boolean;
  label?: string;
}) {
  return (
    <div>
      {showLabel ? <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{label}</p> : null}
      <ul className={`${showLabel ? "mt-3" : ""} flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
        {items.map((item) => (
          <li key={item}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-800/15 bg-green-100 px-3 py-1.5 text-sm font-medium text-green-900 transition hover:-translate-y-0.5 hover:border-gold-bright motion-reduce:hover:translate-y-0">
              {(techIcons[item] ?? []).map((icon) => (
                <img key={icon.src + icon.alt} src={icon.src} alt={icon.alt} width={14} height={14} decoding="async" className="size-3.5 shrink-0" />
              ))}
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
