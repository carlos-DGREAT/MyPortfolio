import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function MyTechStack() {
  const titleRef = useRef(null);
  const iconsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 35, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out', clearProps: 'filter,transform,opacity',
        scrollTrigger: { trigger: titleRef.current, start: 'top bottom', toggleActions: 'play none none reset' } });

    const icons = iconsRef.current?.querySelectorAll(':scope > div');
    if (icons?.length) {
      gsap.fromTo(icons,
        { opacity: 0, y: 45, scale: 0.65 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.8)',
          stagger: { amount: 1.8, from: 'start' }, clearProps: 'transform,opacity',
          scrollTrigger: { trigger: iconsRef.current, start: 'top bottom', toggleActions: 'play none none reset' } });
    }
  }, {});
  const allTechs = [
    { name: "HTML", img: "/html-5.svg" },
    { name: "CSS", img: "/css3.svg" },
    { name: "JavaScript", img: "/javascript.svg" },
    { name: "TypeScript", img: "/typescript.svg" },
    { name: "React", img: "/react.svg" },
    { name: "Next.js", img: "/nextjs.svg" },
    { name: "Tailwind", img: "/tailwindcss.svg" },
    { name: "Bootstrap", img: "/bootstrap.svg" },
    { name: "Node.js", img: "/nodejs.svg" },
    { name: "PHP", img: "/php.svg" },
    { name: "SQL", img: "/mysql.svg" },
    { name: "Figma", img: "/figma.svg" },
    { name: "Photoshop", img: "/photoshop.svg" },
    { name: "Canva", img: "/canva.svg" },
    { name: "WordPress", img: "/wordpress.svg" },
    { name: "Elementor Pro", img: "/elementor.svg" },
    { name: "GitHub", img: "/github.svg" },
    { name: "GitLab", img: "/gitlab.svg" },
  ];

  return (
    <div className="w-full py-10 sm:py-12 lg:py-12 xl:py-16 2xl:py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <div ref={titleRef} className="text-center mb-6 sm:mb-8 lg:mb-8 xl:mb-12 2xl:mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-red-900/70 mb-3">Tools & Skills</p>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">Tech Stack & Proficiencies</h2>
          </div>

          <div ref={iconsRef} className="flex flex-wrap gap-3 sm:gap-4 lg:gap-4 xl:gap-6 justify-center">
            {allTechs.map((tech, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center"
              >
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-18 lg:h-18 xl:w-22 xl:h-22 2xl:w-24 2xl:h-24 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-110">
                      <img src={tech.img} alt={tech.name} className="w-8 h-8 lg:w-9 lg:h-9 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-4 px-3 py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

