import { processSteps } from "@/data/home";
import { LineIcon } from "@/components/line-icon";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-6 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.num} className="reveal relative" style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}>
          {index < processSteps.length - 1 ? (
            <span className="absolute top-6 left-[calc(50%+1.5rem)] hidden h-px w-[calc(100%-1.5rem)] bg-[#C9962F]/45 md:block" aria-hidden="true" />
          ) : null}
          <div className="flex flex-col items-center text-center">
            <span className="relative z-10 grid size-12 place-items-center rounded-full border border-[#C9962F]/40 bg-card text-[#8A6416] shadow-sm">
              <LineIcon name={step.icon} className="size-5" />
            </span>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.16em] text-gold uppercase">{step.num}</p>
            <h3 className="mt-1 font-display text-xl text-green-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
