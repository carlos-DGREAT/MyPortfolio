import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import MyTechStack from './components/MyTechStack';
import AboutMe from './components/AboutMe';
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import GitHubContributions2026 from "./components/GitHubContributions";
import { useEffect, useRef, useState } from "react";

function App() {
  const startedRef = useRef(false);
  const [loaderPhase, setLoaderPhase] = useState("enter");

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const minMs = 1100;
    const exitMs = 520;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const preloadImage = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = src;
      });

    const preload = async () => {
      await Promise.all([
        document.fonts?.ready ?? Promise.resolve(),
        preloadImage("/Banner.png"),
        preloadImage("/Profile 1.png"),
        preloadImage("/logo-5.png"),
      ]);

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minMs - elapsed);
      if (remaining) await new Promise((r) => setTimeout(r, remaining));

      setLoaderPhase("exit");
      setTimeout(() => {
        setLoaderPhase("done");
        document.body.style.overflow = previousOverflow;
      }, exitMs);
    };

    preload();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="relative">
      {loaderPhase !== "done" && <LoadingScreen phase={loaderPhase} />}
      <div className="relative z-10 bg-white">
        <Navbar />

        <section id="home">
          <Banner />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <div className="space-y-10 sm:space-y-16 md:space-y-20">
          <section id="about" className="scroll-mt-20">
            <AboutMe />
          </section>

          <section id="portfolio" className="scroll-mt-20">
            <Portfolio />
          </section>

          <section id="github" className="scroll-mt-20 px-4 md:px-10 max-w-7xl mx-auto w-full">
            <GitHubContributions2026 username="Carlos-Opena" />
          </section>

          <section id="skills" className="scroll-mt-20">
            <MyTechStack />
          </section>

          <section id="resume" className="scroll-mt-20">
            <Timeline />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </div>
      </div>

      <div
        id="footer-reveal"
        aria-hidden="true"
        className="relative z-10 h-[260px] sm:h-[280px] md:h-[320px]"
      />

      <Footer />
    </div>
  );
}

export default App;
