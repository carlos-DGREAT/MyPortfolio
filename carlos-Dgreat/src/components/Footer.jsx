import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./ui/BlurText";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const bgTextRef = useRef(null);
  const [blurActive, setBlurActive] = useState(false);
  const [blurKey, setBlurKey] = useState(0);

  useEffect(() => {
    const footerEl = footerRef.current;
    const textEl = bgTextRef.current;
    const spacerEl = document.querySelector("#footer-reveal");
    if (!spacerEl || !footerEl || !textEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textEl,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: spacerEl,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }, footerEl);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { ctx.revert(); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    const spacerEl = document.querySelector("#footer-reveal");
    if (!spacerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBlurActive(true);
            setBlurKey((k) => k + 1);
          } else {
            setBlurActive(false);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(spacerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="footer footer-horizontal footer-center fixed bottom-0 left-0 z-0 w-full h-[144px] sm:h-[280px] md:h-[300px] lg:h-[240px] xl:h-[280px] 2xl:h-[320px] overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-primary-content"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            ref={bgTextRef}
            className="select-none tracking-tight leading-none whitespace-nowrap text-[8vw] sm:text-[10vw] md:text-[9vw] lg:text-[7vw] xl:text-[6.5vw] [font-family:Montserrat] [font-weight:900] text-white/20"
          >
            <BlurText
              key={blurKey}
              text="CRLS.DGREAT"
              animateBy="chars"
              delay={35}
              stepDuration={0.3}
              className="justify-center"
              active={blurActive}
            />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-6 xl:p-10">
          <aside className="flex flex-col items-center space-y-2 lg:space-y-3">
            <img
              src="/footer-2.png"
              alt="Logo"
              className="h-8 w-8 sm:h-14 sm:w-14 lg:h-14 lg:w-14 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 object-contain"
            />
            <p className="text-center text-white text-xs sm:text-xs lg:text-xs xl:text-sm 2xl:text-base">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </aside>
        </div>
      </footer>
    </>
  );
}
