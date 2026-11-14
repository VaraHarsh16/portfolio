// ✏️ Edit everything about your portfolio here.

export const profile = {
  name: "Vara Harsh",
  role: "Full Stack & Software Developer",
  tagline:
    "I build modern, responsive, and scalable web applications that combine clean design with powerful functionality. From pixel-perfect user interfaces to robust backend systems, I turn ideas into seamless digital experiences using modern web technologies..",
  email: "varaharsh1610@gmail.com", 
  github: "https://github.com/VaraHarsh16", 
  linkedin: "www.linkedin.com/in/vara-harsh-0989a027a", 
  about: [
    "I'm a full-stack and software developer passionate about turning ideas into polished, real-world products. I work across the entire stack, crafting responsive front ends with React and building secure, scalable back ends and databases.",
    "I’m passionate about writing clean code, optimizing performance, and creating seamless user experiences. I’m always exploring new technologies and seeking meaningful challenges where I can grow my skills and contribute value to a team.",
  ],
  stats: [
    { value: "8+", label: "Projects built" },
    { value: "2+", label: "Years learning" },
    { value: "1+", label: "Technologies" },
  ],
};

export const skills = [
  {
    title: "Frontend",
    desc: "Responsive, accessible and fast user interfaces.",
    items: [
      "React",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    desc: "Secure, well-structured APIs and server logic.",
    items: [
      "Node.js & Express",
      "REST API Design",
      "Authentication (JWT)",
      "Python",
    ],
  },
  {
    title: "Database",
    desc: "Data modelling, queries and optimisation.",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    title: "Tools & Workflow",
    desc: "Version control, testing and deployment.",
    items: [
      "Git & GitHub",
      "Postman",
      "Docker",
      "Vercel / Netlify",
    ],
  },
];

// Replace these sample projects with your own.
export const projects = [
  {
    title: "Golden Crust Bakery Shop",
    category: "Frontend",
    description:
      "A modern and responsive bakery website showcasing delicious products, an attractive menu, and an easy-to-use interface for customers to explore bakery items.",
    features: [ "Responsive bakery website design",
    "Interactive product menu and category filtering",
    "Attractive UI with smooth navigation"],
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    live: "https://goldencrusttt.netlify.app/",
    code: "https://github.com/VaraHarsh16/Golden-Crust-Bakery",
  },
  {
    title: "Task Management App",
    category: "Web App",
    description:
      "Kanban-style productivity app that helps teams plan, prioritise and track work in real time.",
    features: ["Drag & drop boards", "Real-time updates", "Team collaboration"],
    tags: ["React", "Express", "PostgreSQL", "JWT"],
    live: "#",
    code: "#",
  },
  // {
  //   title: "Blog & CMS",
  //   category: "Full Stack",
  //   description:
  //     "Content platform where authors write, edit and publish articles with a clean reading experience.",
  //   features: ["Rich-text editor", "Categories, tags & comments", "SEO-friendly pages"],
  //   tags: ["Next.js", "Node.js", "MySQL"],
  //   live: "#",
  //   code: "#",
  // },
  // {
  //   title: "Chat Application",
  //   category: "Real-time",
  //   description:
  //     "Instant messaging app with private rooms, typing indicators and persistent message history.",
  //   features: ["WebSocket messaging", "Online presence status", "Saved chat history"],
  //   tags: ["React", "Socket.io", "Node.js", "MongoDB"],
  //   live: "#",
  //   code: "#",
  // },
  // {
  //   title: "Weather Dashboard",
  //   category: "Frontend",
  //   description:
  //     "Responsive dashboard with live conditions, 7-day forecasts and interactive charts for any city.",
  //   features: ["City search & saved locations", "Interactive charts", "Fully responsive layout"],
  //   tags: ["React", "REST API", "Chart.js"],
  //   live: "#",
  //   code: "#",
  // },
  // {
  //   title: "Finance Tracker",
  //   category: "Full Stack",
  //   description:
  //     "Personal finance app to track income and expenses with clear monthly insights and reports.",
  //   features: ["Category-wise insights", "Monthly reports", "Secure cloud sync"],
  //   tags: ["React", "Firebase", "Recharts"],
  //   live: "#",
  //   code: "#",
  // },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
