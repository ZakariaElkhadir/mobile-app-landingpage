"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        cardsRef.current?.children || [],
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 max-w-[1200px] mx-auto flex flex-col items-center font-sans"
    >
      <h2
        ref={headingRef}
        className="text-5xl md:text-6xl font-medium tracking-tight text-text-vibrant mb-16 text-center"
      >
        People who
        <br />
        actually use it.
      </h2>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
      >
        <div className="w-full">
          <ReviewCard
            quote="I've tried every expense app. Snapense is the only one I've used past the first week — by a long way."
            name="Marcus L."
            role="Software Engineer, SF"
            avatarSrc="/Reviews/marcus.png"
          />
        </div>
        <div className="w-full">
          <ReviewCard
            quote="Finally, an app that doesn't make expense tracking feel like a chore. "
            name="Artem K."
            role="Product Designer, NY"
            avatarSrc="/Reviews/artem-kryzhaniv.jpg"
          />
        </div>
        <div className="w-full">
          <ReviewCard
            quote="I use it every single day. The insights I get from my spending habits have literally changed how I manage my finances."
            name="Daniel B."
            role="Freelancer, Austin"
            avatarSrc="/Reviews/daniel-bernard.jpg"
          />
        </div>
        <div className="w-full">
          <ReviewCard
            quote="Lightning fast, beautiful design, and perfectly syncs across all my devices. It's the standard all productivity apps should aim for."
            name="Roman H."
            role="Startup Founder, London"
            avatarSrc="/Reviews/roman-holos.jpg"
          />
        </div>
      </div>
    </section>
  );
}
