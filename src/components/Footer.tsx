import React from 'react';
import { Music, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-gray-300 py-16 border-t-4 border-purple-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center mb-4">
            <Music size={32} className="text-purple-400" />
            <h1 className="text-white text-3xl font-bold ml-2">Rhythm & Roots</h1>
          </div>
          <p className="text-center text-gray-400 italic max-w-md">
            Unleashing musical potential since 2010
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-4 border-b border-purple-500 pb-2">
              About Us
            </h2>
            <p className="mb-4 text-sm leading-relaxed">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-4 border-b border-purple-500 pb-2">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {['Home', 'About', 'Courses', 'Contact'].map((item) => (
                <li key={item} className="transform transition-all duration-300 hover:translate-x-2">
                  <a
                    href="#"
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="mr-2">→</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-4 border-b border-purple-500 pb-2">
              Follow Us
            </h2>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="flex items-center hover:text-purple-400 transition-colors duration-300"
              >
                <Facebook size={16} className="mr-2" /> Facebook
              </a>
              <a
                href="#"
                className="flex items-center hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter size={16} className="mr-2" /> Twitter
              </a>
              <a
                href="#"
                className="flex items-center hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram size={16} className="mr-2" /> Instagram
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-4 border-b border-purple-500 pb-2">
              Contact Us
            </h2>
            <div className="space-y-3">
              <p className="flex items-center text-sm">
                <MapPin size={16} className="mr-2 text-purple-400" /> New Delhi, India
              </p>
              <p className="flex items-center text-sm">
                <MapPin size={16} className="mr-2 text-purple-400" /> Delhi 10001
              </p>
              <p className="flex items-center text-sm">
                <Mail size={16} className="mr-2 text-purple-400" /> info@musicschool.com
              </p>
              <p className="flex items-center text-sm">
                <Phone size={16} className="mr-2 text-purple-400" /> (123) 456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 py-8 border-t border-gray-800">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-white text-xl font-semibold mb-4">Stay in Tune</h3>
            <p className="text-gray-400 mb-6">Subscribe to receive updates on new courses and events</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs pt-10 text-gray-500">
          <p>© 2024 Music School. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-gray-500 hover:text-purple-400 mx-2">Privacy Policy</a> | 
            <a href="#" className="text-gray-500 hover:text-purple-400 mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;