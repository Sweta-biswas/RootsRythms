"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Guitar Student',
    instrument: 'Guitar',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Piano Student',
    instrument: 'Piano',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Vocal Student',
    instrument: 'Voice',
  },
  {
    quote:
      'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Violin Student',
    instrument: 'Violin',
  },
  {
    quote:
      'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
    name: 'Chris Morales',
    title: 'Music Production Student',
    instrument: 'Production',
  },
];

function TestimonialCards() {
  return (
    <div
      className="min-h-screen w-full bg-slate-950 relative flex flex-col items-center justify-center overflow-hidden py-16 md:py-20"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 25%, rgba(63, 94, 251, 0.1) 0%, transparent 25%),
          radial-gradient(circle at 75% 75%, rgba(131, 58, 180, 0.1) 0%, transparent 25%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.05)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover, cover, auto',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-blue-600 rounded-full filter blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Musical notes decoration - hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-1/4 left-10 text-5xl text-white opacity-5 animate-bounce" style={{ animationDuration: '3s' }}>♪</div>
      <div className="hidden md:block absolute top-1/3 right-20 text-7xl text-white opacity-5 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>♫</div>
      <div className="hidden md:block absolute bottom-1/4 left-20 text-6xl text-white opacity-5 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>♩</div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-3">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Hear our Harmony: Voices of Success
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From beginners to advanced musicians, our students find their musical path with us
          </p>
        </div>
        
        <div className="flex justify-center w-full overflow-hidden relative z-10">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 md:mt-16 text-center">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-1">
            Start Your Musical Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;