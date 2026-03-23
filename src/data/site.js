import {
  FaGitAlt,
  FaGithub,
  FaJsSquare,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiVite, SiFigma } from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Tanushree Soni",
  badge: "Modern developer portfolio",
  intro:
    "I create elegant web interfaces, practical software solutions, and engaging technical learning experiences. My work blends clean development with thoughtful presentation so products feel professional and easy to use.",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
  focus: "Frontend-first experiences with full-stack understanding",
  focusSummary:
    "I enjoy building polished interfaces in React while supporting real-world app functionality with backend tools and structured workflows.",
  footerNote: "Designed and developed with React, Vite, Tailwind CSS, Framer Motion, and React Icons.",
};

export const stats = [
  { value: "10+", label: "Projects built and refined" },
  { value: "6+", label: "Core technologies used" },
  { value: "100%", label: "Focus on clean, practical UI" },
];

export const techStack = [
  { label: "React",       icon: FaReact,      color: "#61dafb", level: 90, category: "Frontend",  description: "Component-driven frontend development for modern web apps." },
  { label: "JavaScript", icon: SiJavascript,  color: "#f7df1e", level: 88, category: "Frontend",  description: "Interactive logic and client-side application behavior." },
  { label: "Tailwind",   icon: SiTailwindcss, color: "#38bdf8", level: 85, category: "Frontend",  description: "Fast styling with responsive utility-first workflows." },
  { label: "Node.js",    icon: FaNodeJs,      color: "#8cc84b", level: 75, category: "Backend",   description: "Backend services and API-powered functionality." },
  { label: "MongoDB",    icon: SiMongodb,     color: "#4db33d", level: 70, category: "Backend",   description: "Flexible database handling for scalable applications." },
  { label: "Git",        icon: FaGitAlt,      color: "#f05032", level: 82, category: "Tools",     description: "Version control and collaborative development workflows." },
  { label: "Vite",       icon: SiVite,        color: "#646cff", level: 78, category: "Tools",     description: "Modern development tooling for fast builds and iteration." },
  { label: "Figma",      icon: SiFigma,       color: "#a259ff", level: 65, category: "Design",    description: "UI/UX design and prototyping for web interfaces." },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/TanushreeSoni2021", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: FaLinkedinIn },
];

export const contactInfo = {
  email: "tanushreesoni.dev@example.com",
  location: "India",
  github: "https://github.com/TanushreeSoni2021",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const skillIcons = {
  react: FaReact,
  javascript: FaJsSquare,
  node: FaNodeJs,
  mongodb: SiMongodb,
  git: FaGitAlt,
  tailwind: SiTailwindcss,
};
