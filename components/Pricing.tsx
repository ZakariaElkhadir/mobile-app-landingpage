"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 px-6 max-w-[1200px] mx-auto flex flex-col items-center font-sans"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-text-vibrant mb-6">
          Simple.
          <br />
          No surprises.
        </h2>
        <p className="text-text-muted max-w-xl mx-auto text-base md:text-lg">
          Start free. Upgrade when you're ready. No trial cliffs, no feature
          paywalls on the basics. Cancel any time from settings.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Free Plan */}
        <motion.div
          variants={itemVariants}
          className="border border-selection-gray rounded-2xl p-8 flex flex-col bg-bg-white"
        >
          <div className="mb-6">
            <span className="inline-block bg-brand-blue text-white text-[11px] font-medium px-3 py-1 rounded-full">
              Free
            </span>
          </div>
          <div className="mb-6">
            <h3 className="text-text-nav-inactive text-sm mb-1">To get started</h3>
            <div className="text-[32px] font-normal text-text-vibrant leading-none">
              0$ <span className="text-lg text-text-nav-inactive">forever</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-selection-gray mb-6" />

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "30 expenses per month",
              "Camera capture",
              "3 spending categories",
              "Basic history view",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-center text-text-nav-inactive text-[15px]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-text-nav-inactive mr-4 shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full mt-auto border border-brand-blue text-brand-blue rounded-full py-3 text-sm font-medium hover:bg-brand-blue/5 transition-colors">
            Start for free
          </button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          variants={itemVariants}
          className="bg-[#1A85FF] rounded-2xl p-8 flex flex-col text-white shadow-lg"
        >
          <div className="mb-6">
            <span className="inline-block bg-white text-[#1A85FF] text-[11px] font-medium px-3 py-1 rounded-full">
              Pro – Most popular
            </span>
          </div>
          <div className="mb-6">
            <h3 className="text-blue-100 text-sm mb-1">For serious tracking</h3>
            <div className="text-[32px] font-normal leading-none">
              0$ <span className="text-lg text-blue-100">forever</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-blue-400/50 mb-6" />

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Unlimited expenses",
              "Camera + screenshot capture",
              "All categories + custom labels",
              "Bank drop alerts",
              "Weekly insights",
              "CSV export",
            ].map((feature, i) => (
              <li key={i} className="flex items-center text-white text-[15px]">
                <div className="w-1.5 h-1.5 rounded-full bg-white mr-4 shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full mt-auto bg-white text-[#1A85FF] rounded-full py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* Annual Plan */}
        <motion.div
          variants={itemVariants}
          className="border border-selection-gray rounded-2xl p-8 flex flex-col bg-bg-white"
        >
          <div className="mb-6">
            <span className="inline-block bg-brand-blue text-white text-[11px] font-medium px-3 py-1 rounded-full">
              Annual – Save 33%
            </span>
          </div>
          <div className="mb-6">
            <h3 className="text-text-nav-inactive text-sm mb-1">
              For committed savers
            </h3>
            <div className="text-[32px] font-normal text-text-vibrant leading-none flex items-baseline gap-1">
              4${" "}
              <span className="text-lg text-text-nav-inactive">
                per month - billed $48/yr
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-selection-gray mb-6" />

          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "30 expenses per month",
              "Camera capture",
              "3 spending categories",
              "Basic history view",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-center text-text-nav-inactive text-[15px]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-text-nav-inactive mr-4 shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>

          <button className="w-full mt-auto border border-brand-blue text-brand-blue rounded-full py-3 text-sm font-medium hover:bg-brand-blue/5 transition-colors">
            Get Annual
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;
