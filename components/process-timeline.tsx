const steps = [
  ["01", "Discovery & Requirements", "We begin with in-depth consultations to understand your business goals, technical requirements, and target audience. This phase defines the project scope, timeline, and success criteria."],
  ["02", "Design & Architecture", "Our team designs the system architecture, UI/UX wireframes, and data models. You'll receive detailed prototypes for review before any code is written."],
  ["03", "Agile Development", "Development proceeds in short sprints with regular demos and feedback cycles. Our agile methodology keeps you in the loop at every stage."],
  ["04", "Quality Assurance", "Rigorous testing — functional, performance, security, and user acceptance — ensures your product is production-ready and defect-free."],
  ["05", "Launch & Ongoing Support", "We handle deployment, go-live support, and provide ongoing maintenance and feature enhancements as your product evolves."],
] as const;

export function ProcessTimeline() {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-gold-bright/50 pl-8">
      {steps.map(([num, title, body], index) => (
        <li
          key={num}
          className="reveal relative pb-10 last:pb-0"
          style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
        >
          <span className="absolute top-0 -left-[2.65rem] grid size-9 place-items-center rounded-full bg-green-800 font-display text-xs text-cream">
            {num}
          </span>
          <h3 className="font-display text-2xl text-green-900">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
        </li>
      ))}
    </ol>
  );
}
