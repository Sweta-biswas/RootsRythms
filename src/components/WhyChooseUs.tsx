"use client";
import React, { useState } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

// Define Unsplash image URLs
// In a real Next.js application, these would need to be properly configured for Image optimization
const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us",
    subtitle: "A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity.",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Student playing piano during a music lesson",
    badge: {
      text: "FEATURED",
      color: "bg-emerald-500"
    }
  },
  {
    title: "Expert Instructors & Mentorship",
    subtitle: "Learn from the Best in the Industry",
    description:
      "Our accomplished musicians provide the perfect balance of technical expertise and inspirational guidance, helping you achieve your musical goals through personalized mentorship.",
    imageUrl: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Music instructor teaching a student",
    badge: {
      text: "MASTERS",
      color: "bg-indigo-500"
    }
  },
  {
    title: "State-of-the-Art Facilities",
    subtitle: "Where Innovation Meets Excellence",
    description:
      "Practice and perform in acoustically engineered spaces designed for optimal sound quality. Our facilities feature top-tier equipment to enhance your learning experience.",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Modern recording studio with equipment",
    badge: {
      text: "PREMIUM",
      color: "bg-pink-500"
    }
  },
  {
    title: "Live Feedback & Engagement",
    subtitle: "Real-time Growth & Development",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate. Enhance your understanding and mastery of music concepts through collaborative practice.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Live music performance with audience",
    badge: {
      text: "INTERACTIVE",
      color: "bg-amber-500"
    }
  },
  {
    title: "Cutting-Edge Curriculum",
    subtitle: "Always Evolving, Always Inspiring",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you're always learning with the most current and effective methods.",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Digital music production setup",
    badge: {
      text: "INNOVATIVE",
      color: "bg-cyan-500"
    }
  },
  {
    title: "Limitless Learning Opportunities",
    subtitle: "Your Musical Journey, Your Pace",
    description:
      "With our expansive resource library and dynamic course offerings, you'll never find yourself without something new to explore and master on your musical journey with us.",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    imageAlt: "Music library with instruments and sheet music",
    badge: {
      text: "LIMITLESS",
      color: "bg-purple-500"
    }
  },
];

// Transform content data to include the React components
const contentWithComponents = musicSchoolContent.map(item => ({
  ...item,
  content: (
    <div className="h-full w-full flex items-center justify-center text-white relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      {/* In a real Next.js app, this would use the actual Unsplash image */}
      {/* For demonstration, showing both ways to handle images */}
      <Image 
        src={item.imageUrl} 
        alt={item.imageAlt} 
        width={600} 
        height={400} 
        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
        unoptimized={true} // In a real app, you'd configure Next.js properly for external images
      />
      <div className="absolute bottom-4 left-4 z-20">
        <span className={`px-2 py-1 ${item.badge.color} text-xs font-bold rounded-full`}>
          {item.badge.text}
        </span>
      </div>
    </div>
  )
}));

function WhyChooseUs() {
  const [activeSection, setActiveSection] = useState(0);

  // Progress indicator for mobile
  const ProgressIndicator = () => (
    <div className="flex justify-center space-x-2 mt-8 lg:hidden">
      {contentWithComponents.map((_, index) => (
        <div 
          key={index} 
          className={`w-2 h-2 rounded-full ${activeSection === index ? 'bg-white' : 'bg-gray-600'}`}
          onClick={() => setActiveSection(index)}
        ></div>
      ))}
    </div>
  );

  // Mobile section
  const MobileContent = () => (
    <div className="lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-8"
      >
        <h3 className="text-xl font-bold text-white">
          {contentWithComponents[activeSection].title}
        </h3>
        <p className="text-sm text-white/70 mt-2 italic">
          {contentWithComponents[activeSection].subtitle}
        </p>
        <p className="text-white/80 mt-4">
          {contentWithComponents[activeSection].description}
        </p>
        <div className="mt-6 mb-4 h-64 w-full rounded-lg overflow-hidden">
          {contentWithComponents[activeSection].content}
        </div>
        <ProgressIndicator />
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-800 rounded-full text-white disabled:opacity-50"
            disabled={activeSection === 0}
            onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white disabled:opacity-50"
            disabled={activeSection === contentWithComponents.length - 1}
            onClick={() => setActiveSection(prev => Math.min(contentWithComponents.length - 1, prev + 1))}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="relative py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-xl mx-auto">
            Experience the difference with our world-class music education program designed to elevate your musical journey.
          </p>
        </motion.div>
        
        {/* Mobile version */}
        <MobileContent />
        
        {/* Desktop version - StickyScroll */}
        <div className="hidden lg:block">
          <StickyScroll 
            content={contentWithComponents.map(item => ({
              ...item,
              title: (
                <div>
                  {item.title}
                  <div className="text-sm font-normal italic text-cyan-400 mt-1">
                    {item.subtitle}
                  </div>
                </div>
              )
            }))} 
            contentClassName="md:w-96 lg:w-[32rem] h-80 shadow-2xl"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-10"></div>
    </div>
  );
}

export default WhyChooseUs;