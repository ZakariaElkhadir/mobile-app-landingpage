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

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

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
      className="2xl:px-31 flex items-center justify-between bg-bg-white px-8 py-3 lg:px-16 sticky top-0 z-50"
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
          className="flex flex-1 items-center justify-center gap-8 text-sm"
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

      <motion.button
        className="rounded-[43px] bg-button px-5 py-2.5 text-sm text-button-text"
        variants={itemVariants}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        Get the app
      </motion.button>
    </motion.header>
  );
};

export default Header;
