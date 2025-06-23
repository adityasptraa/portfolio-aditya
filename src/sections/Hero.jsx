import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { hero, socialLinks } from "../data";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const iconMap = {
  linkedin: <FaLinkedin size={25} />,
  github: <FaGithub size={25} />,
  instagram: <FaInstagram size={25} />,
};

const animationProps = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.7 },
};

export default function Hero() {
  const { darkMode } = useTheme();
  const profile = darkMode ? hero.imageProfileDark : hero.imageProfileLight;

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 p-10 sm:pt-20 items-center overflow-hidden"
    >
      <div className="flex justify-center w-full lg:mb-0">
        <motion.img
          {...animationProps}
          src={profile}
          alt={hero.firstName + " " + hero.lastName}
          className="rounded-xl lg:rounded-full w-60 lg:w-[500px] object-cover shadow-lg"
          style={{
            filter: darkMode
              ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
              : "drop-shadow(0 0 10px rgba(22,33,117,0.3))",
          }}
        />
      </div>

      <div className="w-full lg:w-[500px] flex flex-col justify-center items-center lg:items-start pt-5 lg:pt-0">
        <motion.h1
          {...animationProps}
          className="text-2xl sm:text-5xl lg:text-5xl font-bold text-blue-950 dark:text-neutral-50"
        >
          {hero.firstName}{" "}
          <span className="dark:text-sky-700">{hero.lastName}</span>
        </motion.h1>

        <motion.span
          {...animationProps}
          className="text-md sm:text-xl lg:text-2xl font-semibold text-slate-600 dark:text-neutral-400 pt-2 text-center lg:text-left"
        >
          <TypeAnimation
            sequence={hero.role.flatMap((role) => [role, 1000])}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </motion.span>

        <motion.p
          {...animationProps}
          className="text-justify text-md lg:text-xl text-slate-500 dark:text-neutral-400 pt-2 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div {...animationProps} className="flex gap-3 mt-3">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-blue-950 dark:text-neutral-50 hover:text-blue-900 dark:hover:text-neutral-300 transition duration-300"
            >
              {iconMap[icon] || icon}
            </a>
          ))}
        </motion.div>

        <motion.div {...animationProps} className="flex gap-3 mt-4">
          <a
            href={hero.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-950 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition duration-300"
          >
            CV
          </a>
          <a
            href={hero.hire}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire Me"
            className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-neutral-50 px-4 py-2 rounded-lg shadow-md hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-300"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
