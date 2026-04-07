"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center py-4 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={400}
          height={600}
          loading="eager"
          priority
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 693px"
          className="h-[35vh] md:h-[40vh] w-auto object-contain mx-auto"
        />
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant mt-2"
      >
        Your money,
        <br /> captured instantly
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="max-w-3xl text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted mt-2"
      >
        A capture-first expense tracker that turns the most painful moment in
        personal finance — logging a purchase — into a 5-second habit.
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center justify-center gap-4 p-1 mt-4"
      >
        <button className="rounded-[100px] bg-button px-8 py-3 text-button-text hover:bg-button/90 transition-colors">
          Download
        </button>
        <button className="rounded-[100px] border border-button bg-transparent px-8 py-3 text-button hover:bg-button/5 transition-colors">
          Features
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
