"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
      date: 'May 15, 2025',
      instructor: 'Dr. Sarah Chen',
      category: 'Theory',
      bgColor: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'The Art of Songwriting',
      description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
      date: 'May 22, 2025',
      instructor: 'James Wilson',
      category: 'Composition',
      bgColor: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Mastering Your Instrument',
      description: 'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
      date: 'June 3, 2025',
      instructor: 'Maria Rodriguez',
      category: 'Performance',
      bgColor: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Music Production Essentials',
      description: 'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
      date: 'June 10, 2025',
      instructor: 'Alex Thompson',
      category: 'Production',
      bgColor: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Live Performance Techniques',
      description: 'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
      date: 'June 17, 2025',
      instructor: 'David Kim',
      category: 'Performance',
      bgColor: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Digital Music Marketing',
      description: 'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
      date: 'June 24, 2025',
      instructor: 'Emma Johnson',
      category: 'Business',
      bgColor: 'from-cyan-500 to-sky-600'
    },
  ];

  return (
    <div className="relative mb-28 py-12 md:py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-40 md:w-64 h-40 md:h-64 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="inline-block text-sm md:text-base font-semibold tracking-wide uppercase py-1 px-3 bg-teal-500/10 text-teal-400 rounded-full mb-3">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-2xl md:text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">Musical Journey</span>
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-gray-300 opacity-80">
            Join our expert-led webinars to expand your musical knowledge and skills
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <HoverEffect
            items={featuredWebinars.map(webinar => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
              date: webinar.date,
              instructor: webinar.instructor,
              category: webinar.category,
              bgColor: webinar.bgColor
            }))}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-16 text-center pb-8 md:pb-0"
        >
          <Link href="/"
            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-medium text-white transition-all duration-300 ease-in-out rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-500 to-indigo-600"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-gradient-to-br from-teal-400 to-indigo-500 opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative flex items-center text-sm md:text-base">
              <span className="mr-2">View All Webinars</span>
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;