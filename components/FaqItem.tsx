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
      className={`border rounded-2xl overflow-hidden cursor-pointer transition-colors duration-200 bg-white ${
        isOpen
          ? "border-gray-100 shadow-sm"
          : "border-gray-100 hover:border-gray-200"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 flex items-center justify-between gap-4 select-none">
        <h3
          className={`text-[15px] sm:text-base transition-colors ${isOpen ? "text-[#208AFF]" : "text-gray-600"}`}
        >
          {question}
        </h3>

        {isOpen ? (
          <div className="w-5 h-5 rounded-full bg-[#208AFF] text-white flex items-center justify-center shrink-0">
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
          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-gray-800">
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
            <div className="px-6 pb-6 text-[#949494] text-[13px] sm:text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
