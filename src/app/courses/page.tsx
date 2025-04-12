'use client';

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Music Courses
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover {courseData.courses.length} premium courses to enhance your musical journey
          </p>
        </div>

        {/* Filter/Category Tabs - For visual enhancement */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All Courses', 'Beginners', 'Intermediate', 'Advanced', 'Popular'].map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                ${category === 'All Courses' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {courseData.courses.map((course, index) => (
            <CardContainer 
              key={index} 
              className="w-full max-w-sm"
              containerClassName="py-8"
            >
              <CardBody className="bg-gray-900 relative group/card border-gray-800 hover:border-emerald-500/50 border w-full h-full rounded-xl p-6 transition-all duration-300">
                {/* Course Label */}
                <CardItem
                  translateZ="100"
                  className="absolute -top-3 right-4 bg-emerald-500 text-xs font-bold text-white px-3 py-1 rounded-full"
                >
                  {course.level || "All Levels"}
                </CardItem>

                {/* Course Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white mt-4"
                >
                  {course.title}
                </CardItem>

                {/* Course Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm mt-2 line-clamp-2"
                >
                  {course.description}
                </CardItem>

                {/* Course Image */}
                <CardItem translateZ="100" className="w-full mt-6">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                      unoptimized={true}
                    />
                  </div>
                </CardItem>

                {/* Course Stats */}
                <CardItem
                  translateZ="40"
                  className="grid grid-cols-3 gap-2 mt-6 text-xs text-gray-400"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-medium">{course.duration}</span>
                    <span>Duration</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-medium">{course.lessons}</span>
                    <span>Lessons</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-emerald-400 font-medium">{course.students}</span>
                    <span>Students</span>
                  </div>
                </CardItem>

                {/* Call to Action */}
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Preview →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
                  >
                    Enroll Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to start your musical journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with our industry-leading courses
          </p>
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;