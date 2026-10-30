import { site } from "@/lib/site";

export type Course = {
  id: string;
  title: string;
  tagline: string;
  badges: { label: string; tone: "popular" | "new" | "level" }[];
  duration: string;
  mode: string;
  modules: { title: string; detail: string }[];
  highlights: string[];
};

export const courses: Course[] = [
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    tagline:
      "Build complete web applications from front-end to back-end and deploy to production.",
    badges: [
      { label: "Most popular", tone: "popular" },
      { label: "Beginner – Advanced", tone: "level" },
    ],
    duration: "6 months",
    mode: "Batch / online",
    modules: [
      {
        title: "HTML, CSS & responsive design",
        detail: "Semantic HTML5, CSS3, Flexbox, Grid, Bootstrap, media queries",
      },
      {
        title: "JavaScript & ES6+",
        detail: "DOM manipulation, async/await, Promises, Fetch API, modules",
      },
      {
        title: "React.js",
        detail: "Components, hooks, state management, React Router, Redux",
      },
      {
        title: "Node.js & Express",
        detail: "REST APIs, middleware, authentication, JWT, file uploads",
      },
      {
        title: "Databases",
        detail: "MySQL, MongoDB, schema design, ORMs, query optimisation",
      },
      {
        title: "Deployment & DevOps basics",
        detail: "Git, GitHub, CI/CD, Docker intro, cloud deployment (AWS/Render)",
      },
    ],
    highlights: [
      "5 real-world capstone projects",
      "Code reviews during the course",
      "Resume and LinkedIn profile support",
      "Mock interview preparation",
      "Placement assistance for eligible students",
      "Selvi Infotech completion certificate",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    tagline: "Build cross-platform iOS and Android apps with React Native and Flutter.",
    badges: [
      { label: "New batch", tone: "new" },
      { label: "Intermediate", tone: "level" },
    ],
    duration: "3 months",
    mode: "Batch / online",
    modules: [
      {
        title: "React Native fundamentals",
        detail: "Components, StyleSheet, navigation, gestures, device APIs",
      },
      {
        title: "Flutter & Dart",
        detail: "Widgets, state management (Provider/Bloc), animations",
      },
      {
        title: "Backend integration",
        detail: "REST APIs, Firebase, push notifications, local storage",
      },
      {
        title: "App store deployment",
        detail: "Google Play and Apple App Store submission, certificates, signing",
      },
    ],
    highlights: [
      "Build 3 deployable apps",
      "Live on Play Store / App Store",
      "UI/UX design principles",
      "Mentored project guidance",
      "Selvi Infotech certificate",
    ],
  },
  {
    id: "datascience",
    title: "Data Science & AI",
    tagline: "Master Python, machine learning, and AI — from data wrangling to model deployment.",
    badges: [
      { label: "High demand", tone: "popular" },
      { label: "Beginner – Advanced", tone: "level" },
    ],
    duration: "4 months",
    mode: "Batch / online",
    modules: [
      {
        title: "Python for data science",
        detail: "NumPy, Pandas, data cleaning, EDA, Matplotlib, Seaborn",
      },
      {
        title: "Statistics & probability",
        detail: "Descriptive stats, distributions, hypothesis testing, regression",
      },
      {
        title: "Machine learning",
        detail: "Scikit-learn, supervised and unsupervised learning, model evaluation",
      },
      {
        title: "Deep learning & AI",
        detail: "Neural networks, TensorFlow/Keras, CNNs, NLP fundamentals",
      },
      {
        title: "Model deployment",
        detail: "Flask APIs, Streamlit dashboards, cloud deployment",
      },
    ],
    highlights: [
      "Real datasets and Kaggle projects",
      "Portfolio of 4 ML projects",
      "Industry guest sessions",
      "Model deployment workshop",
      "Selvi Infotech certificate",
    ],
  },
  {
    id: "python",
    title: "Python Programming",
    tagline:
      "Start from scratch and become confident in Python — a widely used language for scripting, web, and data work.",
    badges: [{ label: "Beginner friendly", tone: "level" }],
    duration: "2 months",
    mode: "Batch / online",
    modules: [
      {
        title: "Python basics",
        detail: "Syntax, data types, operators, control flow, functions, modules",
      },
      {
        title: "Object-oriented programming",
        detail: "Classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "File handling & libraries",
        detail: "CSV/JSON processing, OS module, standard library, pip packages",
      },
      {
        title: "Mini projects",
        detail: "CLI applications, automation scripts, web scraping with BeautifulSoup",
      },
    ],
    highlights: [
      "No prior experience needed",
      "Weekly coding challenges",
      "3 mini-project builds",
      "Foundation for the Data Science path",
      "Selvi Infotech certificate",
    ],
  },
  {
    id: "java",
    title: "Java Programming",
    tagline:
      "Master Java fundamentals and object-oriented design for enterprise and Android development.",
    badges: [{ label: "Beginner – Intermediate", tone: "level" }],
    duration: "2 months",
    mode: "Batch / online",
    modules: [
      {
        title: "Core Java",
        detail: "Syntax, data types, arrays, strings, control structures, methods",
      },
      {
        title: "OOP with Java",
        detail: "Classes, interfaces, inheritance, abstract classes, generics",
      },
      {
        title: "Collections & exceptions",
        detail: "ArrayList, HashMap, iterators, try-catch, custom exceptions",
      },
      {
        title: "Java for backend",
        detail: "JDBC, Spring Boot basics, REST API development, Maven",
      },
    ],
    highlights: [
      "Industry-standard Java practices",
      "Spring Boot project build",
      "JDBC database connectivity",
      "Stepping stone to the Full Stack path",
      "Selvi Infotech certificate",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing (AWS & Azure)",
    tagline: "Learn to architect, deploy, and manage scalable infrastructure on AWS and Azure.",
    badges: [
      { label: "Career booster", tone: "popular" },
      { label: "Intermediate", tone: "level" },
    ],
    duration: "2 months",
    mode: "Online",
    modules: [
      {
        title: "Cloud fundamentals",
        detail: "IaaS/PaaS/SaaS, cloud models, regions, availability zones",
      },
      {
        title: "AWS core services",
        detail: "EC2, S3, RDS, Lambda, IAM, VPC, CloudFront, Route 53",
      },
      {
        title: "Azure essentials",
        detail: "Virtual Machines, Blob Storage, Azure SQL, App Service, AD",
      },
      {
        title: "DevOps on cloud",
        detail: "CI/CD pipelines, Docker, Kubernetes basics, monitoring",
      },
    ],
    highlights: [
      "Live AWS and Azure lab access",
      "Exam prep for AWS / AZ-900",
      "Architecture design sessions",
      "Cost optimisation strategies",
      "Selvi Infotech certificate",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    tagline:
      "Design user-centred digital products using industry-standard tools like Figma.",
    badges: [
      { label: "New", tone: "new" },
      { label: "Beginner friendly", tone: "level" },
    ],
    duration: "2 months",
    mode: "Batch / online",
    modules: [
      {
        title: "UX fundamentals",
        detail: "User research, personas, user journeys, information architecture",
      },
      {
        title: "UI design principles",
        detail: "Typography, colour theory, spacing, visual hierarchy, accessibility",
      },
      {
        title: "Figma mastery",
        detail: "Wireframing, prototyping, components, auto-layout, design systems",
      },
      {
        title: "Portfolio projects",
        detail: "Design 3 complete app flows: mobile, web, and dashboard",
      },
    ],
    highlights: [
      "No design experience needed",
      "Figma from scratch to advanced",
      "Usability testing sessions",
      "Portfolio-ready case studies",
      "Selvi Infotech certificate",
    ],
  },
];

export const trainingFaqs = [
  {
    question: "Are the certificates recognised by employers?",
    answer:
      "Certificates are issued by Selvi Infotech Private Limited. Employers can check one instantly on the [certificate verification page](/verify/). LinkedIn-shareable certificates are available on request.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "It depends on the course. Python, Full Stack Web Development, and UI/UX are beginner-friendly. Mobile App Development, Cloud, and Data Science work best with some programming exposure. Contact us and we will suggest a path.",
  },
  {
    question: "Are classes held online or in person?",
    answer:
      "Most programs run as live online sessions for learners worldwide, and in person when that suits the group. Cloud Computing is primarily online because of the lab setup.",
  },
  {
    question: "Is placement assistance provided?",
    answer:
      "Eligible students on the Full Stack and Data Science programs receive resume review, mock interviews, and referrals to the hiring partners we work with. Assistance is support with applications and interviews, not a guaranteed job.",
  },
  {
    question: "How do I enrol?",
    answer:
      `Use the [contact form](/contact/), email info@selviinfotech.com, or WhatsApp [+91 9500316716](${site.whatsapp}). We share the batch schedule, fees, and next steps from there.`,
  },
];
