import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { hero } from "../data";

const animationProps = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

export default function Hero() {
  const { darkMode } = useTheme();
  const profile = darkMode ? hero.imageProfileDark : hero.imageProfileLight;

  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 sm:px-16 py-10 sm:py-20 items-center"
    >
      {/* Left - Image */}
      <motion.div
        {...animationProps}
        className="flex justify-center"
      >
        <img
          src={profile}
          alt={`${hero.firstName} ${hero.lastName}`}
          className="rounded-xl lg:rounded-full w-60 lg:w-[450px] object-cover shadow-xl"
          style={{
            filter: darkMode
              ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
              : "drop-shadow(0 0 10px rgba(22,33,117,0.3))",
          }}
        />
      </motion.div>

      {/* Right - Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h1
          {...animationProps}
          className="text-3xl sm:text-5xl font-bold text-blue-950 dark:text-white"
        >
          {hero.firstName}{" "}
          <span className="dark:text-sky-600 text-blue-950">{hero.lastName}</span>
        </motion.h1>

        <motion.span
          {...animationProps}
          className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-neutral-400 mt-2"
        >
          <TypeAnimation
            sequence={hero.role.flatMap((role) => [role, 1500])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.span>

        <motion.p
          {...animationProps}
          className="text-md sm:text-lg text-slate-500 dark:text-neutral-400 mt-4 max-w-xl leading-relaxed"
        >
          {hero.description}
        </motion.p>

        
      </div>
    </section>
  );
}
