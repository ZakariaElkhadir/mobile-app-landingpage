"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If at the very top, clear active section
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const sectionIds = navItems.map((item) => item.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <motion.header
      className="2xl:px-31 flex items-center justify-between bg-bg-white px-8 py-3 lg:px-16 sticky top-0 z-50 transition-colors"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <nav className="flex flex-1 items-center">
        <motion.div className="logo" variants={itemVariants}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            loading="eager"
          />
        </motion.div>
        <motion.ul
          className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm"
          variants={containerVariants}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.li
                key={item.href}
                variants={itemVariants}
                className="relative"
              >
                <motion.a
                  href={item.href}
                  className={`relative z-10 block px-4 py-1.5 transition-colors ${
                    isActive
                      ? "text-text-vibrant font-medium"
                      : "text-text-nav-inactive hover:text-text-nav-active"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 rounded-full bg-selection-gray opacity-50"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <motion.button
          className="hidden sm:block rounded-[43px] bg-button px-5 py-2.5 text-sm text-button-text"
          variants={itemVariants}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Get the app
        </motion.button>
        <button 
          className="lg:hidden p-2 text-text-vibrant"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-bg-white border-b border-selection-gray lg:hidden overflow-hidden shadow-sm"
          >
            <ul className="flex flex-col px-8 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-text-nav-inactive hover:text-text-vibrant text-base py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-2 sm:hidden">
                <button className="w-full rounded-[43px] bg-button px-5 py-3 text-sm text-button-text font-medium text-center">
                  Get the app
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
