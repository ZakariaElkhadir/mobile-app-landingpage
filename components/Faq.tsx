"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqItem from "./FaqItem";

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        gsap.utils.toArray(".faq-item"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-32 px-6 max-w-[1200px] mx-auto flex flex-col items-center font-sans overflow-hidden"
    >
      <div ref={headerRef} className="text-center mb-16 px-4">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-text-vibrant mb-6 leading-tight">
          Questions
          <br />
          we get a lot.
        </h2>
        <p className="text-[#767676] text-lg sm:text-xl font-light">
          Still not sure? Everything you need to know
          <br className="hidden sm:block" /> before downloading.
        </p>
      </div>

      <div
        ref={itemsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[900px] items-start"
      >
        <div className="flex flex-col gap-4">
          <div className="faq-item">
            <FaqItem
              question="What iPhones does Snapense support?"
              answer="Snapense supports all iPhones running iOS 14 and newer. We've optimized the experience for modern devices to ensure smooth scanning and seamless navigation."
            />
          </div>
          <div className="faq-item">
            <FaqItem
              question="How accurate is the OCR receipt scanning?"
              answer="Our OCR engine is highly accurate and powered by ML, recognizing text, dates, and amounts from most standard receipts almost instantly."
            />
          </div>
          <div className="faq-item">
            <FaqItem
              question="Does it work with digital receipts and screenshots?"
              answer="Yes! You can easily import digital receipts or screenshots directly from your photo library or files app."
            />
          </div>
          <div className="faq-item">
            <FaqItem
              question="Is Snapense really free?"
              answer="Build a label architecture that matches how you actually think about money. Auto-assigned, fully editable, learns as you log."
              defaultOpen={true}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="faq-item">
            <FaqItem
              question="Is my financial data safe?"
              answer="Security is our top priority. We use bank-level encryption and do not sell your personal financial data to third parties."
            />
          </div>
          <div className="faq-item">
            <FaqItem
              question='What does "bank drop alert" mean exactly?'
              answer="A bank drop alert notifies you the moment your connected account balance drops below a threshold you define, keeping you aware."
            />
          </div>
          <div className="faq-item">
            <FaqItem
              question="Can I cancel Pro any time?"
              answer="Absolutely. You can flexibly manage, upgrade, or cancel your Pro subscription directly through your Apple ID settings."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
