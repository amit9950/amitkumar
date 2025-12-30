import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import img4 from "../assets/img4.png"

/* ---------- Mobile Hook ---------- */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

/* ---------- Component ---------- */
export default function Projects() {
  const isMobile = useIsMobile();

  const projects = useMemo(
    () => [
      { 
        title: "NK Studio", 
        link: "", 
        image: img1,
        bgColor: "rgba(15, 23, 42, 0.95)", // Dark blue matching your site
        glowColor: "#3b82f6", // Blue glow
        tech: ["React", "Tailwind", "Node.js"]
      },
      { 
        title: "Food Delivery", 
        link: "", 
        image: img2,
        bgColor: "rgba(30, 41, 59, 0.95)", // Slightly lighter dark blue
        glowColor: "#8b5cf6", // Purple accent
        tech: ["React Native", "Strip", "MongoDB"]
      },
      { 
        title: "Hungry Tiger", 
        link: "", 
        image: img3,
        bgColor: "rgba(15, 23, 42, 0.95)", // Same as first
        glowColor: "#10b981", // Green accent
        tech: ["React.js", "MongoDB", "FastAPI"]
      },

       { 
        title: "Free Book Store", 
        link: "https://amit9950.github.io/PYQpolytechnic/", 
        image: img4,
        bgColor: "rgba(15, 23, 42, 0.95)", // Same as first
        glowColor: "#10b981", // Green accent
        tech: ["HTML", "CSS", "JavaScript" ,"BootStrap"]
      },
    ],
    []
  );

  return (
    <section 
      id="projects" 
      className="relative text-white py-20"
      style={{
        background: "#0f172a" // Your exact background color
      }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px),
                           linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Subtle animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building modern applications with clean code and smooth user experiences
          </p>
        </motion.div>

        <div className="container mx-auto px-4 flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Project Image */}
              <motion.div
                className="relative w-full lg:w-1/2 overflow-hidden rounded-2xl"
                whileHover={{ 
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[40vh] sm:h-[50vh] object-cover rounded-2xl"
                  />
                  {/* Gradient overlay matching your site style */}
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: `linear-gradient(0deg, rgba(15,23,42,0.9) 0%, transparent 50%)`,
                  }} />
                </div>
                
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: project.glowColor,
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>

              {/* Project Details */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{ 
                      backgroundColor: `${project.glowColor}20`,
                      border: `1px solid ${project.glowColor}40`
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.glowColor }} />
                    <span className="text-sm font-medium">Featured Project</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                   All project Based on Mern stack applications using React.js Express.js Node.js MongoDb  
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIdx) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: `${project.glowColor}15`,
                        color: project.glowColor,
                        border: `1px solid ${project.glowColor}30`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium"
                    style={{
                      backgroundColor: project.glowColor,
                      color: 'white'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Live
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium border border-gray-700 hover:border-blue-500 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}