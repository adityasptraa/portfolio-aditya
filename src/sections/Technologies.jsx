import { motion } from "framer-motion";
import { technologies } from "../data";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { DiJavascript1, DiJqueryLogo } from "react-icons/di";
import {
  SiTailwindcss,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

export const iconMap = {
  FaHtml5,
  FaCss3Alt,
  DiJavascript1,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaReact,
  DiJqueryLogo,
  SiTailwindcss,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
};

const animationProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { y: 100, opacity: 0 },
  transition: { duration: 1 },
};

export default function TechnologiesSection() {
  return (
    <section className="p-10 sm:p-20 overflow-hidden" id="technologies">
      <div className="text-center">
        <motion.h2
          {...animationProps}
          className="text-3xl sm:text-5xl font-bold text-sky-700 dark:text-white mb-8"
        >
          Tech <span className="dark:text-sky-700">Stack</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-4 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7 lg:gap-7"
          {...animationProps}
        >
          {technologies.map((tech) => {
            const Icon = iconMap[tech.icon];
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-slate-200 dark:bg-slate-800 shadow-md rounded-lg"
              >
                <Icon className={`text-2xl sm:text-7xl mb-2 ${tech.color}`} />
                <p className="text-xs sm:text-base font-normal text-slate-600 dark:text-neutral-100">
                  {tech.name}
                </p>
                {tech.level === "learning" && (
                  <span className="mt-2 text-xs px-3 py-1 rounded-full bg-yellow-400 text-slate-800 dark:text-white dark:bg-yellow-600">
                    Learning
                  </span>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
