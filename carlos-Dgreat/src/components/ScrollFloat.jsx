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
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const chars = el.querySelectorAll('.split-char');
    if (chars.length === 0) return; 
    // If no chars found, maybe animate the container itself or children? 
    // But for now, stick to split-char logic.
    
    const animation = gsap.fromTo(
      chars,
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
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        }
      }
    );

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="split-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const Tag = containerTag;

  return (
    <Tag ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <span className={textClassName}>
        {typeof children === 'string' ? splitText(children) : children}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
