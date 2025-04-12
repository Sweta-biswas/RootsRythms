'use client'

import Link from "next/link"
import Image from "next/image"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string,
  level: string,
  duration: string,
  lessons: string,
  students: string
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  
  return (
    <div className="py-12 bg-gray-950">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                {/* Add the course image */}
                <div className="relative w-full h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <div className="flex items-center justify-between w-full mt-4">
                    <span className="text-sm font-medium text-teal-600">${course.price}</span>
                    <span className="text-xs text-gray-500">{course.level} • {course.duration}</span>
                  </div>
                  <Link 
                    href={`/courses/${course.slug}`}
                    className="mt-4 px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
      <Link 
        href={"/courses"}
        className="inline-block px-6 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-md hover:bg-teal-700 transition duration-300"
      >
        View All Courses
      </Link>
    </div>
    </div>
  )
}

export default FeaturedCourses