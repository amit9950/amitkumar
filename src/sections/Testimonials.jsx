import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import som from "../assets/som.jpeg";
import karan from "../assets/karan.jpeg";
import gopal from "../assets/gopal.jpeg";
import guddu from "../assets/guddu.jpeg";

import { 
  FaStar, 
  FaQuoteLeft, 
  FaChevronLeft, 
  FaChevronRight,
  FaLinkedin,
  FaTwitter,
  FaGlobe
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Som Sharma",
    role: "Senior Developer at TechCorp",
    review: "Amit's coding skills are exceptional. He implemented complex features with clean, maintainable code that our team still benefits from.",
    rating: 5,
    company: "TechCorp",
    image: som,
    social: {
      linkedin: "",
      twitter: "",
      website: ""
    }
  },
  {
    id: 2,
    name: "Karan Verma",
    role: "Project Manager at InnovateX",
    review: "Working with Amit was a game-changer for our project. His attention to detail and problem-solving approach delivered results beyond expectations.",
    rating: 5,
    company: "InnovateX",
    image: karan,
    social: {
      linkedin: "",
      twitter: "",
      website: ""
    }
  },
  {
    id: 3,
    name: "Gopal Prajapti",
    role: "CTO at DigitalWave",
    review: "Amit's expertise in modern web technologies helped us build a scalable platform. His code is production-ready and well-documented.",
    rating: 4,
    company: "DigitalWave",
    image: gopal,
    social: {
      linkedin: "",
      twitter: "",
      website: ""
    }
  },
  {
    id: 4,
    name: "Guddu Shakywar",
    role: "Lead Designer at CreativeHub",
    review: "A collaborative partner who understands the design-to-development workflow perfectly. His implementation of our designs was pixel-perfect.",
    rating: 5,
    company: "CreativeHub",
    image: guddu,
    social: {
      linkedin: "",
      twitter: "",
      website: ""
    }
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-700'}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <motion.div
      className={`p-8 rounded-2xl relative overflow-hidden ${
        isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
      } transition-all duration-300`}
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      }}
      whileHover={{ 
        scale: isActive ? 1.02 : 0.97,
        borderColor: 'rgba(0, 191, 143, 0.3)',
      }}
    >
      {/* Card glow effect */}
      <div className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
        style={{
          background: 'conic-gradient(from 0deg, #00ffb9 0%, #00bf8f 25%, #302b63 100%)',
        }}
      />

      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-4xl opacity-20">
        <FaQuoteLeft />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Review text */}
        <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">
          "{testimonial.review}"
        </p>

        {/* Reviewer info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00bf8f]/30">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
                }}
              />
            </div>
            {/* Avatar glow */}
            <div className="absolute -inset-2 rounded-full bg-[#00bf8f]/20 blur-md" />
          </div>

          {/* Name and role */}
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            <p className="text-[#00bf8f] text-sm font-medium">{testimonial.company}</p>
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            {testimonial.social.linkedin && (
              <a
                href={testimonial.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00bf8f]/20 transition-colors"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                aria-label={`${testimonial.name}'s LinkedIn`}
              >
                <FaLinkedin className="text-sm hover:text-[#0077b5] transition-colors" />
              </a>
            )}
            {testimonial.social.twitter && (
              <a
                href={testimonial.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00bf8f]/20 transition-colors"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                aria-label={`${testimonial.name}'s Twitter`}
              >
                <FaTwitter className="text-sm hover:text-[#1da1f2] transition-colors" />
              </a>
            )}
            {testimonial.social.website && (
              <a
                href={testimonial.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#00bf8f]/20 transition-colors"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                aria-label={`${testimonial.name}'s Website`}
              >
                <FaGlobe className="text-sm hover:text-[#00bf8f] transition-colors" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      className="relative text-white py-24 overflow-hidden"
      style={{ backgroundColor: "black" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <div 
          className="absolute -top-32 left-1/4 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #04f067, #1c8d2f)',
            opacity: '0.15',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite',
          }}
        />
        
        <div 
          className="absolute -bottom-32 right-1/4 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'linear-gradient(to right, #302b63, #00bf8f, #1c8d2f)',
            opacity: '0.15',
            filter: 'blur(200px)',
            animation: 'pulse 4s infinite 0.5s',
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00bf8f]"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
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
            <span className="text-[#00bf8f] font-medium">Friends & Colleagues</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f, #302b63)',
            }}
          >
            What My Friends Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from people who've worked closely with me
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-6xl mx-auto">
          {/* Main testimonial display - shows only active testimonial */}
          <div className="mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard 
                  testimonial={testimonials[activeIndex]} 
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {/* Previous button */}
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center relative group"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ 
                scale: 1.1,
                borderColor: 'rgba(0, 191, 143, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'rgba(0, 191, 143, 0.1)',
                }}
              />
              <FaChevronLeft className="relative z-10 text-lg group-hover:text-[#00bf8f] transition-colors" />
            </motion.button>

            {/* Indicators with friend photos */}
            <div className="flex gap-3">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to ${testimonial.name}'s testimonial`}
                >
                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                    index === activeIndex 
                      ? 'border-[#00bf8f] scale-110' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face";
                      }}
                    />
                  </div>
                  {index === activeIndex && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border border-[#00bf8f]/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center relative group"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{ 
                scale: 1.1,
                borderColor: 'rgba(0, 191, 143, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'rgba(0, 191, 143, 0.1)',
                }}
              />
              <FaChevronRight className="relative z-10 text-lg group-hover:text-[#00bf8f] transition-colors" />
            </motion.button>
          </div>

          {/* Small preview cards for all testimonials - हमेशा 4 दिखेंगे */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-linear-to-br from-[#00bf8f]/20 to-[#302b63]/20 border border-[#00bf8f]/30' 
                    : 'bg-black/30 border border-gray-800/50 hover:border-[#00bf8f]/20'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => goToTestimonial(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00bf8f]/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {index === activeIndex && (
                      <div className="absolute -inset-1 rounded-full border border-[#00bf8f] animate-pulse" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.role.split(' at ')[0]}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 text-xs" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Friends grid showcase - Simplified version */}
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {testimonials.map((friend, index) => (
            <motion.div
              key={friend.id}
              className="text-center group"
              whileHover={{ y: -5 }}
              onClick={() => goToTestimonial(index)}
            >
              <div className="relative inline-block mb-3">
                <div className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-colors mx-auto ${
                  index === activeIndex 
                    ? 'border-[#00bf8f]' 
                    : 'border-gray-800 group-hover:border-[#00bf8f]'
                }`}>
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face";
                    }}
                  />
                </div>
                <div className={`absolute -inset-2 rounded-full blur-md transition-opacity ${
                  index === activeIndex 
                    ? 'bg-[#00bf8f]/20 opacity-100' 
                    : 'bg-[#00bf8f]/20 opacity-0 group-hover:opacity-100'
                }`} />
              </div>
              <h4 className={`font-medium transition-colors ${
                index === activeIndex ? 'text-[#00bf8f]' : 'text-white'
              }`}>
                {friend.name}
              </h4>
              <p className="text-sm text-gray-500">{friend.role.split(' at ')[0]}</p>
              {index === activeIndex && (
                <motion.div
                  className="h-0.5 w-8 bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] mx-auto mt-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </section>
  );
}