import eLibrary from "../assets/projects/eLibrary.jpg";
import sipetak from "../assets/projects/sipetak.jpg";
import nuansaBudaya from "../assets/projects/nuansaBudaya.jpg";
import loketEvent from "../assets/projects/loketEvent.jpg";
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
  "Express.js"
];

export const projects = [
  {
    id: 1,
    name: "MadeByCan",
    image: madeByCan,
    title: "Project Base Learning",
    status: "In Progress",
    description: `A modern e-commerce platform built using React.js, Express.js,
      Tailwind CSS, and PostgreSQL, aimed at delivering seamless online
      shopping experience.`,
    tech: ["React.js", "Laravel", "Tailwind CSS", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Band Name Generator",
    image: bandGenerator,
    title: "Personal Project",
    status: "Completed",
    description: `An interactive web app that generates creative band names
      using Express.js, CSS, and EJS templating for a dynamic user experience.`,
    tech: ["Express.js", "CSS", "EJS"],
    live: "#",
    github: "https://github.com/GusWiraAditya/band-name-generator",
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
    name: "Loket Event",
    image: loketEvent,
    title: "Personal Project",
    status: "Completed",
    description: `An event ticketing platform created with PHP 
    and Bootstrap that facilitates event management and ticket sales.`,
    tech: ["PHP", "Bootstrap", "MySQL"],
    live: "#",
    github: "https://github.com/GusWiraAditya/Event-Ticket",
  },
];
