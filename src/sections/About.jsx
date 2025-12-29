import { motion } from "framer-motion";
import p from "../assets/p.jpg";
import { FaReact, FaNodeJs, FaShield } from "react-icons/fa6";


export default function About() {
  const stats = [
    { label: "Experience", value: "Fresher" },
    { label: "Speciality", value: "Full Stack" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center"
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        {/* TOP SECTION */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* IMAGE */}
          <motion.div
            className="relative w-60 h-70 md:w-65 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#1cd8d2]/30 bg-linear-to-r from-[#1cd8d2]/20 to-[#302b63]/20"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img
              src={p}
              alt="Amit Kumar"
              className="absolute inset-0 w-full h-full object-cover object-top scale-[1.05] translate-y-[-2%]"
            />
          </motion.div>

          {/* TEXT + STATS */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] to-[#00bf8f]">
              Amit Kumar
            </h2>

            <p className="mt-2 text-lg text-white/90 font-semibold">
              Full Stack Developer & Junior Penetration Tester
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I’m a Full Stack Developer learning Junior Penetration Testing,
              focused on building secure, modern web applications.
            </p>

            {/* STATS */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* ABOUT ME CARD */}
        <motion.div
          className="relative mt-20 max-w-4xl mx-auto p-8 rounded-3xl bg-linear-to-r from-[#1cd8d2]/10 via-[#00bf8f]/10 to-[#302b63]/10 shadow-2xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glowing circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#1cd8d2]/20 blur-3xl animate-pulse pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-[#302b63]/20 blur-3xl animate-pulse pointer-events-none"></div>

          <h3 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
            About Me
          </h3>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-4">
            I build modern, responsive web applications with a strong focus on
            performance, clean code, and smooth user experiences.
          </p>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-6">
            Alongside development, I’m learning penetration testing to understand
            web security, identify vulnerabilities, and create safer applications.
          </p>

          {/* Skills / Icons */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <FaReact className="text-[#61dafb] text-4xl mb-2" />
              <span className="text-white/90 font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
              <FaNodeJs className="text-[#68a063] text-4xl mb-2" />
              <span className="text-white/90 font-semibold">Node.js</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
             <FaShield className="text-[#00bf8f] text-4xl mb-2" />
<span className="text-white/90 font-semibold">Security</span>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
