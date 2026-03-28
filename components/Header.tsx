"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "#how-it-works", label: "How it works", isActive: true },
  { href: "#features", label: "Features", isActive: false },
  { href: "#pricing", label: "Pricing", isActive: false },
  { href: "#faq", label: "FAQ", isActive: false },
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
  return (
    <motion.header
      className="2xl:px-31 flex items-center justify-between bg-bg-white px-8 py-3 lg:px-16"
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
            {navItems.map((item) => (
              <motion.li key={item.href} variants={itemVariants}>
                <motion.a
                  href={item.href}
                  className={item.isActive ? "text-text-nav-active" : "text-text-nav-inactive"}
                  aria-current={item.isActive ? "page" : undefined}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              </motion.li>
            ))}
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