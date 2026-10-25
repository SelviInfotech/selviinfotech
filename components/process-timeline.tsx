import { processSteps } from "@/data/home";
import { LineIcon } from "@/components/line-icon";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.num} className="reveal relative" style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}>
          {index < processSteps.length - 1 ? (
            <span className="pointer-events-none absolute top-9 left-[calc(50%+2.4rem)] hidden w-[calc(100%-4.8rem)] items-center text-[#B8862B] lg:flex" aria-hidden="true">
              <span className="h-px flex-1 bg-current" />
              <svg viewBox="0 0 10 10" className="size-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 1.5 7 5 2 8.5" />
              </svg>
            </span>
          ) : null}
          <div className="flex flex-col items-center text-center">
            <span className="relative z-10 grid size-[4.5rem] place-items-center rounded-full border-2 border-[#B8862B] bg-[#faf7f3] text-[#A67C2D]">
              <LineIcon name={step.icon} className="size-8" />
            </span>
            <h3 className="mt-3 font-display text-lg leading-tight text-green-900">{step.title}</h3>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
