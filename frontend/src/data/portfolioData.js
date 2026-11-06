// ─────────────────────────────────────────────────────────────────
// Dhikshith Ram Poshala — Portfolio Data
// Edit this single file to update any section of the site.
// ─────────────────────────────────────────────────────────────────

export const profile = {
  name: "Dhikshith Ram Poshala",
  role: "AIML Student & Full-Stack Developer",
  tagline: "Building intelligent, user-friendly solutions with AI/ML and modern web technologies.",
  location: "Hyderabad, India",
  phone: "+91 9391142810",
  email: "deekshithramposhala@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Rams1586",
    linkedin: "https://www.linkedin.com/in/poshala-dhikshith-ram-a422492b2",
    twitter: "",
  },
  bio: [
    "I'm an aspiring AIML student with hands-on experience in Python, machine learning fundamentals, and data analysis — passionate about building intelligent and user-friendly applications.",
    "I enjoy developing full-stack solutions with AI/ML integration, working across data preprocessing, model building, APIs, and database integration to solve real-world problems.",
  ],
};

export const skills = [
  { name: "Python",                   level: "advanced",      category: "language"  },
  { name: "HTML5",                    level: "advanced",      category: "frontend"  },
  { name: "CSS3",                     level: "advanced",      category: "frontend"  },
  { name: "React.js",                 level: "intermediate",  category: "frontend"  },
  { name: "Responsive Web Design",    level: "advanced",      category: "frontend"  },
  { name: "Material UI / Bootstrap",  level: "intermediate",  category: "frontend"  },
  { name: "MySQL / SQLite",           level: "intermediate",  category: "database"  },
  { name: "Git & GitHub",             level: "advanced",      category: "tools"     },
  { name: "VS Code",                  level: "advanced",      category: "tools"     },
  { name: "Machine Learning",         level: "intermediate",  category: "ai"        },
  { name: "Data Analysis",            level: "intermediate",  category: "ai"        },
  { name: "Photography & Video Edit", level: "advanced",      category: "creative"  },
];

export const experience = [
  {
    role: "Hackathon Finalist",
    company: "VentureNexus — 48hr Hackathon",
    period: "2024",
    points: [
      "Built a production-grade entrepreneurship platform for Andhra Pradesh within 48 hours using React.js, Framer Motion, and Context API.",
      "Delivered 15+ feature pages covering startup lifecycle, agri-innovation, women & tribal entrepreneurship, mentorship, and impact analytics.",
      "Integrated an AI Copilot (VentureNexus AI) with bilingual Telugu–English support designed for rural users, along with JWT-ready auth and dark mode.",
    ],
  },
  {
    role: "2nd Place — Full Stack Development",
    company: "Achievers Day 2023, St Mary's Engineering College",
    period: "2023",
    points: [
      "Secured 2nd position in the Full Stack Development category (Node.js & React.js) by building real-world web application prototypes under competition conditions.",
    ],
  },
  {
    role: "Project Presenter",
    company: "CTO Day 2023 — Deep Thought / SoftwareHub",
    period: "2023",
    points: [
      "Presented innovative project ideas and technical solutions at the CTO Day 2023 Project Showcase Event organized by Deep Thought / SoftwareHub.",
    ],
  },
];

export const education = [
  {
    degree: "BTech — Computer Science and Engineering (AIML)",
    school: "St Mary's Engineering College",
    period: "2023 — 2027",
    detail: "Specialisation in Artificial Intelligence & Machine Learning. Coursework includes ML fundamentals, data analysis, Python, database systems, and full-stack web development.",
  },
];

export const certifications = [
  {
    title: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "Python for Beginners: Mastering the Essentials",
    issuer: "Scalar Topics",
    year: "2024",
  },
];

export const projects = [
  {
    id: "proj-01",
    title: "Acquire OS AI — Real Estate Management Platform",
    description:
      "A full-stack AI-powered real estate platform featuring role-based dashboards, CRM modules, and AI-powered property recommendations to enhance the user experience.",
    stack: ["React.js", "Vite", "FastAPI", "PostgreSQL", "Python", "AI/ML"],
    github: "https://github.com/Rams1586",
    live: "",
    status: "shipped",
  },
  {
    id: "proj-02",
    title: "VentureNexus — Entrepreneurship Platform (AP)",
    description:
      "A production-grade inclusive entrepreneurship platform for Andhra Pradesh innovators and incubators, built in 48 hours at a hackathon with 15+ feature pages and an AI Copilot with bilingual Telugu–English support.",
    stack: ["React.js", "Framer Motion", "Context API", "JWT", "AI Copilot"],
    github: "https://github.com/Rams1586",
    live: "",
    status: "shipped",
  },
];
