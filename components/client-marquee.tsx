import { clients } from "@/data/clients";

export function ClientMarquee() {
  const loop = [...clients, ...clients];
  return (
    <div className="marquee overflow-hidden" role="region" aria-label="Client companies">
      <ul className="marquee-track items-stretch py-2">
        {loop.map((client, index) => {
          const clone = index >= clients.length;
          return (
            <li key={`${client.name}-${index}`} className={clone ? "marquee-clone" : undefined} aria-hidden={clone ? true : undefined}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                title={client.label}
                tabIndex={clone ? -1 : undefined}
                className="flex min-w-56 items-baseline gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition hover:border-gold-bright"
              >
                <span className="font-display text-xl text-green-900">{client.name}</span>
                <span className="text-xs tracking-wide text-muted-foreground uppercase">{client.tag}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
