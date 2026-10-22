import type { ReactNode } from "react";
import { socialLinks } from "@/lib/site";

const icons: Record<(typeof socialLinks)[number]["label"], ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M4.7 3.4A1.8 1.8 0 1 0 4.7 7a1.8 1.8 0 0 0 0-3.6ZM3.2 8.7h3v12.1h-3V8.7Zm5.1 0h2.9v1.7h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v5.3h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.8h-3V8.7Z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M14.2 20.5v-7.1h2.4l.4-2.8h-2.8V8.9c0-.8.2-1.4 1.4-1.4h1.5V5.1c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2h-2.3v2.8h2.3v7.1h2.7Z" />
    </svg>
  ),
  Medium: (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M4.2 7.2a.8.8 0 0 0-.3-.7L2.4 4.8V4.5h5.5l4.3 9.4 3.7-9.4H21v.3l-1.3 1.2a.5.5 0 0 0-.2.4v10.8a.5.5 0 0 0 .2.4l1.2 1.2v.3h-6.2v-.3l1.3-1.2a.5.5 0 0 0 .2-.4V8.3l-3.6 9.1h-.5L7.8 8.3v6.6a1 1 0 0 0 .3.9l1.6 2v.3H2.6v-.3l1.6-2a1 1 0 0 0 .3-.9V7.2Z" />
    </svg>
  ),
};

export function SocialLinks({
  className = "",
  linkClassName = "",
  variant = "text",
}: {
  className?: string;
  linkClassName?: string;
  variant?: "text" | "icons";
}) {
  return (
    <ul className={className}>
      {socialLinks.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={linkClassName}
          >
            {variant === "icons" ? icons[item.label] : item.label}
            {variant === "icons" ? <span className="sr-only">{item.label}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
