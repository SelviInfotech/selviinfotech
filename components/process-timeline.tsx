const steps = [
  {
    num: "01",
    title: "Discovery & Requirements",
    body: "We begin with in-depth consultations to understand your business goals, technical requirements, and target audience. This phase defines the project scope, timeline, and success criteria.",
    icon: "M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z",
  },
  {
    num: "02",
    title: "Design & Architecture",
    body: "Our team designs the system architecture, UI/UX wireframes, and data models. You'll receive detailed prototypes for review before any code is written.",
    icon: "M4 16l6-6 4 4 6-8M4 20h16",
  },
  {
    num: "03",
    title: "Agile Development",
    body: "Development proceeds in short sprints with regular demos and feedback cycles. Our agile methodology keeps you in the loop at every stage.",
    icon: "M8 8l-3 4 3 4M16 8l3 4-3 4M13 6l-2 12",
  },
  {
    num: "04",
    title: "Quality Assurance",
    body: "Rigorous testing — functional, performance, security, and user acceptance — ensures your product is production-ready and defect-free.",
    icon: "M5 12l4 4L19 6",
  },
  {
    num: "05",
    title: "Launch & Ongoing Support",
    body: "We handle deployment, go-live support, and provide ongoing maintenance and feature enhancements as your product evolves.",
    icon: "M12 19V5M6 11l6-6 6 6",
  },
] as const;

export function ProcessTimeline() {
  return (
    <ol className="process-steps relative">
      <span className="process-line absolute top-6 bottom-6 left-6 w-px bg-gold-bright/50" aria-hidden="true" />
      {steps.map((step, index) => (
        <li
          key={step.num}
          className="process-row reveal relative grid grid-cols-[3rem_1fr] gap-x-4 gap-y-1 border-b border-border/80 py-5 last:border-b-0 md:grid-cols-[3rem_minmax(14rem,18rem)_1fr] md:items-start md:gap-x-8 md:py-6"
          style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
        >
          <span className="relative z-10 grid size-12 place-items-center rounded-2xl bg-green-800 text-cream shadow-md ring-4 ring-cream">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={step.icon} />
            </svg>
          </span>
          <div className="pt-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{step.num}</p>
            <h3 className="mt-1 font-display text-2xl leading-tight text-green-900">{step.title}</h3>
          </div>
          <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3 md:pt-1">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
