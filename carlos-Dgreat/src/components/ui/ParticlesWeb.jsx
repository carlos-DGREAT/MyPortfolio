import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesWeb() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: isMobile ? 30 : 60,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: 'grab' },
        onClick: { enable: !isMobile, mode: 'push' },
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.6 } },
        push: { quantity: 3 },
      },
    },
    particles: {
      color: { value: '#7f1d1d' },
      links: {
        color: '#7f1d1d',
        distance: isMobile ? 100 : 140,
        enable: true,
        opacity: isMobile ? 0.2 : 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.6 : 1.2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'out' },
      },
      number: { value: isMobile ? 30 : 60, density: { enable: true } },
      opacity: { value: isMobile ? 0.3 : 0.4 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: isMobile ? 2 : 3 } },
    },
    detectRetina: !isMobile,
  }), [isMobile]);

  if (!init) return null;

  return (
    <Particles
      id="banner-particles"
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  );
}
