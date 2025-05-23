import { motion } from "framer-motion";
import udemy1 from "../assets/certificates/udemy1.jpg";
import udemy2 from "../assets/certificates/udemy2.jpg";
import web from "../assets/certificates/web-design.jpg";
import graphic from "../assets/certificates/graphic-design.jpg";
import bnsp from "../assets/certificates/bnsp.jpg";

const certificatesHor = [
  {
    id: 1,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    image: udemy1,
  },
  {
    id: 2,
    title: "The Web Developer Bootcamp 2025",
    issuer: "Udemy",
    image: udemy2,
  },
  {
    id: 3,
    title: "Web Design",
    issuer: "Computer Course Center",
    image: web,
  },
  {
    id: 4,
    title: "Graphic Design",
    issuer: "Computer Course Center",
    image: graphic,
  },
];

const certificatesVer = [
  {
    id: 1,
    title: "KKNI Level II in Expertise Competency of Software Engineering",
    issuer: "Indonesian Professional Certification Authority (BNSP)",
    image: bnsp,
  },
];

const animationProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { y: 50, opacity: 0 },
  transition: { duration: 1 },
};

const Certificates = () => {
  return (
    <section id="certificates" className="p-10 sm:p-20">
      <motion.div {...animationProps} className="max-w-6xl mx-auto text-center">
        <motion.h1
          {...animationProps}
          className="text-2xl sm:text-5xl font-bold text-sky-700 dark:text-neutral-50"
        >
          My <span className="dark:text-sky-700">Certificates</span>
          <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm pt-3 sm:pt-5 font-normal">
            Here are some certifications I’ve earned along the way.
          </p>
        </motion.h1>

        <motion.div {...animationProps} className="flex flex-col lg:flex-row">
          <motion.div {...animationProps} className="w-full pb-4 lg:pb-0 lg:w-4/12 lg:pe-4">
          {certificatesVer.map((cert) => (
            <motion.div
              key={cert.id}
              {...animationProps}
              className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain aspect-[3/4] bg-neutral-200 dark:bg-slate-900"
              />
              <div className="p-5 flex flex-col flex-1 justify-between h-full">
                <div>
                  <h3 className="text-sm lg:text-lg font-semibold min-h-[3rem]">
                    {cert.title}
                  </h3>
                  <p className="text-xs lg:text-md font-medium text-slate-700 dark:text-neutral-300 lg:pt-5">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
          <motion.div {...animationProps} className="grid gap-4 md:grid-cols-2 w-full lg:w-8/12">
            {certificatesHor.map((cert) => (
              <motion.div
                key={cert.id}
                {...animationProps}
                className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-contain aspect-video bg-neutral-200 dark:bg-slate-900 "
                />
                <div className="p-5 flex flex-col flex-1 justify-between h-full">
                  <div>
                    <h3 className="text-sm lg:text-lg font-semibold min-h-[3rem]">
                      {cert.title}
                    </h3>
                    <p className="text-xs lg:text-md font-medium text-slate-700 dark:text-neutral-300 lg:pt-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certificates;
