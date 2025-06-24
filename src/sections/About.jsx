import {aboutMe} from "../data";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { hero, socialLinks } from "../data";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";


const iconMap = {
  instagram: <FaInstagram size={25} />,
  linkedin: <FaLinkedin size={25} />,
  email: <FaEnvelope size={25} />,
};

const animationProps = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, delay: 0.7 },
};


export default function About() {
  const { darkMode } = useTheme();
  const aboutImage = darkMode ? aboutMe.imageAboutDark : aboutMe.imageAboutLight;
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 p-10 sm:p-20 overflow-hidden"
    >
      <div className="w-full flex flex-col items-center lg:items-start justify-center pt-5 lg:pt-0">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-5xl font-bold text-blue-950 dark:text-neutral-50"
        >
          About <span className="dark:text-sky-700">Me</span>
        </motion.h1>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full text-md lg:text-lg text-slate-700 dark:text-neutral-400 pt-2 text-justify"
        >
            {aboutMe.description}
        </motion.span>
        {/* Social Links */}
        <motion.div
          {...animationProps}
          className="flex gap-4 mt-5"
        >
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-blue-950 dark:text-neutral-50 hover:text-blue-700 dark:hover:text-sky-400 transition duration-300"
            >
              {iconMap[icon] || icon}
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          {...animationProps}
          className="flex gap-4 mt-6"
        >
          <a
            href={hero.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-950 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-900 transition"
          >
            Curriculum Vitae
          </a>
          <a
            href={hero.hire}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white px-5 py-2 rounded-lg shadow hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            My Contact
          </a>
        </motion.div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:items-end  pt-5 lg:pt-0">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          src={aboutImage}
          alt="Gus Wira"
          className="rounded-lg w-60 lg:w-[400px] object-cover shadow-lg"
          style={{
            filter: darkMode
              ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
              : "drop-shadow(0 0 10px rgba(22,33,117,0.3))",
          }}
        />
        
      </div>
    </section>
  );
}
