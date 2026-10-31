const whatsappText = "Hi Selvi Infotech, I'd like to discuss a project.";

export const site = {
  name: "Selvi Infotech Private Limited",
  shortName: "Selvi Infotech",
  url: "https://selviinfotech.com",
  email: "info@selviinfotech.com",
  phoneDisplay: "+91 9500316716",
  phoneTel: "+919500316716",
  whatsappText,
  whatsapp: `https://wa.me/919500316716?text=${encodeURIComponent(whatsappText)}`,
  country: "IN",
  countryName: "India",
  udyam: "UDYAM-TN-24-0163072",
  description:
    "Selvi Infotech Private Limited is a software development company serving clients worldwide. We build custom software, Flutter and React Native apps, websites, and web maintenance, and we run IT training programs.",
  founder: {
    name: "Kumaran",
    role: "Founder & Managing Director, Selvi Infotech Pvt. Ltd.",
  },
  socials: {
    instagram: "https://www.instagram.com/selvi_infotech",
    linkedin: "https://www.linkedin.com/company/selvi-infotech",
    facebook: "https://www.facebook.com/selvi.infotech",
    medium: "https://medium.com/selvi-infotech",
  },
} as const;

export const socialLinks = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Facebook", href: site.socials.facebook },
  { label: "Medium", href: site.socials.medium },
] as const;

export const sameAs = socialLinks.map((item) => item.href);

/** How a project runs. Same three lines as the homepage strip. */
export const engagementSteps = [
  ["Written scope", "The work is agreed in writing before the build starts."],
  ["Built in cycles", "You see the software while it can still change."],
  ["Handover & support", "Source, notes, and a person to call when it goes live."],
] as const;

export const stack = [
  "React / Next.js",
  "Flutter",
  "React Native",
  "Node.js",
  "C# / .NET",
  "ASP.NET Core",
  "Python",
  "Java Spring Boot",
  "SQL Server",
  "Azure",
] as const;

export function absoluteUrl(path: string) {
  if (path === "/") return `${site.url}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${site.url}${withSlash}`;
}
