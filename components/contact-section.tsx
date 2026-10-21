import { ContactForm } from "@/components/contact-form";
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
    value: `${site.locality}, ${site.region}`,
    note: site.countryName,
  },
];

export function ContactCards() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {channels.map((channel) => {
        const inner = (
          <>
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">{channel.label}</p>
            <p className="mt-2 font-display text-2xl text-green-900">{channel.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{channel.note}</p>
          </>
        );
        return (
          <li key={channel.label}>
            {channel.href ? (
              <a
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="lift block h-full rounded-2xl border border-border bg-card p-5"
              >
                {inner}
              </a>
            ) : (
              <div className="h-full rounded-2xl border border-border bg-card p-5">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Get in touch</p>
        <h2 className="mt-3 font-display text-4xl text-green-900 md:text-5xl">
          Let&apos;s build your next idea
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Have a project in mind or need expert guidance? Our team is ready to help you explore the possibilities and craft the right solution for your needs. We work with clients in Chennai, across Tamil Nadu, and with remote clients elsewhere in India.
        </p>
        <div className="mt-8">
          <ContactCards />
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
