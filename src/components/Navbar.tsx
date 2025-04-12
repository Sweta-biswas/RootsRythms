// navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // When scrolling down more than 20px, hide the navbar
        if (window.scrollY > lastScrollY && window.scrollY > 20) {
          setVisible(false);
          setMobileMenuOpen(false); // Close mobile menu when scrolling
        } 
        // When scrolling up or at the top, show the navbar
        else {
          setVisible(true);
        }
        // Update the last scroll position
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  );

  const CourseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M11.25 4.533A9.707 9.707 0 006 3c-2.089 0-4.022.652-5.625 1.764a1.376 1.376 0 00-.5 1.796c.464.93 1.702 1.464 3.375 1.539.87.038 1.716.255 2.495.638.036-1.058.377-2.022.977-2.816.179-.238.386-.44.605-.645z" />
      <path d="M20.215 7.65a1.376 1.376 0 00-.5-1.797A9.707 9.707 0 0018 5.25c-2.165 0-4.154.699-5.75 1.875a9.695 9.695 0 00-5.75-1.875c-.71 0-1.396.088-2.054.251a1.458 1.458 0 00-.422.121c-.673.215-1.261.428-1.779.762-.144.092-.266.199-.373.316A5.83 5.83 0 001.5 8.218v9.407A1.376 1.376 0 002.875 19a10.155 10.155 0 008.25-3.43.75.75 0 011.75 0 10.155 10.155 0 008.25 3.43 1.376 1.376 0 001.375-1.375V8.22c0-.453-.075-.886-.215-1.29-.195-.557-.537-.984-.911-1.28z" />
    </svg>
  );

  const ContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={cn(
          "fixed top-5 inset-x-0 max-w-4xl mx-auto z-50 transition-all duration-300 px-4 hidden md:block",
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
          className
        )}
      >
        <div className="relative">
          <Menu setActive={setActive}>
            <Link href={"/"}>
              <MenuItem 
                setActive={setActive} 
                active={active} 
                item="Home"
                icon={<HomeIcon />}
              >
              </MenuItem>
            </Link>
            <MenuItem 
              setActive={setActive} 
              active={active} 
              item="Our Courses"
              icon={<CourseIcon />}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 w-96">
                <HoveredLink href="/courses">
                  <span className="font-medium">All Courses</span>
                </HoveredLink>
                <HoveredLink href="/musictheory">
                  <span className="group">Basic Music Theory</span>
                </HoveredLink>
                <HoveredLink href="/composition">
                  <span className="group">Advanced Composition</span>
                </HoveredLink>
                <HoveredLink href="/songwritting">
                  <span className="group">Song Writing</span>
                </HoveredLink>
                <HoveredLink href="/production">
                  <span className="group">Music Production</span>
                </HoveredLink>
                
                <div className="md:col-span-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/courses" className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex justify-between items-center group">
                    <span>View all courses</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </MenuItem>
            <Link href={"/contact"}>
              <MenuItem 
                setActive={setActive} 
                active={active} 
                item="Contact Us"
                icon={<ContactIcon />}
              >
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </div>

      {/* Mobile Navigation Button */}
      <div className="fixed top-5 right-5 z-50 md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-lg text-white dark:text-white"
        >
          <span className="sr-only">Open menu</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={mobileMenuOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <nav className="flex-1 space-y-1">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <motion.div 
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <HomeIcon />
                    <span className="font-medium">Home</span>
                  </motion.div>
                </Link>
                
                <div className="mt-4">
                  <div className="flex items-center space-x-3 px-4 py-3 text-gray-900 dark:text-white">
                    <CourseIcon />
                    <span className="font-medium">Our Courses</span>
                  </div>
                  
                  <div className="ml-8 mt-2 space-y-1">
                    <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        All Courses
                      </motion.div>
                    </Link>
                    <Link href="/musictheory" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Basic Music Theory
                      </motion.div>
                    </Link>
                    <Link href="/composition" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Advanced Composition
                      </motion.div>
                    </Link>
                    <Link href="/songwritting" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Song Writing
                      </motion.div>
                    </Link>
                    <Link href="/production" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div 
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Music Production
                      </motion.div>
                    </Link>
                  </div>
                </div>
                
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <motion.div 
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <ContactIcon />
                    <span className="font-medium">Contact Us</span>
                  </motion.div>
                </Link>
              </nav>
              
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;