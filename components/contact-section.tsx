import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneTel}`,
    note: "Call the studio",
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: site.whatsapp,
    note: site.phoneDisplay,
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We reply from this address",
  },
  {
    label: "Location",
    value: site.place,
    note: site.countryName,
  },
];

const valueClass =
  "mt-2 max-w-full font-display text-[clamp(1.05rem,2.2vw,1.5rem)] leading-tight break-words text-green-900 [overflow-wrap:anywhere]";

export function ContactCards() {
  return (
    <div className="contact-card-list min-w-0">
    <ul className="contact-channels grid gap-3 sm:grid-cols-2">
      {channels.map((channel) => {
        const inner = (
          <>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{channel.label}</p>
            <p className={valueClass}>{channel.value}</p>
            <p className="mt-1 text-sm break-words text-muted-foreground [overflow-wrap:anywhere]">{channel.note}</p>
          </>
        );
        return (
          <li key={channel.label} className="min-w-0">
            {channel.href ? (
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="lift block h-full min-w-0 rounded-2xl border border-border bg-card p-5"
              >
                {inner}
              </a>
            ) : (
              <div className="h-full min-w-0 rounded-2xl border border-border bg-card p-5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
    <div className="mt-4 min-w-0 rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Social</p>
      <SocialLinks className="mt-3 flex flex-wrap gap-x-4 gap-y-2" linkClassName="text-sm font-semibold text-green-900 underline decoration-gold-bright underline-offset-4" />
    </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="stack-fill px-5 py-14 md:py-16">
      <div className="contact-split mx-auto grid w-full max-w-6xl items-start gap-8 md:grid-cols-2">
        <div className="contact-aside min-w-0">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl text-green-900 lg:text-5xl">
            Let&apos;s build your next idea
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Have a project in mind or need expert guidance? Our team is ready to help you explore the possibilities and craft the right solution for your needs. We work with clients in Chennai, across Tamil Nadu, and with remote clients elsewhere in India.
          </p>
          <div className="mt-5">
            <ContactCards />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
