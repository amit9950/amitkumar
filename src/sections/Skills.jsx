import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,

  
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiAngular />, name: "Angular" },
   
  ];

  const repeated = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative w-full py-20 bg-black text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 text-center text-white/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Modern Technologies & Tools
      </motion.p>

      {/* Slider */}
      <div className="relative mt-12 w-full overflow-hidden">
        <motion.div
          className="flex gap-12 text-6xl text-[#1cd8d2]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-30"
              title={s.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="mt-2 text-sm text-white/80">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
