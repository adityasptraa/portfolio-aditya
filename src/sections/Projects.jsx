import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects, allTechnologies } from "../data/projects";

const animationProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { y: 50, opacity: 0 },
  transition: { duration: 1 },
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="p-10 sm:p-20 overflow-hidden">
      <motion.div className="max-w-6xl mx-auto text-center" {...animationProps}>
        <motion.h1
          {...animationProps}
          className="text-2xl sm:text-5xl font-bold text-sky-700 dark:text-neutral-50"
        >
          My <span className="dark:text-sky-700">Projects</span>
          <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm  pt-3 sm:pt-5 font-normal">
            Some of the projects I’ve worked on during my academic journey.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-5 sm:mb-10">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-3 py-1 rounded-full text-sm font-normal border ${
                  filter === tech
                    ? "bg-sky-800 text-white"
                    : "border-gray-300 dark:border-slate-700 text-slate-700 dark:text-neutral-100"
                } hover:bg-sky-800 hover:text-white transition`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.div
              {...animationProps}
              key={project.id}
              className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between"
              style={{
                filter: "drop-shadow(0 0 10px rgba(22,33,117,0.3))",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-fit object-cover rounded-t-lg mb-2"
              />
              <div className="px-8 text-left flex flex-col h-full pt-3 ">
                <div className="flex items-center flex-wrap pb-3">
                  <h3 className="text-2xl font-semibold pr-2">
                    {project.name}
                  </h3>
                  <p
                    className={`text-xs text-center rounded-sm p-1 bg-yellow-200 text-yellow-800 
              ${project.status == "In Progress" ? "block" : "hidden"}`}
                  >
                    {project.status}
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 pb-5">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pb-5 px-8">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-sky-100 dark:bg-sky-800 text-sky-800 dark:text-blue-100 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 px-9 pb-8">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaExternalLinkAlt size={14} /> Live View
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
