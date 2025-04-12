"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  id?: number;
  quote?: string;
  name: string;
  designation: string;
  description?: string;
  src?: string;
  image?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  items,
  autoplay = false,
}: {
  testimonials?: Testimonial[];
  items?: Testimonial[];
  autoplay?: boolean;
}) => {
  const data = items || testimonials || [];
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  if (!data || data.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Image section with enhanced animations */}
        <div className="order-2 md:order-1">
          <div className="relative h-96 w-full overflow-visible">
            <AnimatePresence mode="wait">
              {data.map((testimonial, index) => {
                const imageSrc = testimonial.src || testimonial.image;
                
                return isActive(index) ? (
                  <motion.div
                    key={testimonial.id || `testimonial-${index}`}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      x: direction * 100,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      rotateY: 0,
                      filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15))",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      x: direction * -100,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-center"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={testimonial.name}
                          width={600}
                          height={700}
                          priority
                          draggable={false}
                          className="h-full w-full rounded-3xl object-cover object-center transition-all duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
                          <p>No image available</p>
                        </div>
                      )}
                      
                      {/* Decorative elements */}
                      <motion.div 
                        className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      <motion.div 
                        className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gradient-to-r from-amber-400 to-pink-500"
                        animate={{
                          y: [0, 10, 0],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.5,
                        }}
                      />
                    </div>
                  </motion.div>
                ) : null;
              })}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Content section with enhanced animations */}
        <div className="order-1 flex flex-col justify-center md:order-2">
          <motion.div
            key={`content-${active}`}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Quotation mark */}
            <div className="absolute -left-8 -top-8 text-6xl font-serif text-purple-200 dark:text-purple-800">&ldquo;</div>
            
            {/* Name with gradient underline */}
            <h3 className="relative text-3xl font-bold text-white dark:text-white">
              {data[active].name}
              <div className="mt-1 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h3>
            
            {/* Designation with subtle styling */}
            <p className="mt-1 text-lg font-medium text-purple-300 dark:text-purple-400">
              {data[active].designation}
            </p>
            
            {/* Description with enhanced typography */}
            {data[active].description && (
              <p className="mt-3 text-lg text-gray-200 dark:text-gray-300">
                {data[active].description}
              </p>
            )}
            
            {/* Quote with word-by-word animation */}
            {data[active].quote && (
              <motion.div 
                className="mt-6 text-xl font-medium text-gray-200 dark:text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {data[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(4px)",
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.03 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            )}
            
            {/* End quotation mark */}
            <div className="absolute -bottom-16 right-0 text-6xl font-serif text-purple-200 dark:text-purple-800">&rdquo;</div>
          </motion.div>
          
          {/* Navigation buttons with enhanced styling */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-gray-700"></div>
            <button
              onClick={handlePrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                <IconArrowLeft className="h-5 w-5 text-purple-600 transition-transform duration-300 group-hover:-translate-x-1 dark:text-purple-400" />
              </div>
            </button>
            <button
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                <IconArrowRight className="h-5 w-5 text-purple-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-purple-400" />
              </div>
            </button>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700"></div>
          </div>
          
          {/* Testimonial pagination indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => {
                  setDirection(index > active ? 1 : -1);
                  setActive(index);
                }}
                className={`h-2 rounded-full transition-all duration-300
                  ${isActive(index) 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'}`
                }
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};