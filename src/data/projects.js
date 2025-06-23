import eLibrary from "../assets/projects/eLibrary.jpg";
import sipetak from "../assets/projects/sipetak.jpg";
import nuansaBudaya from "../assets/projects/nuansaBudaya.jpg";
import shoemag from "../assets/projects/shoemag.jpg";
import bandGenerator from "../assets/projects/bandGenerator.jpg";
import madeByCan from "../assets/projects/madeByCan.jpg";

export const allTechnologies = [
  "All",
  "CodeIgniter",
  "Bootstrap",
  "jQuery",
  "Laravel",
  "Tailwind CSS",
  "React.js",
  "Figma"
];

export const projects = [
  {
    id: 1,
    name: "MadeByCan",
    image: madeByCan,
    title: "Project Base Learning",
    status: "In Progress",
    description: `A modern e-commerce platform built using React.js, Laravel,
      Tailwind CSS, and PostgreSQL, aimed at delivering seamless online
      shopping experience.`,
    tech: ["React.js", "Laravel", "Tailwind CSS", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    name: "SIPETAK PNB",
    image: sipetak,
    title: "Project Base Learning",
    status: "Completed",
    description: `An academic management system developed with Laravel, Tailwind CSS,
      and jQuery, designed to streamline student and faculty interactions.`,
    tech: ["Laravel", "Tailwind CSS", "jQuery", "MySQL"],
    live: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Nuansa Budaya",
    image: nuansaBudaya,
    title: "Project Base Learning",
    status: "Completed",
    description: `A cultural portal showcasing Indonesian traditions, built using CodeIgniter,
      Bootstrap, jQuery, and MySQL to promote cultural heritage.`,
    tech: ["CodeIgniter", "Bootstrap", "jQuery", "MySQL"],
    live: "#",
    github: "https://github.com/GusWiraAditya/portal-nuansa-budaya",
  },
  {
    id: 5,
    name: "E-Library",
    image: eLibrary,
    title: "Project Base Learning",
    status: "Completed",
    description: `A comprehensive digital library system implemented with CodeIgniter,
      Bootstrap, and jQuery, enabling efficient book management and user access.`,
    tech: ["CodeIgniter", "Bootstrap", "jQuery", "MySQL"],
    live: "#",
    github: "https://github.com/GusWiraAditya/E-Library",
  },
  {
    id: 6,
    name: "Shoemag",
    image: shoemag,
    title: "Team Project",
    status: "Completed",
    description: `User Unterface (UI) design of an online shoe shopping website inspired by the kick avenue website and websites of international shoe brands such as addidas, nike and puma made using Figma.`,
    tech: ["Figma"],
    live: "https://www.figma.com/proto/JpGInzk9c1BEnINVFSHQfb/SHOEMAG-PROJECT",
    figma: "https://www.figma.com/proto/JpGInzk9c1BEnINVFSHQfb/SHOEMAG-PROJECT",
  },
];
