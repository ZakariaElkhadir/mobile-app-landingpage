"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  {
    value: 60,
    decimals: 0,
    suffix: " K+",
    label: "Downloads in first month",
  },
  {
    value: 4.7,
    decimals: 1,
    suffix: " s",
    label: "Avg. capture time",
  },
  {
    value: 4.8,
    decimals: 1,
    suffix: " ★",
    label: "Average App Store rating",
  },
  {
    value: 91,
    decimals: 0,
    suffix: "%",
    label: "Bank alert opt-in rate",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.45,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

const MetricSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const valueRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top 80%",
      once: true,
      onEnter: () => {
        metrics.forEach((metric, index) => {
          const valueEl = valueRefs.current[index];
          if (!valueEl) return;

          const counter = { value: 0 };

          gsap.to(counter, {
            value: metric.value,
            duration: 1.5,
            delay: index * 0.12,
            ease: "power2.out",
            onUpdate: () => {
              valueEl.textContent = `${counter.value.toFixed(metric.decimals)}${metric.suffix}`;
            },
          });
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-button py-14 text-button-text md:py-18 lg:py-24"
    >
      <motion.div
        className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-6 text-center sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-16 2xl:px-31"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="space-y-3"
            variants={itemVariants}
          >
            <p className="text-6xl font-light tracking-tight">
              <span
                ref={(el) => {
                  valueRefs.current[index] = el;
                }}
              >
                0{metric.suffix}
              </span>
            </p>
            <p className="text-xl font-light text-button-text/90">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MetricSection;
