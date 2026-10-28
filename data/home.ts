/**
 * Homepage copy and extension points.
 * Testimonials and client logo files stay empty until the company
 * supplies quotes and logo artwork it will publish.
 */

export type HomeService = {
  title: string;
  body: string;
  href: string;
  icon: "software" | "cloud" | "mobile" | "training" | "consulting";
};

export const homeServices: HomeService[] = [
  {
    title: "Custom Software Development",
    body: "Web, desktop, and business applications shaped around the work your team does today.",
    href: "/services/software-development/",
    icon: "software",
  },
  {
    title: "Cloud & Architecture Consulting",
    body: "A written note on architecture, hosting, and the shape of the system before a build starts.",
    href: "/services/it-consulting/",
    icon: "cloud",
  },
  {
    title: "Mobile App Development",
    body: "Android and iOS apps with Flutter, React Native, or native code, scoped before the first screen.",
    href: "/services/mobile-app-development/",
    icon: "mobile",
  },
  {
    title: "Training & Mentoring",
    body: "Hands-on programs for new developers and teams, taught in the same tools we ship with.",
    href: "/training/",
    icon: "training",
  },
  {
    title: "IT Consulting & Support",
    body: "Advice before a build, and scoped fixes after launch so a live system stays runnable.",
    href: "/services/web-maintenance/",
    icon: "consulting",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
  icon: "discover" | "plan" | "develop" | "deploy" | "support";
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    body: "We listen to the problem, the users, and what is out of scope.",
    icon: "discover",
  },
  {
    num: "02",
    title: "Plan & Design",
    body: "Architecture and screens are agreed before the build.",
    icon: "plan",
  },
  {
    num: "03",
    title: "Develop",
    body: "The system is built in cycles you can still change.",
    icon: "develop",
  },
  {
    num: "04",
    title: "Deploy",
    body: "We put it live and hand over the source and notes.",
    icon: "deploy",
  },
  {
    num: "05",
    title: "Support",
    body: "Fixes and small changes continue after launch, scoped separately.",
    icon: "support",
  },
];

export type WhyTile = {
  title: string;
  body: string;
  icon: "experience" | "focus" | "quality" | "training" | "handover" | "support";
};

export const whyTiles: WhyTile[] = [
  {
    title: "Real-World Experience",
    body: "The people who build the software also teach the tools.",
    icon: "experience",
  },
  {
    title: "Client Focused",
    body: "A written scope before the build, and someone to call after.",
    icon: "focus",
  },
  {
    title: "Quality & Best Practices",
    body: "We test real user paths and write down what we find.",
    icon: "quality",
  },
  {
    title: "Training with Practical Approach",
    body: "Classes use the stacks we ship, live or in person.",
    icon: "training",
  },
];

export const trainingPoints: { label: string; icon: "training" | "software" | "support" | "quality" | "language" }[] = [
  { label: "Live Interactive Sessions", icon: "training" },
  { label: "Real-World Projects", icon: "software" },
  { label: "Doubt Support", icon: "support" },
  { label: "Certificate Provided", icon: "quality" },
  { label: "Tamil / English", icon: "language" },
];

export type PublishedWork = {
  name: string;
  summary: string;
  tags: string[];
  href: string;
  mock: "tax" | "plant" | "nodes" | "grid";
  image: string;
  imageAlt: string;
};

/**
 * Published relationships already named on the site. No invented results.
 * The photos are stock scenes placed beside each name. They are not screenshots of that client's product.
 */
export const publishedWork: PublishedWork[] = [
  {
    name: "IvyTax",
    summary: "Published work with IvyTax, a tax technology company.",
    tags: ["Tax technology"],
    href: "https://ivytax.in",
    mock: "tax",
    image: "/images/project-enterprise.webp",
    imageAlt: "Monitors showing a business application, placed beside our published work for IvyTax. Not a screenshot of their product.",
  },
  {
    name: "ASHT",
    summary: "Published work with ASHT, a manufacturing company.",
    tags: ["Manufacturing"],
    href: "https://asht.co.in",
    mock: "plant",
    image: "/images/project-cloud.webp",
    imageAlt: "A cloud infrastructure diagram on a screen, placed beside our published work for ASHT. Not a screenshot of their product.",
  },
  {
    name: "Achutha AI",
    summary: "Published work with Achutha AI.",
    tags: ["AI solutions"],
    href: "https://achutha.com",
    mock: "nodes",
    image: "/images/project-mobile.webp",
    imageAlt: "Phones showing a mobile application, placed beside our published work for Achutha AI. Not a screenshot of their product.",
  },
  {
    name: "Ains",
    summary: "Published work with Ains, an IT solutions company.",
    tags: ["IT solutions"],
    href: "https://www.ainsit.in/",
    mock: "grid",
    image: "/images/project-travel.webp",
    imageAlt: "A laptop and phone showing a travel booking screen, placed beside our published work for Ains. Not a screenshot of their product.",
  },
];

export type TechLogo = {
  name: string;
  src: string;
};

export const techLogos: TechLogo[] = [
  { name: "React", src: "/icons/tech/react.svg" },
  { name: "Next.js", src: "/icons/tech/nextdotjs.svg" },
  { name: "Node.js", src: "/icons/tech/nodedotjs.svg" },
  { name: "Flutter", src: "/icons/tech/flutter.svg" },
  { name: "Amazon Web Services", src: "/icons/tech/amazonaws.svg" },
  { name: "Microsoft Azure", src: "/icons/tech/microsoftazure.svg" },
  { name: "Google Cloud", src: "/icons/tech/googlecloud.svg" },
  { name: "Appwrite", src: "/icons/tech/appwrite.svg" },
  { name: "MongoDB", src: "/icons/tech/mongodb.svg" },
  { name: "PostgreSQL", src: "/icons/tech/postgresql.svg" },
];

/**
 * Drop logo files in public/ and list them here when the company provides artwork.
 * An empty list renders nothing.
 */
export const clientLogos: readonly { name: string; src: string; href: string }[] = [];

export type HomeStat =
  | { label: string; count: number; suffix: string }
  | { label: string; text: string };

/** Confirmed delivery figures. Numeric values count up; 24x7 stays as written. */
export const homeStats: readonly HomeStat[] = [
  { count: 25, suffix: "+", label: "Projects Delivered" },
  { count: 7000, suffix: "+", label: "Students Trained" },
  { count: 15, suffix: "+", label: "Clients" },
  { text: "24x7", label: "Support" },
];

/** Leave empty until there are quotes the company will publish. */
export const homeTestimonials: readonly { quote: string; name: string; role: string }[] = [];
