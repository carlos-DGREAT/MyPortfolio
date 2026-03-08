import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children, delay = 0, duration = 1, className = '', tag = 'div', direction = 'up', distance = 30, ...props }) => {
  const ref = useRef(null);
  const Tag = tag;

  useGSAP(() => {
    const el = ref.current;
    
    let yOffset = 0;
    let xOffset = 0;
    
    if (direction === 'up') yOffset = distance;
    if (direction === 'down') yOffset = -distance;
    if (direction === 'left') xOffset = distance;
    if (direction === 'right') xOffset = -distance;

    gsap.fromTo(
      el,
      { opacity: 0, y: yOffset, x: xOffset },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: ref });

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
};

export default FadeIn;
