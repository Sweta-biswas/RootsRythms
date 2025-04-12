"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { Music, Quote } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    instrument?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Apply speed as a CSS variable
    const speedValues = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };
    
    containerRef.current.style.setProperty(
      "--animation-duration",
      speedValues[speed]
    );
    
    // Apply direction as a CSS variable
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    
    // Clone the scroller content for seamless infinite scroll
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const duplicate = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicate);
    });
  }, [direction, speed]);

  // Generate color based on instrument or use default color
  const getInstrumentColor = (instrument?: string) => {
    if (!instrument) return 'from-indigo-500 to-purple-600';
    
    const colors: Record<string, string> = {
      'Guitar': 'from-purple-500 to-indigo-600',
      'Piano': 'from-blue-500 to-cyan-600',
      'Voice': 'from-pink-500 to-rose-600',
      'Violin': 'from-amber-500 to-orange-600',
      'Production': 'from-emerald-500 to-green-600',
    };
    
    return colors[instrument] || 'from-indigo-500 to-purple-600';
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: "var(--animation-duration)",
          animationDirection: "var(--animation-direction)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((item, idx) => {
          const colorGradient = getInstrumentColor(item.instrument);
          
          return (
            <li
              className="w-[320px] max-w-full relative rounded-2xl border-0 shrink-0 px-6 py-8 md:w-[400px] min-h-[280px] flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl group"
              style={{
                background: "linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))",
                backdropFilter: "blur(10px)",
              }}
              key={`${item.name}-${idx}`}
            >
              {/* Top border gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorGradient} rounded-t-2xl`}></div>
              
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <blockquote className="flex flex-col h-full justify-between">
                <div>
                  <Quote className="w-8 h-8 text-white opacity-20 mb-3" />
                  <span className="relative z-20 text-sm md:text-base leading-relaxed text-gray-100 font-normal mb-6 italic">
                    {item.quote}
                  </span>
                </div>
                
                <div className="relative z-20 mt-auto flex flex-row items-center pt-4 border-t border-slate-700/50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${colorGradient} mr-3 shadow-lg`}>
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm md:text-base text-white font-medium">
                      {item.name}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};