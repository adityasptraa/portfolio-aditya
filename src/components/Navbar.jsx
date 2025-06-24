import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
];

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      );
      const scrollY = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (
          section?.offsetTop &&
          section?.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActiveLink(navLinks[i].href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex justify-between items-center fixed top-0 left-0 w-full z-40 bg-stone-200/60 dark:bg-slate-950/60 backdrop-blur-md px-6 sm:px-10 lg:px-20 py-4"
      >
        <h1 className="text-2xl font-bold text-blue-800 dark:text-neutral-50">Aditya <span className="text-blue-950 dark:text-neutral-50"> Saputra</span></h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-md font-semibold items-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors ${
                  activeLink === href
                    ? "text-blue-950 dark:text-white border-b-2 border-spacing-y pb-1 border-blue-950 dark:border-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          {/* <li>
            <button
              onClick={toggleTheme}
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300
                ${darkMode ? "bg-slate-700" : "bg-amber-500"}`}
              aria-label="Toggle Dark Mode"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className="w-6 h-6 rounded-full flex items-center justify-center bg-white"
                style={{ marginLeft: darkMode ? "auto" : "0" }}
              >
                {darkMode ? (
                  <Moon size={14} className="text-slate-700" />
                ) : (
                  <Sun size={14} className="text-amber-500" />
                )}
              </motion.div>
            </button>
          </li> */}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* <button onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? <Moon size={22} className="text-neutral-50" /> : <Sun size={22} className="text-amber-500" />}
          </button> */}
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-xl z-50 flex flex-col items-center justify-center px-8"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-sky-700 dark:text-white"
            >
              <X size={28} />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg font-semibold text-center">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block transition-colors  ${
                      activeLink === href
                        ? "text-sky-700 dark:text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
