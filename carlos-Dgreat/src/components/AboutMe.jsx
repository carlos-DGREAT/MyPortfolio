import React from 'react';
import FadeIn from './ui/FadeIn';
import ScrollFloat from './ui/ScrollFloat';

export default function AboutMe() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-8 md:gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex items-center justify-center p-3 sm:p-6 order-2 md:order-1">
            <FadeIn delay={0.2} className="flex justify-center w-full">
              <img
                src="/About-me1.png"
                alt="About Me"
                className="w-4/6 md:w-5/6 lg:w-full"
              />
            </FadeIn>
          </div>

          {/* Text Right (desktop), always first on mobile/tablet */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8 text-gray-900 order-1 md:order-2">
            <FadeIn tag="h2" className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent leading-tight">
              ABOUT ME
            </FadeIn>
            <FadeIn 
              tag="p"
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              delay={0.2}
            >
              Hi, I’m Carlos Opena, a Web Developer specializing in responsive and user-friendly websites. I’m passionate about improving my skills and working toward becoming a Software Engineer. I create websites and applications that are reliable, efficient, and easy to use.
            </FadeIn>
          </div>
        </div>
      </div>

      {/* GOALS Section */}
      <div className="relative flex justify-center w-full py-4 sm:py-8 md:py-12">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-8 md:gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8 text-gray-900 order-1">
            <FadeIn tag="h2" className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent leading-tight">
              GOALS
            </FadeIn>
            <FadeIn 
              tag="p"
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              delay={0.2}
            >
              I help bring your ideas to life by building websites and applications that are reliable, efficient, and easy to use. I focus on understanding your needs and delivering results that achieve your objectives and meet user expectations.
            </FadeIn>
          </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-3 sm:p-6 order-2">
              <FadeIn delay={0.2} className="flex justify-center w-full">
                <img
                  src="/Goals-3.png"
                  alt="Goals"
                  className="mx-auto w-full h-auto object-contain
                            max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
                />
              </FadeIn>
            </div>
        </div>
      </div>
    </div>
  );
}
