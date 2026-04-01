import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from './ui/SplitText';
import ShinyText from './ui/ShinyText';
import FadeIn from './ui/FadeIn';
import ParticlesWeb from './ui/ParticlesWeb';
import GradientText from './ui/GradientText';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Banner({ isLoaded = false }) {
  const helloRef    = useRef(null);
  const gradientRef  = useRef(null);
  const btnsRef      = useRef(null);
  const profileRef   = useRef(null);

  // Hide elements immediately on mount — before loader finishes
  useGSAP(() => {
    if (helloRef.current)   gsap.set(helloRef.current,   { opacity: 0, y: 55 });
    if (gradientRef.current) gsap.set(gradientRef.current, { opacity: 0, y: 55, filter: 'blur(8px)' });
    if (btnsRef.current)    gsap.set(Array.from(btnsRef.current.children), { opacity: 0, y: 28, filter: 'blur(4px)' });
    if (profileRef.current) gsap.set(profileRef.current,  { opacity: 0, x: 80, filter: 'blur(8px)' });
  }, {});

  useGSAP(() => {
    if (!isLoaded) return;
    // "Hi, I'm Carlos" — slide up only (SplitText handles char opacity)
    if (helloRef.current) {
      gsap.fromTo(
        helloRef.current,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0, clearProps: 'transform,opacity' }
      );
    }
    // "Full stack Developer + Web Designer"
    if (gradientRef.current) {
      gsap.fromTo(
        gradientRef.current,
        { opacity: 0, y: 55, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out', delay: 0.4, clearProps: 'filter,transform,opacity' }
      );
    }
    // Buttons
    if (btnsRef.current) {
      gsap.fromTo(
        Array.from(btnsRef.current.children),
        { opacity: 0, y: 28, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', stagger: 0.2, delay: 0.25, clearProps: 'filter,transform,opacity' }
      );
    }
    // Profile image
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, x: 80, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.3, clearProps: 'filter,transform,opacity' }
      );
    }
  }, { dependencies: [isLoaded] });

  return (
    <div className="relative min-h-screen flex w-full z-0 overflow-hidden">
      {/* Particles — bottom layer */}
      <div className="absolute inset-0 z-0">
        <ParticlesWeb />
      </div>

      {/* Banner image — above particles */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/Banner-nobg.png")' }}
      />

      {/* Content — top layer */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        
        {/* Left div */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left text-black px-6 sm:px-10 md:px-16 lg:pl-14 xl:pl-24 2xl:pl-40 pt-24 pb-10 lg:py-10">
          <div ref={helloRef} className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold font-body mb-2">
            <SplitText text="Hi, I'm Carlos" className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold" delay={50} />
          </div>
          <div ref={gradientRef} className="mb-4">
            <GradientText
              colors={['#7f1d1d', '#f87171', '#6b7280', '#1f2937', '#7f1d1d']}
              animationSpeed={6}
              className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mx-0"
            >
              Full stack Developer + Web Designer
            </GradientText>
          </div>
          
          <div ref={btnsRef} className="flex flex-col min-[600px]:flex-row gap-4 mt-2">
            <a
              href="#contact"
              className="btn-3d px-4 py-1.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 text-sm xl:text-base border border-red-900 text-red-900 bg-gradient-to-r from-transparent to-transparent hover:from-red-900 hover:to-gray-800 hover:text-white hover:border-transparent rounded font-bold text-center group"
            >
              <span className="relative inline-block">
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  <ShinyText text="Hire Me" disabled={false} speed={3} baseColor="#7f1d1d" shineColor="#fca5a5" />
                </span>
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ShinyText text="Hire Me" disabled={false} speed={2.2} baseColor="#ffffff" shineColor="#d4d4d4" />
                </span>
              </span>
            </a>
            
            <button className="btn-3d px-4 py-1.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 text-sm xl:text-base border w-fit border-red-900 text-red-900 bg-gradient-to-r from-transparent to-transparent hover:from-red-900 hover:to-gray-800 hover:text-white hover:border-transparent rounded group font-bold">
              <span className="relative inline-block">
                <span className="block transition-opacity duration-200 group-hover:opacity-0">
                  <ShinyText text="Download CV" disabled={false} speed={3} baseColor="#7f1d1d" shineColor="#fca5a5" />
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
            ref={profileRef}
            className="h-[76vh] lg:h-[78vh] xl:h-[83vh] 2xl:h-[90vh] w-auto max-w-[46vw] object-contain object-bottom z-10 absolute bottom-0 right-6 xl:right-10 2xl:right-24"
          />
        </div>
      </div>
    </div>
  );
}
