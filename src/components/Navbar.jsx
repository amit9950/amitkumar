import React, { useEffect, useRef, useState } from 'react';
import OverlayMenu from './OverlayMenu';
import logo from '../assets/logo.png';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const hideTimer = useRef(null);

  /* ---------- FORCE VISIBLE ON HOME SECTION ---------- */
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setForceVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  /* ---------- SCROLL LOGIC ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (forceVisible) {
        setVisible(true);
        return;
      }

      // Scroll Down → Hide
      if (currentY > lastScrollY.current) {
        setVisible(false);
        clearTimeout(hideTimer.current);
      }
      // Scroll Up → Show + auto hide
      else {
        setVisible(true);
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 
        transition-transform duration-300 
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Amit Kumar
          </div>
        </div>

        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl"
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
