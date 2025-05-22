import {aboutMe} from "../data";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";


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
          className="text-2xl sm:text-5xl font-bold text-sky-700 dark:text-neutral-50"
        >
          About <span className="dark:text-sky-700">Me</span>
        </motion.h1>

        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full text-md lg:text-lg text-slate-500 dark:text-neutral-400 pt-2 text-justify"
        >
            {aboutMe.description}
        </motion.span>
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
