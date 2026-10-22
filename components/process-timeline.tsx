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
    <ol className="process-steps relative mx-auto max-w-3xl border-l border-gold-bright/50 pl-8">
      {steps.map((step, index) => (
        <li key={step.num} className="reveal relative pb-8 last:pb-0" style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}>
          <span className="absolute top-0 -left-[2.7rem] grid size-10 place-items-center rounded-2xl bg-green-800 text-cream shadow-md">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={step.icon} />
            </svg>
          </span>
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{step.num}</p>
          <h3 className="mt-1 font-display text-2xl text-green-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
