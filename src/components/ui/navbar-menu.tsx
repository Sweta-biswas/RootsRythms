// navbar-menu.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  icon,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {icon && <span className="text-blue-500">{icon}</span>}
        <span className="font-medium">{item}</span>
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 z-50">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-black/[0.1] dark:border-white/[0.1] shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-6">
                  {children}
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-4 h-4 bg-white dark:bg-black rotate-45 border-t border-l border-black/[0.1] dark:border-white/[0.1]"
                layoutId="arrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              ></motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/20 dark:bg-black/70 bg-white/70 backdrop-blur-lg shadow-lg flex justify-center space-x-1 px-4 py-2 md:px-8 md:py-3"
    >
      {children}
    </motion.nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="flex space-x-3 items-start">
        <div className="relative w-20 h-20 md:w-32 md:h-24 overflow-hidden rounded-lg flex-shrink-0">
          <Image
            src={src}
            fill
            style={{ objectFit: "cover" }}
            alt={title}
            className="shadow-md transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-1 text-black dark:text-white group-hover:text-blue-500 transition-colors duration-200">
            {title}
          </h4>
          <p className="text-neutral-600 text-sm max-w-[10rem] dark:text-neutral-300">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export const HoveredLink = ({ children, ...rest }: React.ComponentPropsWithoutRef<typeof Link>) => {
  return (
    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.1 }}>
      <Link
        {...rest}
        className="text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 py-1.5 transition-colors duration-200"
      >
        <span className="relative overflow-hidden">
          <span className="relative inline-block">{children}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};