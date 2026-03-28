import React from 'react';
import FadeIn from './FadeIn';
import ScrollFloat from './ScrollFloat';

export default function AboutMe() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full py-16">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2 md:order-1">
            <FadeIn delay={0.2} className="flex justify-center w-full">
              <img
                src="/About-me1.png"
                alt="About Me"
                className="w-4/6 md:w-5/6 lg:w-full"
              />
            </FadeIn>
          </div>

          {/* Text Right (desktop), always first on mobile/tablet */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900 order-1 md:order-2">
            <ScrollFloat 
              containerTag="h2"
              containerClassName="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight"
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              ABOUT ME
            </ScrollFloat>
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
      <div className="relative flex justify-center w-full">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900 order-1">
            <ScrollFloat 
              containerTag="h2"
              containerClassName="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight"
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              GOALS
            </ScrollFloat>
            <FadeIn 
              tag="p"
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              delay={0.2}
            >
              I help bring your ideas to life by building websites and applications that are reliable, efficient, and easy to use. I focus on understanding your needs and delivering results that achieve your objectives and meet user expectations.
            </FadeIn>
          </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2">
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
