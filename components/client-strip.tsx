import { clients } from "@/data/clients";

export function ClientStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="Companies we work with">
      {clients.map((client) => (
        <li key={client.name}>
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            title={client.label}
            className="inline-flex items-center rounded-full border border-green-800/15 bg-green-100 px-3.5 py-1.5 text-sm font-semibold tracking-tight text-green-900 transition hover:-translate-y-0.5 hover:border-gold-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800/30 motion-reduce:hover:translate-y-0"
          >
            {client.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
