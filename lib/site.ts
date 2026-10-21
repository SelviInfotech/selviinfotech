export const site = {
  name: "Selvi Infotech Private Limited",
  shortName: "Selvi Infotech",
  url: "https://selviinfotech.com",
  email: "info@selviinfotech.com",
  phoneDisplay: "+91 9500316716",
  phoneTel: "+919500316716",
  whatsapp: "https://wa.me/919500316716",
  locality: "Tiruvallur",
  region: "Tamil Nadu",
  country: "IN",
  countryName: "India",
  udyam: "UDYAM-TN-24-0163072",
  description:
    "Selvi Infotech Private Limited is a software development company in Chennai and Tiruvallur, Tamil Nadu. We build custom software, Flutter and React Native apps, websites, and web maintenance, and we run IT training programs.",
  founder: {
    name: "Kumaran",
    role: "Founder & Managing Director, Selvi Infotech Pvt. Ltd.",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/selvi-infotech-private-limited",
    x: "https://x.com/selviinfotech",
    instagram: "https://www.instagram.com/selviinfotech",
  },
} as const;

export const sameAs = [
  site.socials.linkedin,
  site.socials.x,
  site.socials.instagram,
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
