"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      className="mt-8 flex min-h-screen flex-col items-center text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        variants={fadeUpVariants}
        animate={{ y: [0, -12, 0] }}
        transition={{
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
          <Image
            src="/hero-image.png"
            alt="Hero Image"
            width={400}
            height={600}
            loading="eager"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 693px"
            priority
          />
      </motion.div>

      <motion.h2
        variants={fadeUpVariants}
        className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant"
      >
        Your money,
        <br /> captured instantly
      </motion.h2>

      <motion.p
        variants={fadeUpVariants}
        className="max-w-3xl text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted"
      >
        A capture-first expense tracker that turns the most painful moment in
        personal finance — logging a purchase — into a 5-second habit.
      </motion.p>

      <motion.div
        variants={fadeUpVariants}
        className="inline-flex items-center justify-center gap-4 p-1"
      >
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-[100px] bg-button px-8 py-3 text-button-text"
        >
          Download
        </motion.button>
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-[100px] border border-button bg-transparent px-8 py-3 text-button"
        >
          Features
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;