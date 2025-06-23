import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 pt-14 pb-6 mt-20 text-center text-gray-700 dark:text-gray-400 w-screen">
      <div className="container mx-auto px-4">
        {/* Get in Touch Section */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h3>
        <p className="max-w-xl mx-auto mb-6 text-sm">
          I'm open to collaboration, internship opportunities, or just a friendly tech talk. Feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-6 text-xl text-blue-950 dark:text-blue-400">
          <a href="mailto:aditya1609saputra@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/adityaasptraa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/adityaasptraa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#technologies" className="hover:underline">Technologies</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#design" className="hover:underline">Design</a>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Aditya Saputra Portfolio | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
