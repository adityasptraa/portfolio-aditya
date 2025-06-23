import { motion } from "framer-motion";
import ticketMusica from "../assets/design/ticket-musica.jpg";
import certificateDesign from "../assets/design/sertif-design.jpg";
import ticketJamming from "../assets/design/ticket-jamming.jpg";
import posterJamming from "../assets/design/poster-jamming.jpg";
import merchDesign from "../assets/design/merch-design.jpg";
import nametagDesign from "../assets/design/nametag-design.jpg";

const dataDesign = [
  {
    id: 1,
    title: "Ticket Design",
    issuer: "Musica Holic Talkshow #5",
    image: ticketMusica,
  },
  {
    id: 2,
    title: "Certificate Design",
    issuer: "Musicaholic Talkshow #5",
    image: certificateDesign,
  },
  {
    id: 3,
    title: "Tiket Design",
    issuer: "Jamming Session #7",
    image: ticketJamming,
  },
  {
    id: 4,
    title: "Main Event Poster Design",
    issuer: "Jamming Session #7",
    image: posterJamming,
  },
  {
    id: 5,
    title: "Merch Design",
    issuer: "Musicaholic Talkshow #5",
    image: merchDesign,
  },
  {
    id: 6,
    title: "Nametag Design",
    issuer: "Musicaholic Talkshow #5",
    image: nametagDesign,
  },
];


const animationProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { y: 50, opacity: 0 },
  transition: { duration: 1 },
};

const Design = () => {
  return (
    <section id="design" className="p-10 sm:p-20">
      <motion.div {...animationProps} className="max-w-6xl mx-auto text-start">
        <motion.h1
          {...animationProps}
          className="text-2xl sm:text-5xl font-bold text-blue-950 dark:text-neutral-50"
        >
          My <span className="dark:text-sky-700">Design</span>
          <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm pt-3 sm:pt-5 font-normal">
            Here are some Design I’ve made for events, merchandise, and more.
          </p>
        </motion.h1>

        <motion.div {...animationProps} className="flex flex-col">
          <motion.div {...animationProps} className="grid gap-4 grid-cols-3 w-full">
            {dataDesign.map((design) => (
              <motion.div
                key={design.id}
                {...animationProps}
                className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full object-contain aspect-video bg-neutral-200 dark:bg-slate-900 "
                />
                <div className="p-5 flex flex-col flex-1 justify-between h-full">
                  <div>
                    <h3 className="text-sm lg:text-lg font-semibold min-h-[3rem]">
                      {design.title}
                    </h3>
                    <p className="text-xs lg:text-md font-medium text-slate-700 dark:text-neutral-300">
                      {design.issuer}
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

export default Design;
