import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Replace these with your actual EmailJS credentials
  const EMAILJS_PUBLIC_KEY = "k1_FbZk1nusyvX2oS";
  const EMAILJS_SERVICE_ID = "service_kvia5ib";
  const EMAILJS_TEMPLATE_ID = "template_sr24jte";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "amitkumar@example.com",
      link: "mailto:amitkumar@example.com",
      color: "from-[#1cd8d2] to-[#00bf8f]"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+91 8650XXXXX",
      link: "tel:+919876543210",
      color: "from-[#00bf8f] to-[#302b63]"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Madhogtarh Jaluan , Up  India",
      link: "#",
      color: "from-[#302b63] to-[#1cd8d2]"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/amit-kumar-1509/",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/amit9950",
      label: "GitHub",
      color: "hover:text-[#333]"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/amitkumar_1509",
      label: "Twitter",
      color: "hover:text-[#1da1f2]"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative text-white py-24 overflow-hidden"
      style={{ backgroundColor: "black" }}
    >
      {/* Background effects - Hero section style */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <div 
          className="absolute -top-32 -left-32 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #04f067, #1c8d2f)',
            opacity: '0.2',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite',
          }}
        />
        
        <div 
          className="absolute -bottom-32 -right-32 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #00bf8f, #1c8d2f)',
            opacity: '0.2',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite 0.5s',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(28, 216, 210, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <span className="text-[#00bf8f] font-medium">Get In Touch</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text  text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
            }}
          >
            Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            {/* Contact cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  target={info.title === "Email" || info.title === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl group relative overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(0, 191, 143, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-br ${info.color}`} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{
                        background: 'rgba(0, 191, 143, 0.1)',
                        border: '1px solid rgba(0, 191, 143, 0.2)',
                      }}
                    >
                      <span className="text-[#00bf8f]">
                        {info.icon}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-[#00bf8f] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl relative group"
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'rgba(0, 191, 143, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `rgba(0, 191, 143, 0.1)`,
                      }}
                    />
                    <span className={`relative z-10 transition-colors ${social.color}`}>
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl relative"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Form glow effect */}
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-xl"
                style={{
                  background: 'conic-gradient(from 0deg, #00ffb9 0%, #00bf8f 25%, #302b63 100%)',
                }}
              />

              {/* Success message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg flex items-center gap-3"
                  style={{
                    background: 'rgba(0, 191, 143, 0.1)',
                    border: '1px solid rgba(0, 191, 143, 0.3)',
                  }}
                >
                  <FaCheck className="text-[#00bf8f]" />
                  <p className="text-[#00bf8f] font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg flex items-center gap-3"
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  }}
                >
                  <FaExclamationTriangle className="text-red-500" />
                  <p className="text-red-400 font-medium">{error}</p>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00bf8f] focus:ring-1 focus:ring-[#00bf8f] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00bf8f] focus:ring-1 focus:ring-[#00bf8f] transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00bf8f] focus:ring-1 focus:ring-[#00bf8f] transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#00bf8f] focus:ring-1 focus:ring-[#00bf8f] transition-all resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
                    boxShadow: '0 10px 30px rgba(0, 191, 143, 0.3)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button shine effect */}
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

                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  I'll respond to your message within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
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