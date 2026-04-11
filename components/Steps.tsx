"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Point your camera",
    description:
      "Open Snapense and aim at any receipt, price tag, or invoice. The viewfinder auto-locks onto document edges in real time.",
  },
  {
    id: "02",
    title: "We extract everything",
    description:
      "OCR reads merchant name, total, and date in under two seconds. The confirm screen arrives pre-filled. Nothing to type.",
  },
  {
    id: "03",
    title: "One tap to save",
    description:
      "Hit confirm. The expense is logged, categorised, and instantly visible in your spending breakdown. Done in under five seconds.",
  },
];

const stepPanels = [
  {
    id: "step-1",
    activeStep: "01",
    imageSrc: "/step1/step1-image.png",
    imageAlt: "Snapense step one preview",
  },
  {
    id: "step-2",
    activeStep: "02",
    imageSrc: "/step2/step2-image.png",
    imageAlt: "Snapense step two preview",
  },
  {
    id: "step-3",
    activeStep: "03",
    imageSrc: "/step3/step3-image.png",
    imageAlt: "Snapense step three preview",
  },
];

const Steps = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isMobile, isTablet } = context.conditions as {
          isMobile?: boolean;
          isTablet?: boolean;
          isDesktop?: boolean;
        };

        if (!trackRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>(
          trackRef.current.querySelectorAll("[data-step-panel]"),
        );

        if (panels.length < 2) return;

        const yOffset = isMobile ? 30 : isTablet ? 45 : 60;
        const xOffset = isMobile ? 10 : 20;
        const scrollDistance = isMobile ? 450 : isTablet ? 600 : 800;
        const startOffset = isMobile ? "top 12%" : "top 18%";

        panels.forEach((panel, i) => {
          const img = panel.querySelector("img");
          const activeBox = panel.querySelector(".bg-button");

          if (i !== 0) {
            gsap.set(panel, { autoAlpha: 0, zIndex: 1, pointerEvents: "none" });
            if (img) gsap.set(img, { y: yOffset, scale: isMobile ? 1.05 : 1.1 });
            if (activeBox) gsap.set(activeBox, { x: xOffset, autoAlpha: 0 });
          } else {
            gsap.set(panel, { autoAlpha: 1, zIndex: 10, pointerEvents: "auto" });
            if (img) gsap.set(img, { y: 0, scale: 1 });
            if (activeBox) gsap.set(activeBox, { x: 0, autoAlpha: 1 });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: trackRef.current,
            start: startOffset,
            end: `+=${panels.length * scrollDistance}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        for (let index = 1; index < panels.length; index += 1) {
          const prevPanel = panels[index - 1];
          const nextPanel = panels[index];
          const prevImg = prevPanel.querySelector("img");
          const nextImg = nextPanel.querySelector("img");
          const nextBox = nextPanel.querySelector(".bg-button");

          tl.to(
            prevPanel,
            {
              autoAlpha: 0,
              zIndex: 1,
              pointerEvents: "none",
              duration: 0.8,
              ease: "power2.inOut",
            },
            index,
          )
            .to(
              prevImg,
              { y: -yOffset, scale: isMobile ? 1.02 : 1.05, duration: 0.8, ease: "power2.inOut" },
              index,
            )
            .to(
              nextPanel,
              {
                autoAlpha: 1,
                zIndex: 10,
                pointerEvents: "auto",
                duration: 0.8,
                ease: "power2.inOut",
              },
              index,
            )
            .to(
              nextImg,
              { y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
              index,
            )
            .to(
              nextBox,
              { x: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
              index,
            );
        }

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      className="px-4 py-12 md:px-8 md:py-16 lg:px-16 2xl:px-31 2xl:py-24"
    >
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-(length:--font-size-h2) leading-(--line-height-h2) text-text-vibrant">
            Three steps.
            <br />
            That's all.
          </h2>
          <p className="max-w-3xl text-(length:--font-size-paragraph) leading-(--line-height-paragraph) text-text-muted">
            Every other expense app makes you do the work. We flipped it.
            Snapense reads, fills, and categorises. You just confirm.
          </p>
        </motion.div>

        <motion.div
          ref={trackRef}
          className="relative mt-10 min-h-140 lg:mt-12"
          data-steps-track
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
        >
          {stepPanels.map((panel, panelIndex) => {
            const isVisible = panelIndex === 0;

            return (
              <article
                key={panel.id}
                data-step-panel
                data-step-index={panelIndex}
                className={`grid gap-12 lg:gap-4 lg:grid-cols-2 lg:items-stretch ${
                  isVisible
                    ? "relative z-10"
                    : "pointer-events-none absolute inset-0 z-0 opacity-0"
                }`}
              >
                <div className="space-y-3 md:space-y-4">
                  {steps.map((step) => {
                    const isActive = step.id === panel.activeStep;

                    return (
                      <div
                        key={step.id}
                        className={
                          isActive
                            ? "rounded-xl bg-button px-4 py-5 text-button-text md:px-5"
                            : "rounded-xl border border-selection-gray bg-bg-white px-4 py-6 md:px-5"
                        }
                      >
                        <div
                          className={
                            isActive
                              ? "flex items-start gap-3"
                              : "flex items-center gap-3"
                          }
                        >
                          <span
                            className={
                              isActive
                                ? "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-[#2D5BE3]"
                                : "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-selection-gray text-xs font-medium text-text-muted"
                            }
                          >
                            {step.id}
                          </span>
                          <div>
                            <h3
                              className={
                                isActive
                                  ? "text-xl leading-snug"
                                  : "text-xl leading-snug text-text-nav-active"
                              }
                            >
                              {step.title}
                            </h3>
                            {isActive ? (
                              <p className="mt-2 text-sm leading-relaxed text-button-text/85">
                                {step.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={panel.imageSrc}
                    alt={panel.imageAlt}
                    width={989}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
