import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experiences = [
  {
    role: "Inter",
    company: "EuCoder's Techcnologies Pvt",
    duration: "2024",
    description: "Built responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with backend teams to integrate REST APIs and improved application performance by 40%.",
    technologies: ["React", "TypeScript", "Tailwind", "Redux"],
    location: "Lucknow",
    icon: "💻"
  },
  {
    role: "Web Developer Intern",
    company: "Tech Solutions Inc.",
    duration: "2022 - 2023",
    description: "Developed and maintained client websites, implemented responsive designs, and optimized web performance. Contributed to a team project that increased user engagement by 25%.",
    technologies: ["JavaScript", "CSS3", "HTML5", "Node.js"],
    location: "New Delhi",
    icon: "🚀"
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2021 - 2022",
    description: "Created custom websites for small businesses, implemented SEO best practices, and provided maintenance services. Delivered 15+ projects with 100% client satisfaction.",
    technologies: ["React", "Firebase", "Bootstrap", "Git"],
    location: "Remote",
    icon: "🌟"
  }
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [idx % 2 === 0 ? 50 : -50, 0]);

  return (
    <motion.div
      className="relative group"
      style={{ scale, opacity, y }}
    >
      <div className="relative">
        {/* Card glow effect - Hero section style */}
        <div className="absolute -inset-4 rounded-3xl opacity-30 blur-xl"
          style={{
            background: 'conic-gradient(from 0deg, #00ffb9 0%, #00bf8f 25%, #302b63 100%)',
          }}
        />

        {/* Main card */}
        <motion.div 
          className="relative p-8 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          }}
          whileHover={{ 
            scale: 1.02,
            borderColor: 'rgba(0, 191, 143, 0.3)',
            boxShadow: '0 30px 80px rgba(0, 191, 143, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Top gradient border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#00bf8f] to-transparent opacity-50" />

          {/* Icon with hero section colors */}
          <motion.div 
            className="absolute -top-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(28, 216, 210, 0.2), rgba(0, 191, 143, 0.1))',
              border: '1px solid rgba(0, 191, 143, 0.3)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span>{exp.icon}</span>
          </motion.div>

          {/* Header */}
          <div className="mb-6">
            {/* Role badge with hero colors */}
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                background: 'linear-gradient(90deg, rgba(28, 216, 210, 0.2), rgba(0, 191, 143, 0.1))',
                border: '1px solid rgba(0, 191, 143, 0.3)',
                color: '#00bf8f',
              }}
              whileHover={{ scale: 1.05 }}
            >
              {exp.role}
            </motion.span>

            {/* Company and duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <motion.span 
                className="px-4 py-2 rounded-lg mt-3 sm:mt-0"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(0, 191, 143, 0.2)',
                  color: '#00bf8f',
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(0, 191, 143, 0.4)',
                }}
              >
                <span className="text-sm font-medium">{exp.duration}</span>
              </motion.span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {exp.description}
          </p>

          {/* Technologies with hero colors */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Technologies Used
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIdx) => (
                <motion.span 
                  key={techIdx}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium relative overflow-hidden group/tech"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(0, 191, 143, 0.2)',
                    color: '#e2e8f0',
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(0, 191, 143, 0.4)',
                    color: '#00bf8f',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">{tech}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/40 to-transparent pointer-events-none rounded-b-2xl" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="experience" 
      className="relative text-white py-24 overflow-hidden"
      style={{
        backgroundColor: "black" // Hero section जैसा black
      }}
    >
      {/* Hero section जैसे background effects */}
      <div className="absolute inset-0">
        {/* Top Left Blob - Hero section style */}
        <div 
          className="absolute -top-32 -left-32 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #04f067, #1c8d2f)',
            opacity: '0.2',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite',
          }}
        />
        
        {/* Bottom Right Blob - Hero section style */}
        <div 
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #00bf8f, #1c8d2f)',
            opacity: '0.2',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite 0.5s',
          }}
        />

        {/* Additional subtle glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 191, 143, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(48, 43, 99, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header with hero colors */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge with hero gradient */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-md"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 191, 143, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                background: 'linear-gradient(45deg, #1cd8d2, #00bf8f)',
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-[#00bf8f] font-medium">Professional Journey</span>
          </motion.div>
          
          {/* Title with hero gradient */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text  text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
            }}
          >
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
           Hey everyone welcome to our experience section I have put some data dummy here to make the portfolio look beautiful.
          </p>
        </motion.div>

        {/* Experiences container */}
        <div ref={containerRef} className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {Experiences.map((exp, idx) => {
              const start = idx / Experiences.length;
              const end = (idx + 1) / Experiences.length;
              
              return (
                <div key={idx} className="relative">
                  {/* Timeline connector with hero colors */}
                  {idx < Experiences.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-full h-20 w-1 transform -translate-x-1/2"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0, 191, 143, 0.3), transparent)',
                      }}
                    />
                  )}
                  
                  <ExperienceItem
                    exp={exp}
                    idx={idx}
                    start={start}
                    end={end}
                    scrollYProgress={scrollYProgress}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA button with hero style */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium overflow-hidden relative group"
            style={{
              background: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
              boxShadow: '0 10px 30px rgba(0, 191, 143, 0.3)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(0, 191, 143, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
           <a  href="Amit_kumar_Resume.pdf">  <span className="relative z-10" >  Download Resume</span> </a>
          </motion.a>
        </motion.div>
      </div>

      {/* Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}