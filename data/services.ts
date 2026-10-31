export type Faq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  tech: string[];
  related: { href: string; label: string }[];
  faqs: Faq[];
};

export const services: ServicePage[] = [
  {
    slug: "software-development",
    name: "Software Development",
    title: "Custom Software Development for Businesses Worldwide | Selvi Infotech",
    description:
      "Custom software development for businesses worldwide. Selvi Infotech builds business applications with React, Next.js, Node.js, .NET, Python, Java Spring Boot, and SQL Server.",
    h1: "Software development for growing businesses",
    eyebrow: "Custom software",
    intro:
      "Selvi Infotech Private Limited designs and builds software for growing businesses. A project here is a system people actually use: an internal tool, a customer portal, an API between two products, or a web application with a database behind it. We write the scope down before the build, and we stay through testing and handover.",
    sections: [
      {
        heading: "What we build",
        paragraphs: [
          "Most of the work falls into a few shapes. Business applications that replace a pile of spreadsheets and forwarded email. Web platforms with accounts, roles, and reports. Integrations between a website, a phone app, and a database such as SQL Server. Smaller tools that one department needs when a larger product team does not have the time.",
          "We do not start from a catalogue of templates. The first conversations are about who uses the system, what they do today, and what has to be true on the day it goes live. If the problem is still vague, we say so before anyone commits to a build.",
        ],
      },
      {
        heading: "How an engagement runs",
        paragraphs: [
          "Discovery starts on a call or WhatsApp, then a working session. We list the users, the main tasks, and what is out of scope. That note is the thing we estimate against.",
          "For architecture we stay inside the stack we ship with: React and Next.js, Node.js, C# and ASP.NET Core, Python, Java Spring Boot, SQL Server, and Azure when the system needs cloud hosting. The choice follows the problem and what your own team can look after later.",
          "Build work moves in short cycles so you see the software while it can still change. We would rather adjust a screen early than discover the mismatch at the end. Testing covers the paths a real user takes, including a failed login, a missing field, and a report that has to stay usable when the data grows.",
          "At handover you receive the source, setup notes, and a person to call. Fixes and small changes after launch can continue as [web maintenance](/services/web-maintenance/). A phone product belongs on the [mobile app](/services/mobile-app-development/) page. A public website is [web development](/services/web-development/).",
        ],
      },
      {
        heading: "Who this is for",
        paragraphs: [
          "This is for owners and teams who want the people building the software to be reachable, including clients working remotely from anywhere. If you already have a system and it needs care rather than a rewrite, start with maintenance. If you are choosing a stack or a plan before any code, start with [IT consulting](/services/it-consulting/).",
          "We will not quote a price from a one-line description, and we will not invent a launch date for it either. A login screen and a multi-role system with reports and an admin side are different projects. Ask for a written scope. The number and the calendar come after that.",
        ],
      },
    ],
    tech: [
      "React / Next.js",
      "Node.js",
      "C# / .NET",
      "ASP.NET Core",
      "Python",
      "Java Spring Boot",
      "SQL Server",
      "Azure",
    ],
    related: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/mobile-app-development/", label: "Mobile apps" },
      { href: "/services/web-maintenance/", label: "Web maintenance" },
      { href: "/services/it-consulting/", label: "IT consulting" },
    ],
    faqs: [
      {
        question: "Do you work with clients worldwide?",
        answer:
          "Yes. We work with clients worldwide. Remote work is normal once the scope is written down.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "React and Next.js, Node.js, C# and ASP.NET Core, Python, Java Spring Boot, SQL Server, and Azure. We pick from that list based on the system and on what your team can maintain.",
      },
      {
        question: "How much does custom software cost?",
        answer:
          "There is no single figure. After a discovery conversation we send a written scope and a quote for that scope. A small internal tool and a multi-role product are priced differently because they are different amounts of work.",
      },
      {
        question: "Can you maintain the software after launch?",
        answer:
          "Yes. Ongoing fixes, updates, and small changes are covered as [web maintenance](/services/web-maintenance/), scoped separately from the original build.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    title: "Mobile App Development for Businesses Worldwide | Selvi Infotech",
    description:
      "Flutter, React Native, and native Android/iOS app development for businesses worldwide. Selvi Infotech scopes, builds, and helps release mobile apps.",
    h1: "Mobile apps for Android and iOS",
    eyebrow: "Flutter, React Native, native iOS & Android",
    intro:
      "Selvi Infotech builds mobile applications for growing businesses. The app might be the product itself, or the phone companion to a website you already run. We use Flutter or React Native when one codebase should serve Android and iOS, and native Android or iOS when the app depends on platform behaviour a shared toolkit would fight.",
    sections: [
      {
        heading: "What a mobile project includes",
        paragraphs: [
          "A useful first release is smaller than the full idea. We write down who the user is, what the first version must do, and what can wait. That list is what gets designed and built. Screens are drawn around those tasks, not around a generic kit with a logo dropped on top.",
          "The phone app is rarely the whole system. Accounts, data, and an admin view usually live on a server. We build that side with the same tools we use for software work: Node.js, ASP.NET Core, Python, Java Spring Boot, and SQL Server. If you already have an API, we integrate with it instead of replacing it.",
          "Store release is part of the job: signing, listing text, screenshots, and the review cycle on Google Play and the Apple App Store. The developer accounts stay in your name. We prepare the build and walk through submission with you. After release there is a short period of crash fixes and adjustments. Longer care is agreed separately.",
        ],
      },
      {
        heading: "Flutter, React Native, or native",
        paragraphs: [
          "Flutter is a strong default when both stores matter and the interface can be shared. React Native fits teams that already live in JavaScript and React, including companies that also want a Next.js web app beside the phone app. Native Android or iOS is the right call when the product leans on a platform API, a device integration, or a level of platform polish the shared toolkits make awkward.",
          "We will say which of those we recommend for your case, and why, before the build starts. If you already have a Flutter or React Native codebase, we can read it and take over maintenance or a new feature. We will tell you if the existing code should be extended or replaced.",
          "People who want to learn this work, rather than commission it, can look at the [mobile app development course](/training/#mobile). That program is training. A client build is a separate engagement.",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          "Send a short note on what the app is for, who uses it, and whether you need Android, iOS, or both. A rough screen list helps. We reply with questions, then a written scope. Cost follows the scope: number of platforms, accounts and payments, offline use, an admin panel, and integrations all change the size of the work. There is a plain-language discussion of those drivers in [our note on app cost in India](/blog/mobile-app-development-cost-india-2026/).",
          "We do not publish a rate card, because a rate card pretends those differences do not exist. Call +91 9500316716, WhatsApp the same number, or use the [contact page](/contact/).",
        ],
      },
    ],
    tech: ["Flutter", "React Native", "Native Android", "Native iOS", "Node.js", "ASP.NET Core", "SQL Server"],
    related: [
      { href: "/services/software-development/", label: "Software development" },
      { href: "/services/web-development/", label: "Web development" },
      { href: "/training/#mobile", label: "Mobile app training" },
      { href: "/blog/mobile-app-development-cost-india-2026/", label: "App cost in India" },
    ],
    faqs: [
      {
        question: "Do you build for both Android and iOS?",
        answer:
          "Yes. Flutter or React Native covers both from one codebase. Native Android and native iOS are available when the product needs them. We recommend one approach after hearing the scope.",
      },
      {
        question: "Can you take over an existing Flutter or React Native app?",
        answer:
          "Yes, after we read the code. We will say whether the next feature can be added to what you have, or whether the base needs repair first.",
      },
      {
        question: "Do you publish the app to the stores?",
        answer:
          "We prepare the release and walk through Google Play and App Store submission. The store accounts remain in the client's name.",
      },
      {
        question: "How much does a mobile app cost in India?",
        answer:
          "There is no single national price. Cost follows platforms, screens, accounts, payments, offline behaviour, admin tools, and integrations. We quote after a written scope. See [how app cost actually breaks down](/blog/mobile-app-development-cost-india-2026/).",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    title: "Web Development for Businesses Worldwide | Selvi Infotech",
    description:
      "Web development for businesses worldwide. Selvi Infotech builds business websites and web applications with React and Next.js, then hands them over ready to maintain.",
    h1: "Websites and web applications",
    eyebrow: "Websites and web applications",
    intro:
      "Selvi Infotech builds websites and web applications for growing businesses. A website is the public face: pages, a clear offer, and a way to reach you. A web application is the working system behind a login. Both are web development. They are not the same project, and we scope them separately.",
    sections: [
      {
        heading: "Websites",
        paragraphs: [
          "A business website has to say what you do, where you are, and how to contact you, on a phone as well as a desktop. We build that with React and Next.js as pre-rendered pages so the content is in the HTML, not only painted in by JavaScript. Titles, descriptions, and headings are written per page. Images have alt text. The contact path is a real mailto, phone, or WhatsApp link, not a form that posts nowhere unless that is what you asked for.",
          "This site is an example of that approach: static pages, a sitemap, and copy that names the services we actually offer. Your site should do the same for your business. We will not promise a Google ranking. Technical basics help a page be understood. Ranking also depends on your Google Business Profile, what other sites say about you, and time.",
        ],
      },
      {
        heading: "Web applications",
        paragraphs: [
          "A web application has accounts, data, and tasks. Examples are a client portal, an internal dashboard, or the browser side of a product that also has a phone app. The interface is React or Next.js. The server side is Node.js, ASP.NET Core, Python, or Java Spring Boot, with SQL Server when the data calls for it. Hosting is Azure, Render, or a host you already pay for.",
          "If the work is primarily a backend system with a modest interface, it may fit better as [software development](/services/software-development/). If it is primarily a phone product, start at [mobile app development](/services/mobile-app-development/). We will tell you which page your project belongs on.",
        ],
      },
      {
        heading: "From brief to launch",
        paragraphs: [
          "We start with the pages or screens, the audience, and the content you already have. Design follows your existing brand if you have one. We do not invent a new identity unless you ask. Build, content entry, and a check on mobile come before launch. You get the source and notes on how to deploy.",
          "After launch, sites need updates. Dependency fixes, content changes, and broken forms are [web maintenance](/services/web-maintenance/), not a surprise rewrite. If you are unsure whether you need a new site or care for the one you have, read [why a business website needs maintenance](/blog/why-your-business-website-needs-maintenance/) or book a short [consulting](/services/it-consulting/) call.",
        ],
      },
    ],
    tech: ["React / Next.js", "Node.js", "ASP.NET Core", "Python", "SQL Server", "Azure"],
    related: [
      { href: "/services/web-maintenance/", label: "Web maintenance" },
      { href: "/services/software-development/", label: "Software development" },
      { href: "/services/mobile-app-development/", label: "Mobile apps" },
      { href: "/blog/why-your-business-website-needs-maintenance/", label: "Why sites need maintenance" },
    ],
    faqs: [
      {
        question: "Do you build brochure sites and web applications?",
        answer:
          "Yes, and we scope them separately. A public website and a logged-in web application are different sizes of work.",
      },
      {
        question: "Can you redesign a site we already have?",
        answer:
          "Yes. We look at the current site first. Sometimes the right job is a rebuild. Sometimes it is a repair and a content pass under web maintenance.",
      },
      {
        question: "Will a new website rank on Google?",
        answer:
          "A well-built site can be indexed and understood. We set titles, descriptions, headings, alt text, a sitemap, and fast HTML. We do not guarantee a ranking position.",
      },
      {
        question: "Where do you host?",
        answer:
          "On a host that fits the site: a static host such as Render for pre-rendered pages, or Azure when the application needs a server. We can also deploy to an account you already own.",
      },
    ],
  },
  {
    slug: "web-maintenance",
    name: "Web Maintenance",
    title: "Web Maintenance for Businesses Worldwide | Selvi Infotech",
    description:
      "Web maintenance for businesses worldwide. Selvi Infotech updates, fixes, and looks after business websites and web apps built with React, Next.js, .NET, Python, and Java.",
    h1: "Care for websites that are already live",
    eyebrow: "Updates, fixes, and care",
    intro:
      "Selvi Infotech looks after websites and web applications for growing businesses. A site that launched and was never touched again will eventually break. Certificates expire. Dependencies receive security fixes. A form posts to an inbox nobody reads. A page still names a price you changed last year. Maintenance is the work of keeping the site true and runnable.",
    sections: [
      {
        heading: "What maintenance covers",
        paragraphs: [
          "We agree a list, rather than a vague promise of support. Typical items are framework and dependency updates on a schedule, defects you or your customers report, and small content or layout changes that are not a redesign. We check that backups exist and that someone could restore them. We also check the contact path: the form, the WhatsApp link, and the phone number.",
          "A redesign, a new product module, or a new mobile app is not maintenance. Those are scoped as [web development](/services/web-development/), [software development](/services/software-development/), or [mobile app development](/services/mobile-app-development/). Mixing them into a retainer makes the retainer meaningless.",
        ],
      },
      {
        heading: "Sites we can take on",
        paragraphs: [
          "We maintain work we built, and we take on sites we did not build after a review. The stacks we know well are React, Next.js, Node.js, ASP.NET Core, Python, Java Spring Boot, and SQL Server, hosted on Azure or another ordinary host. If the site is something else, we will look and tell you whether we should take it, whether it needs a rebuild, or whether you should stay with the person who built it.",
          "Before we start we need the repository or the files, hosting access, and a person who can approve a change. We will not guess passwords or work around an owner who cannot be reached.",
        ],
      },
      {
        heading: "How to engage",
        paragraphs: [
          "Some clients want a monthly block of hours. Others want us on call for a known list of tasks, billed when there is work. We will recommend one after we see the site. Neither one includes a ranking guarantee. Maintenance protects the site you have. Search performance is a separate question, covered honestly in [why a business website needs regular maintenance](/blog/why-your-business-website-needs-maintenance/).",
          "If you are not sure the site is worth keeping, a short [IT consulting](/services/it-consulting/) review is the better first step. Send the URL to info@selviinfotech.com or WhatsApp +91 9500316716.",
        ],
      },
    ],
    tech: ["React / Next.js", "Node.js", "ASP.NET Core", "Python", "Java Spring Boot", "SQL Server", "Azure"],
    related: [
      { href: "/services/web-development/", label: "Web development" },
      { href: "/services/software-development/", label: "Software development" },
      { href: "/blog/why-your-business-website-needs-maintenance/", label: "Maintenance article" },
      { href: "/contact/", label: "Contact" },
    ],
    faqs: [
      {
        question: "Do you only maintain sites you originally built?",
        answer:
          "No. We review the stack and the host first. If it is a stack we work in, we can take it on. If it is not, we will say so.",
      },
      {
        question: "Is maintenance a monthly retainer?",
        answer:
          "It can be a monthly block of hours, or work billed when you have a change. We recommend one after seeing the site.",
      },
      {
        question: "Will maintenance improve our Google ranking?",
        answer:
          "Maintenance keeps the site available, updated, and accurate. That protects the chance of being found. It is not a search-engine marketing package, and we do not promise positions.",
      },
      {
        question: "What counts as an emergency?",
        answer:
          "The site down, a contact form that stopped delivering, or a security fix that should not wait. Cosmetic changes wait for the next agreed slot. Response time is whatever we write into the agreement, not an assumed round-the-clock desk.",
      },
    ],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    title: "IT Consulting for Businesses Worldwide | Selvi Infotech",
    description:
      "IT consulting for businesses worldwide. Selvi Infotech advises on software architecture, stack choice, Azure, and whether to build, maintain, or train.",
    h1: "A working second opinion",
    eyebrow: "A working second opinion",
    intro:
      "IT consulting at Selvi Infotech is a working conversation with people who also build the software. You might want a second opinion on a stack, a review of an architecture before you hire, a plan for moving a workload to Azure, or a way to line a training program up with the tools your team will actually use.",
    sections: [
      {
        heading: "What a consulting engagement can be",
        paragraphs: [
          "A written read of the current system: what it is built with, where it is fragile, and what we would not change. Stack guidance limited to technologies we deliver: React and Next.js, Flutter, React Native, native Android and iOS, Node.js, C# and ASP.NET Core, Python, Java Spring Boot, SQL Server, and Azure. A phased plan that separates the next month from the work that can wait.",
          "Sometimes the gap is skill, not software. In that case the useful output is a training recommendation, not a rebuild. Our [training programs](/training/) cover full-stack web, mobile apps, Python, Java, data science, cloud, and UI/UX. Corporate batches can be shaped around your stack.",
          "Sometimes the useful output is to leave a system alone. We will say that if it is true. We will also say if a specialist you already have is the better fit.",
        ],
      },
      {
        heading: "What you leave with",
        paragraphs: [
          "A short written note: the recommendation, the reasons, and the next step. The next step might be a [software build](/services/software-development/), a [mobile app](/services/mobile-app-development/), a [website](/services/web-development/), a [maintenance retainer](/services/web-maintenance/), a training batch, or no project at all.",
          "Consulting is not a slide deck and it is not a disguised sales script. If we think we should build the thing, we say so and then scope that work separately. The consulting note stands on its own if you take it to another team.",
        ],
      },
      {
        heading: "How to book",
        paragraphs: [
          "Send what you have: a URL, a diagram, a paragraph on the problem. We start with a conversation by phone or WhatsApp. A written review is scoped after that conversation, so you know what the note will cover before you pay for it. Reach us at info@selviinfotech.com or +91 9500316716.",
        ],
      },
    ],
    tech: [
      "React / Next.js",
      "Flutter",
      "Node.js",
      "ASP.NET Core",
      "Python",
      "Java Spring Boot",
      "SQL Server",
      "Azure",
    ],
    related: [
      { href: "/services/software-development/", label: "Software development" },
      { href: "/services/web-maintenance/", label: "Web maintenance" },
      { href: "/training/", label: "Training programs" },
      { href: "/contact/", label: "Book a conversation" },
    ],
    faqs: [
      {
        question: "Is the first conversation paid?",
        answer:
          "The first call is a conversation so we can tell whether a written review is useful. The written review itself is scoped and quoted before it starts.",
      },
      {
        question: "Do you consult remotely?",
        answer:
          "Yes. We work with clients worldwide. Most follow-up is remote, and we meet in person when a meeting helps.",
      },
      {
        question: "Can consulting turn into a build?",
        answer:
          "It can, as a separately scoped project. You can also take the written note to another team. The note is yours.",
      },
      {
        question: "Which stacks will you advise on?",
        answer:
          "The ones we deliver: React, Next.js, Flutter, React Native, Node.js, C# / .NET, ASP.NET Core, Python, Java Spring Boot, SQL Server, and Azure. We will not pretend to be specialists in a platform we do not ship.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
