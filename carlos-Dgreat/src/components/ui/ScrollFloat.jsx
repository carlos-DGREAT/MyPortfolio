import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  containerClassName = '',
  textClassName = '',
  containerTag = 'div',
  scrub = true,
  delay = 0,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    // Check if we have split characters (text mode) or just children (block mode)
    let targets = el.querySelectorAll('.split-char');
    
    // If no split chars found, animate the container itself (or children if needed, but here let's animate container)
    // However, if we animate container, we might want to animate its direct children if it's a list?
    // Let's assume if no split-char, we animate the element itself as a block float.
    if (targets.length === 0) {
      targets = [el];
    }
    
    const animation = gsap.fromTo(
      targets,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
        delay: delay, // Apply delay prop
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: scrub, // Use scrub prop
          toggleActions: scrub ? undefined : 'play none none reverse', // Enable toggleActions if scrub is false
        }
      }
    );

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, children, scrub, delay]); // Added children dependency to re-run if content changes

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="split-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const Tag = containerTag;

  return (
    <Tag ref={containerRef} className={`${containerClassName}`}>
      <span className={textClassName}>
        {typeof children === 'string' ? splitText(children) : children}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
