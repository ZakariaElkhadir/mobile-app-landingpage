"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".cta-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#208AFF] py-32 px-6 flex flex-col items-center justify-center font-sans text-center text-white overflow-hidden mt-16"
    >
      <div className="cta-content max-w-2xl flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
          Start tracking.
          <br />
          Stop forgetting.
        </h2>

        <p className="text-white/90 text-[17px] sm:text-xl font-light mb-10 leading-relaxed max-w-lg">
          Free to download. First 30 expenses on us.
          <br className="hidden sm:block" /> No credit card required.
        </p>

        <div className="mb-20 cursor-pointer hover:opacity-90 transition-opacity">
          <Image
            src="/available-on-ios.png"
            alt="Available on iOS"
            width={140}
            height={42}
            className="h-10 w-auto shadow-sm rounded-full"
            quality={100}
          />
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[40px] md:text-5xl font-medium tracking-tight">
              4.8
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 md:w-10 md:h-10 -mt-1"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-white/80 text-[15px] font-light">
            Avg App Store rating
          </span>
        </div>
      </div>
    </section>
  );
}
