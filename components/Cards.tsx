"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const featureCards = [
  {
    imageSrc: "/cards/image-card1.png",
    darkImageSrc: "/cards/image-card1-dark.png",
    imageAlt: "Phone lock screen with Snapense balance drop alert",
    title: "Bank Drop Alerts",
    description:
      "Balance drops the instant you pay. We're there before you forget.",
    tag: "Never miss a spend",
  },
  {
    imageSrc: "/cards/image-card2.png",
    darkImageSrc: "/cards/image-card2-dark.png",
    imageAlt: "Snapense spending categories and merchant list",
    title: "Spending breakdown",
    description:
      "Auto-grouped by merchant, category, and recurring spend patterns.",
    tag: "Auto-built",
  },
  {
    imageSrc: "/cards/image-card3.png",
    imageAlt: "Camera view finding and locking onto a receipt",
    title: "Camera-first capture",
    description: "Locks on any receipt in real time.",
    tag: "Auto-lock",
  },
];

const showcaseCards = [
  {
    title: "Customisable category system",
    description:
      "Build a label architecture that matches how you actually think about money. Auto-assigned, fully editable, learns as you log.",
    imageSrc: "/cards/apps.png",
    darkImageSrc: "/cards/apps-dark.png",
    imageAlt: "Customizable spending labels grid preview",
  },
  {
    title: "Under five seconds",
    description:
      "Tap the shutter. Snapense reads the receipt, fills in the details, and saves the expense. Done before you've put your wallet away.",
    imageSrc: "/cards/right-iphone.png",
    darkImageSrc: "/cards/right-iphone-dark.png",
    imageAlt: "Snapense app preview on iPhone frame",
  },
];

const Cards = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-feature-card]");

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 52 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-cards-grid]",
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="px-4 py-18 md:px-8 md:py-24 lg:px-16 2xl:px-31 2xl:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant">
            Built around
            <br />
            your habit.
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted">
            No feature exists for its own sake. Every decision was made to make
            logging so fast and automatic you never skip it again.
          </p>
        </motion.div>

        <div
          className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3"
          data-cards-grid
        >
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              data-feature-card
              className="rounded-2xl border border-selection-gray bg-bg-white p-4 md:p-5"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={mounted && resolvedTheme === "dark" && (card as any).darkImageSrc ? (card as any).darkImageSrc : card.imageSrc}
                  alt={card.imageAlt}
                  width={1200}
                  height={900}
                  className={`h-auto w-full object-cover transition-opacity duration-300 ${index === 1 ? "scale-[1.05] -translate-x-[3%]" : ""}`}
                  data-card-media
                />
              </div>

              <h3 className="mt-5 text-[24px] leading-normal font-medium text-[#606060]">
                {card.title}
              </h3>

              <p className="mt-3 text-base leading-normal font-normal text-[#606060]">
                {card.description}
              </p>

              <motion.span className="mt-5 inline-flex rounded-full bg-button px-4 py-2 text-sm text-button-text md:px-5 md:py-2.5 md:text-base">
                {card.tag}
              </motion.span>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 grid max-w-screen-2xl gap-6 lg:grid-cols-2" suppressHydrationWarning>
        {showcaseCards.map((card) => (
          <motion.article
            key={card.title}
            data-feature-card
            className="rounded-2xl border border-selection-gray bg-bg-white p-4 md:p-5"
          >
            <h3 className="text-[24px] leading-normal font-medium text-[#606060]">
              {card.title}
            </h3>
            <p className="mt-3 text-base leading-normal font-normal text-[#606060]">
              {card.description}
            </p>

            <div className="mt-5" suppressHydrationWarning>
              <Image
                src={mounted && resolvedTheme === "dark" && (card as any).darkImageSrc ? (card as any).darkImageSrc : card.imageSrc}
                alt={card.imageAlt}
                width={1600}
                height={1000}
                className="h-auto w-full object-contain transition-opacity duration-300"
                data-card-media
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Cards;
