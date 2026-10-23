import { clients } from "@/data/clients";

export function ClientMarquee() {
  return (
    <div className="wordmark-marquee" role="region" aria-label="Client companies">
      <div className="wordmark-track">
        <ul>
          {clients.map((client) => (
            <li key={client.name}>
              <a href={client.href} target="_blank" rel="noopener noreferrer" title={client.label} className="wordmark">
                {client.name}
              </a>
            </li>
          ))}
        </ul>
        <ul aria-hidden="true">
          {clients.map((client) => (
            <li key={`${client.name}-clone`} className="marquee-clone">
              <a href={client.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="wordmark">
                {client.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
