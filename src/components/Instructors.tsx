"use client";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Vocal Coach',
    description: 'With over 15 years of experience training professional singers, Elena specializes in helping students discover their unique voice and extend their vocal range.',
    quote: 'Music gives voice to what we cannot express in words. I believe everyone has a beautiful voice waiting to be discovered.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Marcus Reid',
    designation: 'Guitar Instructor',
    description: 'From classical techniques to modern rock, Marcus has mastered every style of guitar playing and brings passion to every lesson.',
    quote: 'The guitar is an extension of your soul. My goal is to help you find your unique sound and express yourself through music.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 3,
    name: 'Julia Zhang',
    designation: 'Piano Teacher',
    description: 'A graduate of Juilliard, Julia combines classical training with innovative teaching methods that make learning piano both enjoyable and rewarding.',
    quote: 'Piano is the foundation of musical understanding. Through keyboard exploration, we unlock the fundamentals of harmony and composition.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Andre Gomez',
    designation: 'Drumming Expert',
    description: 'Andre has toured with top artists worldwide and now shares his extensive knowledge of rhythm and percussion with students of all levels.',
    quote: 'Rhythm is the heartbeat of music. When you understand how to create and control rhythm, you unlock the power to move people.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
];

function Instructors() {
  return (
    <div className="relative min-h-[50rem] overflow-hidden">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-20">
        <div className="text-center mt-25 mb-16 px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Meet Our Instructors
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mb-6"></div>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            Discover the talented professionals who will guide your musical journey with their expertise and passion
          </p>
        </div>
        
        <div className="w-full max-w-7xl mx-auto">
          <AnimatedTestimonials 
            testimonials={instructors} 
            autoplay={true} 
          />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;