import React from 'react';
import SplitText from './SplitText';
import ShinyText from './ShinyText';
import FadeIn from './FadeIn';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Banner() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex w-full z-0"
      style={{ backgroundImage: 'url("/Banner.png")' }}
    >
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left div */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left text-black px-6 sm:px-10 md:px-16 lg:pl-20 xl:pl-40 py-10">
          <div className="text-2xl sm:text-3xl font-bold font-body mb-2">
            <SplitText text="Hi, I'm Carlos" className="text-2xl sm:text-3xl font-bold" delay={50} />
          </div>
          <FadeIn delay={0.2} tag="h1" className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-black leading-tight">
            Full stack Developer + Web Designer
          </FadeIn>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#contact"
              className="px-6 py-2 border border-black text-black hover:bg-gray-900 hover:text-white rounded transition font-bold text-center group"
            >
              <span className="relative inline-block">
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  <ShinyText text="Hire Me" disabled={false} speed={3} baseColor="#000000" shineColor="#ffffff" />
                </span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ShinyText text="Hire Me" disabled={false} speed={2.2} baseColor="#ffffff" shineColor="#d4d4d4" />
                </span>
              </span>
            </a>
            
            <button className="px-6 py-2 border w-fit border-black text-black hover:bg-gray-900 hover:text-white rounded transition group font-bold">
              <span className="relative inline-block">
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  <ShinyText text="Download CV" disabled={false} speed={3} baseColor="#000000" shineColor="#ffffff" />
                </span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ShinyText text="Download CV" disabled={false} speed={2.2} baseColor="#ffffff" shineColor="#d4d4d4" />
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Right div (hidden below 1024px) */}
        <div className="hidden lg:flex flex-1 justify-end items-end relative">
          <img
            src="/Profile 1.png"
            alt="profile"
            className="h-[80vh] xl:h-[90vh] 2xl:h-[95vh] object-cover z-10 absolute bottom-0 right-10 xl:right-20 2xl:right-24"
          />
        </div>
      </div>
    </div>
  );
}
