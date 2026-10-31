import { ContactCards } from "@/components/contact-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Selvi Infotech | Projects and Training",
  description:
    "Contact Selvi Infotech Private Limited. Email info@selviinfotech.com, call or WhatsApp +91 9500316716. We work with clients worldwide. The form opens an email draft.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build your next idea"
        lede="Tell us what the system has to do. We reply with questions, then a written scope. We work with clients worldwide."
        crumbs={[{ name: "Home", path: "/" }, { name: "Contact" }]}
      />
      <section className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 md:grid-cols-2 md:py-16">
        <ContactCards />
        <ContactForm />
      </section>
    </>
  );
}
