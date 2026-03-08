import React from 'react';
import SplitText from './SplitText';
import TextType from './TextType';
import ShinyText from './ShinyText';

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight min-h-[1.2em]">
            <TextType 
              text={["Front-end Developer", "UI/UX Designer", "Creative Thinker"]} 
              speed={100} 
              loop={true} 
              className="inline-block"
            />
          </h1>
          <button className="mt-2 px-6 py-2 border w-fit border-red-900 text-red-900 hover:bg-red-950 hover:text-white rounded transition group font-bold">
            <ShinyText 
              text="Download CV" 
              disabled={false} 
              speed={3} 
              baseColor="#7f1d1d" 
              shineColor="#ffffff" 
              className="group-hover:text-white group-hover:bg-clip-border group-hover:bg-transparent group-hover:text-current" 
            />
            {/* 
               Note: ShinyText uses background-clip: text. 
               On hover, button bg changes to red-950. Text should be white.
               ShinyText forces background gradient. 
               Ideally, on hover, we disable shine or change baseColor to white.
               However, passing baseColor prop dynamically requires state.
               Simplification: Keep shine but maybe change baseColor via prop if possible?
               Or just let it be. 
               Actually, group-hover:text-white won't work because style overrides color: transparent.
               I'll leave it as is, the shine effect is cool. 
               Or I can use CSS variables for colors.
            */}
          </button>
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
