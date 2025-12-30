import React from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaCode,
  FaBrain,
  FaNetworkWired,
  FaCloud,
  FaDatabase,
  FaTools,
  FaCrown,
  FaStar,
  FaFire,
  FaBolt,
  FaMedal,
  FaTrophy,
  FaAward,
  FaCertificate,
  FaBook,
  FaUserGraduate,
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Education() {
  const academicJourney = [
    {
      phase: "FOUNDATION",
      title: "High School (12th Grade)",
      institution: "SIC Inter College, Jalesar",
      year: "2019-2021 & 2021-2023",
      description: "Science stream with focus on Mathematics & Physics, scoring 67%",
      icon: <FaGraduationCap />,
      color: "from-cyan-500 to-blue-500",
      progress: 100,
      highlights: ["Science Stream", "Mathematics Focus", "Physics Excellence"],
      score: "100%"
    },
    {
      phase: "CURRENT",
      title: "Diploma in Computer Science",
      institution: "Government Polytechnic Madhogarh Jalaun",
      year: "2023-2026",
      description: "Specializing in Web Development & Cybersecurity | CGPA: 8.2/10",
      icon: <FaCode />,
      color: "from-purple-500 to-pink-500",
      progress: 75,
      highlights: ["Web Development", "Cybersecurity", "Database Management", "Networking"],
      grades: [
        { semester: "Semester 1", cgpa: "7.8", grade: "B+" },
        { semester: "Semester 2", cgpa: "8.0", grade: "A" },
        { semester: "Semester 3", cgpa: "8.4", grade: "A" },
        { semester: "Semester 4", cgpa: "8.6", grade: "A+" }
      ],
      currentFocus: ["Final Year Project", "Advanced Web Security", "Cloud Computing"],
      score: "8.2 CGPA"
    },
    {
      phase: "CERTIFICATIONS",
      title: "Security Analyst & Web Developer",
      institution: "Skill India | Cisco | Relience ",
      year: "2023-2024",
      description: "Certified in Cybersecurity, Full Stack Development & Cloud Fundamentals",
      icon: <FaCertificate />,
      color: "from-orange-500 to-yellow-500",
      progress: 100,
      certifications: [
        { name: "Cybersecurity Essentials", issuer: "Cisco", year: "2024" },
        { name: "Web Development Bootcamp", issuer: "Udemy", year: "2023" },
        { name: "Cloud Fundamentals", issuer: "Relience", year: "2024" },
        { name: "Ethical Hacking Basics", issuer: "Skill India", year: "2024" }
      ]
    },
    {
      phase: "FUTURE GOAL",
      title: "B.Tech in Computer Science",
      institution: "Top Tier University",
      year: "2026 Onwards",
      description: "Aiming for specialization in Cybersecurity ",
      icon: <FaRocket />,
      color: "from-green-500 to-emerald-400",
      progress: 0,
      plans: [
        "Specialization in Cybersecurity",
        
        "Research Projects",
        "Industry Internships"
      ]
    }
  ];

  const technicalSkills = [
    { 
      category: "Frontend Development", 
      skills: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "🌀" }
      ],
      icon: <FaCode />
    },
    { 
      category: "Backend & Database", 
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Express.js", level: 82, icon: "⚡" },
        { name: "REST APIs", level: 85, icon: "🔗" }
      ],
      icon: <FaDatabase />
    },
    { 
      category: "Cybersecurity", 
      skills: [
        { name: "Network Security", level: 78, icon: "🛡️" },
        { name: "Ethical Hacking", level: 70, icon: "🎯" },
        { name: "Vulnerability Assessment", level: 72, icon: "🔍" },
        { name: "Cryptography", level: 68, icon: "🔐" }
      ],
      icon: <FaShieldAlt />
    },
    { 
      category: "Tools & Technologies", 
      skills: [
        { name: "Git/GitHub", level: 88, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Linux", level: 75, icon: "🐧" },
        { name: "Docker", level: 65, icon: "🐳" }
      ],
      icon: <FaTools />
    }
  ];

  const projects = [
    {
      title: "Secure Portfolio Website",
      description: "Built with React, Framer Motion, and advanced security features",
      tech: ["React", "Tailwind", "Framer Motion", "Security Headers"],
      status: "Completed",
      link: "#"
    },


     {
      title: "Food Delivery",
      description: "Built with React, Framer Motion, and advanced security features",
      tech: ["React", "Tailwind", "Framer Motion", "Security Headers" , "MongoDB" ,"Express js"],
      status: "Completed",
      link: "#"
    },


     {
      title: "Book Distrubation",
      description: "Built with React, Framer Motion, and advanced security features",
      tech: ["HTML" , "CSS ","javascript","Bootstrap"],
      status: "Completed",
      link: "https://amit9950.github.io/PYQpolytechnic/"
    },


    {
      title: "Cybersecurity Dashboard",
      description: "Real-time threat monitoring system for network security",
      tech: ["Node.js", "Socket.io", "React", "MongoDB"],
      status: "In Progress",
      link: "#"
    },
    {
      title: "E-commerce Security Plugin",
      description: "Security enhancement plugin for e-commerce platforms",
      tech: ["JavaScript", "PHP", "MySQL", "Security APIs"],
      status: "Planned",
      link: "#"
    }
  ];

  return (
    <section 
      id="education" 
      className="relative min-h-screen text-white overflow-hidden py-24"
      style={{ 
        backgroundColor: "#000000",
        backgroundImage: `
          radial-gradient(at 40% 20%, rgba(0, 191, 143, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(48, 43, 99, 0.15) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(28, 216, 210, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(147, 51, 234, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(28, 216, 210, 0.05) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(48, 43, 99, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 0%, rgba(0, 191, 143, 0.1) 0px, transparent 50%)
        `,
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Animated Background Elements - Matching your portfolio theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 143, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles matching your testimonial section */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5) % 70}%`,
              background: i % 3 === 0 ? '#00bf8f' : i % 3 === 1 ? '#302b63' : '#1cd8d2',
              opacity: 0.3,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Grid pattern similar to your other sections */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #00bf8f 1px, transparent 1px),
                            linear-gradient(to bottom, #00bf8f 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, rgba(0, 191, 143, 0.1), rgba(28, 216, 210, 0.05))'
                : 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(48, 43, 99, 0.05))',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
              filter: 'blur(20px)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 60 - 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section - Matching your testimonial section style */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            <span className="text-[#00bf8f] font-medium">Academic Journey</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
            }}
          >
            Education & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building technical expertise through structured learning and practical experience
          </p>
        </motion.div>

        {/* Academic Timeline - Card style matching testimonials */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {academicJourney.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8 rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Card glow effect matching testimonials */}
                  <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                    style={{
                      background: 'conic-gradient(from 0deg, #00ffb9 0%, #00bf8f 25%, #302b63 100%)',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Phase and Year */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        item.phase === "FOUNDATION" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                        item.phase === "CURRENT" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                        item.phase === "CERTIFICATIONS" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                        "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}>
                        {item.phase}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm">{item.year}</span>
                      </div>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-linear-to-br ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <FaMapMarkerAlt className="text-sm" />
                          <span>{item.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="font-bold text-[#00bf8f]">{item.score || `${item.progress}% Complete`}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full rounded-full bg-linear-to-r ${item.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section - Matching style */}
        <div className="max-w-7xl mx-auto mb-32">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
              }}
            >
              Technical Skills Matrix
            </h2>
            <p className="text-gray-400">Comprehensive overview of technical competencies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(0, 191, 143, 0.3)',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-linear-to-br from-[#00bf8f]/20 to-[#302b63]/20">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#00bf8f] font-bold">{skill.level}%</span>
                          {skill.level >= 80 && <FaStar className="text-yellow-500 text-xs" />}
                        </div>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects & Goals Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Projects */}
            <motion.div
              className="lg:col-span-2 p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-linear-to-br from-orange-500 to-yellow-500">
                  <FaRocket />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Current & Upcoming Projects</h3>
                  <p className="text-gray-400">Practical implementation of skills</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-white/10 hover:border-[#00bf8f]/30 transition-all group bg-black/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg group-hover:text-[#00bf8f] transition-colors">
                        {project.title}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === "Completed" ? "bg-green-500/20 text-green-400" :
                        project.status === "In Progress" ? "bg-blue-500/20 text-blue-400" :
                        "bg-purple-500/20 text-purple-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Future Goals */}
            <motion.div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-linear-to-br from-green-500 to-emerald-400">
                  <FaTrophy />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Career Roadmap</h3>
                  <p className="text-gray-400">2023 - 2029 Goals</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { year: "2026", goals: ["Complete Under Graducation", "Build Portfolio", "Learn Advanced React"] },
                  { year: "2026", goals: ["Start B.Tech", "Get Internship", "Contribute to Open Source"] },
                  { year: "2027", goals: ["Specialize in Cybersecurity", "Publish Research", "Build Network"] },
                  { year: "2029", goals: ["Graduate with Honors", "Secure Job", "Start Mentoring"] }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-linear-to-r from-[#00bf8f] to-[#1cd8d2]" />
                    <div className="mb-2">
                      <span className="font-bold text-[#00bf8f]">{item.year}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.goals.map((goal, goalIdx) => (
                        <li key={goalIdx} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00bf8f]/50" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Final CTA - Matching testimonial section style */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full backdrop-blur-md"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(0, 191, 143, 0.3)',
            }}
          >
            <FaBolt className="text-yellow-400 animate-pulse text-xl" />
            <span className="text-lg">
              Under Graduation: <span className="text-[#00bf8f] font-bold">June 2026</span> | Target CGPA: 75%+
            </span>
            <FaFire className="text-orange-500 animate-pulse text-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}