import { useEffect, useRef, useState } from "react";
import { Monitor, Server, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Fast, responsive UIs built with React and Tailwind CSS that look great on any device.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Reliable REST APIs and server logic with Node.js, Express, and PostgreSQL.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces and Figma prototypes focused on real user experience.",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "End-to-end solutions from database to deployment — built to scale.",
  },
];

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wide = window.innerWidth > 1024;
      if (wide) {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          const rect = sectionRef.current?.getBoundingClientRect();
          const sectionVisible = rect && rect.top < window.innerHeight && rect.bottom > 0;
          setScrolled(!!sectionVisible);
        }
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
      handleScroll();
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-center items-center w-full py-12 lg:py-14 xl:py-16 lg:min-h-[55vh] xl:min-h-[62vh] 2xl:min-h-[70vh] portrait:lg:min-h-[380px] portrait:xl:min-h-[420px] portrait:2xl:min-h-[460px] bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div
        className={`z-10 w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12 xl:py-16 transition-all duration-700 ease-out
          ${
            isWideScreen && scrolled
              ? "lg:mt-[-10rem] xl:mt-[-13rem] 2xl:mt-[-17rem] opacity-100"
              : isWideScreen
              ? "mt-0 opacity-0"
              : "mt-0 opacity-100"
          }
          ${isWideScreen ? "lg:rounded-[40px] xl:rounded-[60px] 2xl:rounded-[80px]" : "rounded-none"}
          ${
            isWideScreen
              ? "bg-gradient-to-b from-gray-900 via-black to-red-950/50"
              : "bg-gradient-to-b from-gray-900 via-black to-red-950/50"
          }
          shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`}
      >
        {/* Title */}
        <div className="text-center text-white mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-red-400/90 mb-3">What I Do</p>
          <p className="text-xl lg:text-2xl xl:text-3xl font-bold tracking-tight">From Design to Deployment</p>
          <div className="mt-4 mx-auto w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 text-white w-full lg:items-start">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOffset = i % 2 === 1;
            return (
              <div
                key={service.title}
                className={`group flex flex-col items-center text-center w-full border border-white/10 bg-white/5 rounded-2xl px-6 py-8 hover:border-red-800/50 hover:bg-white/[0.08] transition-all duration-300 ${
                  isOffset ? "lg:mt-10" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-red-950/60 border border-red-900/40 flex items-center justify-center mb-4 group-hover:bg-red-900/70 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={1.5} />
                </div>
                <p className="relative font-semibold text-lg lg:text-xl xl:text-2xl py-2 sm:py-3 tracking-wide transition-all duration-300 ease-out group-hover:tracking-wider after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 after:ease-out group-hover:after:w-14">
                  {service.title}
                </p>
                <p className="text-sm lg:text-sm xl:text-base text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
