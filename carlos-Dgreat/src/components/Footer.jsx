import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./BlurText";

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

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const spacerEl = document.querySelector("#footer-reveal");
    if (!spacerEl) return;

    const st = ScrollTrigger.create({
      trigger: spacerEl,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        setBlurActive(true);
        setBlurKey((k) => k + 1);
      },
      onEnterBack: () => {
        setBlurActive(true);
        setBlurKey((k) => k + 1);
      },
      onLeaveBack: () => setBlurActive(false),
    });

    return () => st.kill();
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="footer footer-horizontal footer-center fixed bottom-0 left-0 z-0 w-full h-[260px] sm:h-[280px] md:h-[320px] overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 text-primary-content"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            ref={bgTextRef}
            className="select-none tracking-tight leading-none text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[8vw] [font-family:Montserrat] [font-weight:900] text-white/20"
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 p-10">
          <aside className="flex flex-col items-center space-y-3">
            <img
              src="/footer-2.png"
              alt="Logo"
              className="h-25 w-25 object-contain"
            />
            <p className="text-center text-white">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </aside>
        </div>
      </footer>
    </>
  );
}
