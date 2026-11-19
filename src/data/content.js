// ✏️ Edit everything about your portfolio here.

export const profile = {
  name: "Harsh Vara",
  role: "Full Stack & Software Developer",
  tagline:
    "Computer Engineering student who loves building web apps. Learning something new every day and turning it into real projects.",
  email: "varaharsh061@example.com", // TODO: change
  github: "https://github.com/VaraHarsh16", // TODO: change
  linkedin: "https://linkedin.com/in/your-username", // TODO: change
  about: [
    "Hi, I'm Harsh, a B.Tech student at Atmiya University, Gujarat. I did my diploma at A V Parekh Technical Institute, where I fell in love with building things for the web.",
    "I learn best by building, so most of what I know comes from college projects, online courses and my own experiments with React, Node.js and databases. I'm looking for internships and learning opportunities where I can grow with a team and contribute.",
  ],
  stats: [
    { value: "4", label: "Projects built" },
    { value: "8.39", label: "Diploma CGPA" },
    { value: "90.87%", label: "10th Percentage" },
  ],
};

// ✏️ Check the years and branch, then edit if needed.
export const education = [
  {
    period: "2023 – 2026",
    title: "B.Tech in Computer Engineering",
    place: "Atmiya University",
    note: "Currently pursuing",
  },
  {
    period: "2020 – 2023",
    title: "Diploma in Computer Engineering",
    place: "A V Parekh Technical Institute",
    note: "CGPA: 8.39",
  },
  {
    period: "2020",
    title: "Secondary School (10th)",
    place: "Your School Name",
    note: "Percentage: 90.87%",
  },
];

export const certifications = [
  "Full Stack Web Development – add course / platform name",
  "JavaScript Algorithms & Data Structures – add platform name",
  "Hackathon / College Tech Fest participation – add details",
];

export const skills = [
  { title: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", items: ["HTML5", "CSS3", "React", "Bootstrap"] },
  { title: "Backend & Database", items: ["Node.js", "Express", "MySQL", "MongoDB"] },
  { title: "Tools & Basics", items: ["Git & GitHub", "VS Code", "Postman", "Data Structures", "OOP"] },
];

// ✏️ Replace these sample projects with your own.
export const projects = [
  {
     title: "Golden Crust Bakery Shop",
    category: "Frontend",
    description:
      "A modern and responsive bakery website showcasing delicious products, an attractive menu, and an easy-to-use interface for customers to explore bakery items.",
    
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    live: "https://goldencrusttt.netlify.app/",
    code: "https://github.com/VaraHarsh16/Golden-Crust-Bakery",
  },
  // {
  //   title: "Library Management System",
  //   category: "College Project",
  //   description:
  //     "Manages books, members and issue/return history with automatic fine calculation and quick search by title or author.",
  //   tags: ["Java", "MySQL"],
  //   live: "#",
  //   code: "#",
  // },
 
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
