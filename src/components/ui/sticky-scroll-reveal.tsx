"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | React.ReactNode;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Define gradient variations for different sections
  const gradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",  // cyan to emerald
    "linear-gradient(to bottom right, #8b5cf6, #3b82f6)",  // violet to blue
    "linear-gradient(to bottom right, #ec4899, #8b5cf6)",  // pink to violet
    "linear-gradient(to bottom right, #f97316, #eab308)",  // orange to yellow
    "linear-gradient(to bottom right, #06b6d4, #3b82f6)",  // cyan to blue
    "linear-gradient(to bottom right, #d946ef, #8b5cf6)",  // fuchsia to violet
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(gradients[0]);

  useEffect(() => {
    setBackgroundGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <div className="relative">
      <motion.div
        animate={{
          backgroundColor: "#0f172a", // Consistent dark background
        }}
        className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-xl shadow-2xl"
        ref={ref}
      >
        <div className="div relative flex items-start px-4 md:px-8">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={`item-${index}`} className="my-28 md:my-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-white">
                    {item.title}
                  </div>
                  <motion.p
                    className="text-lg text-white/80 max-w-sm mt-6"
                  >
                    {item.description}
                  </motion.p>
                  
                  <motion.div 
                    className="h-1 w-16 mt-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeCard === index ? 64 : 0,
                      background: backgroundGradient
                    }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.div>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        
        <motion.div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:flex items-center justify-center h-80 rounded-xl bg-white sticky top-32 overflow-hidden shadow-2xl ring-2 ring-white/10",
            contentClassName
          )}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={contentRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Progress indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-3">
          {content.map((_, index) => (
            <div 
              key={`indicator-${index}`}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeCard === index 
                  ? 'w-3 h-8 rounded-full' 
                  : 'bg-white/30'
              }`}
              style={
                activeCard === index 
                  ? { background: backgroundGradient } 
                  : {}
              }
              onClick={() => {
                // Scroll to the corresponding section
                const sectionTop = (ref.current?.scrollHeight || 0) * (index / cardLength);
                ref.current?.scrollTo({ top: sectionTop, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};