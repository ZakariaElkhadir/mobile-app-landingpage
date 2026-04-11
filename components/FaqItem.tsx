"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border rounded-2xl overflow-hidden cursor-pointer transition-colors duration-200 bg-bg-white ${
        isOpen
          ? "border-selection-gray shadow-sm"
          : "border-selection-gray hover:border-text-unselected"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 flex items-center justify-between gap-4 select-none">
        <h3
          className={`text-[15px] sm:text-base transition-colors ${isOpen ? "text-brand-blue" : "text-text-vibrant"}`}
        >
          {question}
        </h3>

        {isOpen ? (
          <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-[10px] h-[10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-text-vibrant">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-text-muted text-[13px] sm:text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
