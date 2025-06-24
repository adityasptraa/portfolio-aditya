import { motion } from "framer-motion";
import { allDesigns } from "../data/design";

const animationProps = {
  whileInView: { opacity: 1, y: 0 },
  initial: { y: 50, opacity: 0 },
  transition: { duration: 1 },
};

const Design = () => {
  return (
    <section id="design" className="p-10 sm:p-10 md:p-20">
      <motion.div {...animationProps} className="max-w-6xl mx-auto text-start">
        <motion.h1
          {...animationProps}
          className="text-2xl sm:text-5xl font-bold text-red-950 dark:text-neutral-50"
        >
          My <span className="dark:text-sky-700">Design</span>
          <p className="text-red-900 dark:text-gray-400 mb-5 text-sm pt-3 sm:pt-5 font-normal">
            Here are some Design I’ve made for events, merchandise, and more.
          </p>
        </motion.h1>

        <motion.div {...animationProps} className="flex flex-col">
          <motion.div {...animationProps} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {allDesigns.map((design) => (
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
                    <h3 className="text-sm lg:text-lg font-semibold min-h-[2rem]">
                      {design.title}
                    </h3>
                    <p className="text-xs lg:text-md font-medium text-slate-700 dark:text-neutral-300 pb-3">
                      {design.issuer}
                    </p>
                    <div className="flex pb-3">
                    <p className="text-xs px-2 py-1 rounded text-red-800 bg-slate-200">
                      {design.description}
                    </p>
                    </div>
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
