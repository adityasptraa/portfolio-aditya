import cv from "../assets/cv/CV Aditya Saputra.pdf";

import profileDark from "../assets/profile/profile-dark.jpg";
import profileLight from "../assets/profile/GGS.jpg";

import aboutDark from "../assets/about/about-dark.jpg";
import aboutLight from "../assets/about/about-light.jpg";

// hero
export const hero = {
  firstName: "Aditya Saputra",
  lastName: "Pratama",
  role: ["UI / UX Designer", "Creative Designer", "Frontend Developer"],
  description: `Creative Designer, UI/UX Designer, and Frontend Developer skilled in Photoshop,
   Premiere Pro, Canva, Figma, and React—passionate about turning ideas into visually engaging digital experiences.`,
  imageProfileLight: profileLight,
  imageProfileDark: profileDark,
  resume: cv,
  hire: "https://wa.me/6285174441396",
};
export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/adityaasptraa/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  // {
  //   href: "https://www.github.com/GusWiraAditya/",
  //   label: "GitHub",
  //   icon: "github",
  // },
  {
    href: "https://www.instagram.com/adityaasptraa/",
    label: "Instagram",
    icon: "instagram",
  },
];

// about
export const aboutMe = {
  description: `  An undergraduate Information Technology student at Bali State Polytechnic with a strong passion for technology and design. 
  As a creative and detail-oriented Graphic Designer, UI/UX Designer, and Frontend Developer, I have hands-on experience with Adobe Photoshop, 
  Adobe Premiere Pro, Canva, Figma, and React.js.
   I’m quick to adapt to new technologies, eager to learn, and committed to growing through collaboration and innovation.`,
  imageAboutLight: aboutLight,
  imageAboutDark: aboutDark,
};

// technologies
export const technologies = [
  {
    name: "Photoshop",
    icon: "SiAdobephotoshop",
    color: "text-blue-950",
    level: "advanced",
  },
  {
    name: "Premiere Pro",
    icon: "SiAdobepremierepro",
    color: "text-purple-950",
    level: "advanced",
  },
  {
    name: "Figma",
    icon: "SiFigma",
    color: "text-neutral-900",
    level: "advanced",
  },
  {
    name: "Canva",
    icon: "SiCanva",
    color: "text-blue-600",
    level: "advanced",
  },
  {
    name: "HTML",
    icon: "FaHtml5",
    color: "text-orange-500",
    level: "advanced",
  },
  { name: "CSS", icon: "FaCss3Alt", color: "text-blue-500", level: "advanced" },
  {
    name: "JavaScript",
    icon: "DiJavascript1",
    color: "text-yellow-400",
    level: "advanced",
  },
  { name: "PHP", icon: "FaPhp", color: "text-indigo-600", level: "advanced" },
  {
    name: "Laravel",
    icon: "FaLaravel",
    color: "text-red-600",
    level: "advanced",
  },
  {
    name: "CodeIgniter",
    icon: "SiCodeigniter",
    color: "text-orange-600",
    level: "advanced",
  },
  { name: "MySQL", icon: "SiMysql", color: "text-blue-600", level: "advanced" },
  {
    name: "Bootstrap",
    icon: "FaBootstrap",
    color: "text-purple-600",
    level: "advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    color: "text-cyan-400",
    level: "advanced",
  },
  {
    name: "React JS",
    icon: "FaReact",
    color: "text-cyan-300",
    level: "learning",
  },
  
];
