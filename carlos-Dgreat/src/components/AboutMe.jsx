import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef  = useRef(null);
  const bgRef        = useRef(null);
  const aboutImgRef  = useRef(null);
  const aboutTextRef = useRef(null);
  const goalsTextRef = useRef(null);
  const goalsImgRef  = useRef(null);

  useGSAP(() => {
    // Parallax background — desktop only
    if (window.innerWidth >= 768) {
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }

    const cfg = { toggleActions: 'play none none reset' };

    gsap.fromTo(aboutImgRef.current,
      { opacity: 0, x: -70, filter: 'blur(6px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.95, ease: 'power3.out', clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: aboutImgRef.current,  start: 'top bottom-=8%', ...cfg } });

    gsap.fromTo(Array.from(aboutTextRef.current?.children ?? []),
      { opacity: 0, x: 70 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15, clearProps: 'transform,opacity',
        scrollTrigger: { trigger: aboutTextRef.current, start: 'top bottom-=8%', ...cfg } });

    gsap.fromTo(Array.from(goalsTextRef.current?.children ?? []),
      { opacity: 0, x: -70 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15, clearProps: 'transform,opacity',
        scrollTrigger: { trigger: goalsTextRef.current, start: 'top bottom-=8%', ...cfg } });

    gsap.fromTo(goalsImgRef.current,
      { opacity: 0, x: 70, filter: 'blur(6px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.95, ease: 'power3.out', clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: goalsImgRef.current,  start: 'top bottom-=8%', ...cfg } });
  }, {});

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full overflow-hidden">
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          backgroundImage: "url('/backdrop-3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          top: '-20%',
          height: '140%',
        }}
      />
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full pt-8 sm:pt-12 lg:pt-10 xl:pt-14 pb-2 lg:pb-2 xl:pb-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-8 md:gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex items-center justify-center p-3 lg:p-4 xl:p-6 order-2 md:order-1" ref={aboutImgRef}>
              <img
                src="/About-me1.png"
                alt="About Me"
                className="w-full max-w-sm lg:max-w-[340px] xl:max-w-sm 2xl:max-w-md"
              />
          </div>

          {/* Text Right (desktop), always first on mobile/tablet */}
          <div ref={aboutTextRef} className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-5 lg:p-5 xl:p-8 text-gray-900 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent leading-tight">
              ABOUT ME
            </h2>
            <p className="text-base lg:text-sm xl:text-base leading-relaxed max-w-2xl">
              Hi, I’m Carlos Opena, a Web Developer specializing in responsive and user-friendly websites. I’m passionate about improving my skills and working toward becoming a Software Engineer. I create websites and applications that are reliable, efficient, and easy to use.
            </p>
          </div>
        </div>
      </div>

      {/* GOALS Section */}
      <div className="relative flex justify-center w-full pt-4 sm:pt-6 lg:pt-4 xl:pt-6 pb-8 sm:pb-12 lg:pb-10 xl:pb-14">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-4 sm:gap-8 md:gap-10 px-4 md:px-6">
          <div ref={goalsTextRef} className="w-full md:w-1/2 flex flex-col justify-center p-4 sm:p-5 lg:p-5 xl:p-8 text-gray-900 order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent leading-tight">
              GOALS
            </h2>
            <p className="text-base lg:text-sm xl:text-base leading-relaxed max-w-2xl">
              I help bring your ideas to life by building websites and applications that are reliable, efficient, and easy to use. I focus on understanding your needs and delivering results that achieve your objectives and meet user expectations.
            </p>
          </div>
            <div ref={goalsImgRef} className="w-full md:w-1/2 flex items-center justify-center p-3 sm:p-6 order-2">
                <img
                  src="/Goals-3.png"
                  alt="Goals"
                  className="mx-auto w-full h-auto object-contain max-w-sm sm:max-w-md lg:max-w-[360px] xl:max-w-md 2xl:max-w-lg"
                />
            </div>
        </div>
      </div>
    </div>
  );
}
