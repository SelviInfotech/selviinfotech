"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const field =
  "mt-1.5 h-12 w-full rounded-xl border border-border bg-card px-3 text-base text-foreground outline-none transition focus-visible:border-green-800 focus-visible:ring-3 focus-visible:ring-green-800/20";

export function ContactForm() {
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const first = String(data.get("firstName") ?? "").trim();
    const last = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!first || !email || !message) {
      setOpened(false);
      setError("First name, email, and message are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setOpened(false);
      setError("Enter a valid email address.");
      return;
    }

    const name = [first, last].filter(Boolean).join(" ");
    const subject = `Enquiry from ${name}${service ? ` — ${service}` : ""}`;
    const body = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : null, service ? `Service: ${service}` : null, "", message]
      .filter((line) => line !== null)
      .join("\n");

    setError("");
    setOpened(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm md:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fname" className="text-sm font-medium text-green-900">
            First name <span className="text-gold">*</span>
          </label>
          <input className={field} type="text" id="fname" name="firstName" placeholder="First name" autoComplete="given-name" />
        </div>
        <div>
          <label htmlFor="lname" className="text-sm font-medium text-green-900">
            Last name
          </label>
          <input className={field} type="text" id="lname" name="lastName" placeholder="Last name" autoComplete="family-name" />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="text-sm font-medium text-green-900">
          Email address <span className="text-gold">*</span>
        </label>
        <input className={field} type="email" id="email" name="email" placeholder="you@company.com" autoComplete="email" />
      </div>
      <div className="mt-4">
        <label htmlFor="phone" className="text-sm font-medium text-green-900">
          Phone number
        </label>
        <input className={field} type="tel" id="phone" name="phone" placeholder="Your phone number" autoComplete="tel" />
      </div>
      <div className="mt-4">
        <label htmlFor="service" className="text-sm font-medium text-green-900">
          Service interested in
        </label>
        <select className={field} id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Software Development</option>
          <option>Mobile App Development</option>
          <option>Web Development</option>
          <option>Web App Maintenance</option>
          <option>Training Program</option>
          <option>IT Consultation</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-green-900">
          Your message <span className="text-gold">*</span>
        </label>
        <textarea className={`${field} h-32 py-3`} id="message" name="message" placeholder="Tell us about your project or requirements..." />
      </div>
      <button
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-green-800 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-900 motion-reduce:hover:translate-y-0 sm:w-auto"
        type="submit"
      >
        Send message
      </button>
      {error ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-sm text-muted-foreground" role="status">
        {opened
          ? `Your email app should open a draft to ${site.email}. Nothing is sent until you send that email.`
          : `This opens an email draft to ${site.email}. It does not send the message by itself.`}
      </p>
    </form>
  );
}
