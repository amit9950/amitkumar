import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socialLinks = [
  {icone:FaXTwitter, url:"https://twitter.com/amitkumar_1509"},
  {icone:FaLinkedin, url:"https://www.linkedin.com/in/amit-kumar-1509/"},
  {icone:FaGithub, url:"https://github.com/amit9950"},

]

export default function Home() {
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
      "Junior PenetrationTester",
      "Bug Hunter",
        "Bug Bounty Hunter"
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentRole.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((v) => (v + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[40vw] h-[40vw] rounded-full bg-linear-to-r from-[#302b63] via-[#04f067] to-[#1c8d2f] opacity-20 blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1c8d2f] opacity-20 blur-[200px] animate-pulse delay-500" />
      </div>

      {/* Content - Mobile: Center, Desktop: Normal layout */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

        {/* LEFT SIDE — TEXT - Mobile: Center, Desktop: Left */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-20 lg:mt-0">

          {/* Typewriter */}
          <motion.div
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mt-30"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {roles[index].substring(0, subIndex)}
            <span
              className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
              style={{ height: "1.2em" }}
            />
          </motion.div>


          {/* Hello I'm */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello , I'm
          </motion.h1>

          {/* Name */}
          <span className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Amit Kumar
          </span>
         <motion.p
  className="
    mt-6
    text-sm sm:text-base md:text-lg lg:text-xl
    text-gray-300
    max-w-2xl
    leading-relaxed
    tracking-wide
    relative
  "
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
>
  <span className="text-emerald-400 font-medium">
    Full-stack web developer
  </span>{" "}
  who loves creating clean, responsive, and user-friendly applications.
  Along with development, I’m learning{" "}
  <span className="text-emerald-400 font-medium">
    web security & penetration testing
  </span>{" "}
  to build safer and more reliable digital experiences.
</motion.p>




         <motion.div
  className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.8 }}
>
  {/* Primary Button */}
  <a
    href="#project"
    className="px-7 py-3 rounded-full text-white font-semibold
    bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]
    shadow-lg shadow-[#00bf8f]/30
    hover:scale-105 hover:shadow-xl
    transition-all duration-300"
  >
    View My Work
  </a>

  {/* Secondary Button */}
  <a
    href="/Amit_Kumar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-7 py-3 rounded-full font-semibold
    border border-white/30 text-white
    backdrop-blur-md
    hover:bg-white/10 hover:scale-105
    transition-all duration-300"
  >
    My Resume
  </a>
</motion.div>
<div className="mt-10 flex gap-6 text-2xl md:text-3xl justify-center lg:justify-start" >
  {socialLinks.map(({icone:Icone, url}, idx) => (
    <a 
      key={idx}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icone className="text-white hover:text-[#00bf8f] transition-colors duration-300" />
    </a>
  ))}
</div>


        </div>

        {/* RIGHT SIDE - AVATAR (Only on Desktop) */}
        <div className="hidden lg:block">
          <div className="absolute top-1/2 -translate-y-1/2 right-10 pointer-events-none"
          style={{
            width:"min(22vw , 410px)",
            height:"min(40vh , 760px)",
            borderRadius:"50% ",
            filter:"blur(38px)", 
            opacity:"0.32",
            background:"conic-gradient(circle , #00ffb9 0% , #00bf8f 25% , #302b63 100%)"
          }}/>

          <motion.img 
            src={avator} 
            alt="Amit kumar" 
            className="absolute top-1/2 -translate-y-1/2 -right-7.5 object-contain select-none pointer-events-none"
            style={{
              width:"min(70vw , 750px)",
              maxHeight:"90vh",
            }}
            initial={{ opacity: 0, y: 40, scale:0.98 }}
            animate={{ opacity: 1, y: 0, scale:1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
        </div>

      </div>
    </section>
  );
}