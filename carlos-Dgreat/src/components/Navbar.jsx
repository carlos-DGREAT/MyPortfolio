import { useState, useEffect } from "react";
import ShinyText from './ui/ShinyText';

const navItems = [
  { label: "Services", href: "#services", offset: 311, mobileOffset: 20  },
  { label: "About",    href: "#about",    offset: 50,   mobileOffset: 80  },
  { label: "Portfolio",href: "#portfolio", offset: 61,  mobileOffset: 60  },
  { label: "Resume",   href: "#resume",   offset: 0, mobileOffset: 35  },
  { label: "Contact",  href: "#contact",  offset: 20,  mobileOffset: 30  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 300) setActiveItem('');
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, item) => {
    e.preventDefault();
    const el = document.getElementById(item.href.slice(1));
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    const appliedOffset = isMobile ? (item.mobileOffset ?? 60) : (item.offset ?? 96);
    const top = el.getBoundingClientRect().top + window.scrollY - appliedOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
    );
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="drawer fixed top-0 left-0 w-full z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div
        className={`drawer-content relative transition-all duration-300 ${
          isScrolled ? "bg-gradient-to-r from-gray-900 via-black to-red-950 shadow-md" : "bg-transparent"
        } h-20 flex items-center`}
      >
        {/* Running glow border — visible only when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none">
            <div className="absolute top-0 h-full w-1/3 animate-navbar-glow" style={{ background: 'linear-gradient(90deg, transparent, #ef4444, #fca5a5, #ef4444, transparent)' }} />
          </div>
        )}
        <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
          {/* Logo */}
          <a href="#home" className={`flex items-center space-x-2 text-sm lg:text-base xl:text-xl font-bold group ${isScrolled ? 'text-white' : 'text-black'}`}>
            <img src="/logo-5.png" alt="Logo" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-9 lg:w-9 xl:h-11 xl:w-11" />
            <ShinyText text="CARLOS.DGREAT" speed={3} baseColor={isScrolled ? '#ffffff' : '#000000'} shineColor={isScrolled ? '#fca5a5' : '#7f1d1d'} className="group-hover:text-primary" />
          </a>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex lg:space-x-4 xl:space-x-8 text-sm xl:text-lg font-display ${isScrolled ? 'text-white' : 'text-black'}`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item)}
                className={`transition-all duration-200 ${
                  activeItem === item.href
                    ? 'text-red-400 font-semibold'
                    : `${isScrolled ? 'hover:text-red-300' : 'hover:text-red-900'}`
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center lg:gap-2 xl:gap-3 lg:ml-4 xl:ml-8">
            <a href="https://www.linkedin.com/in/carlosopeña" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="btn-3d inline-flex rounded-full">
              <span className="social-icon-circle lg:!w-8 lg:!h-8 xl:!w-9 xl:!h-9">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
            </a>
            <a href="https://github.com/Carlos-Opena" target="_blank" rel="noopener noreferrer" title="GitHub" className="btn-3d inline-flex rounded-full">
              <span className="social-icon-circle lg:!w-8 lg:!h-8 xl:!w-9 xl:!h-9">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </a>
            <a href="mailto:openacarlos@gmail.com" title="Gmail" className="btn-3d inline-flex rounded-full">
              <span className="social-icon-circle lg:!w-8 lg:!h-8 xl:!w-9 xl:!h-9">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </span>
            </a>
            <a href="https://www.instagram.com/carlos_thegreatz/" target="_blank" rel="noopener noreferrer" title="Instagram" className="btn-3d inline-flex rounded-full">
              <span className="social-icon-circle lg:!w-8 lg:!h-8 xl:!w-9 xl:!h-9">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Drawer Toggle */}
          <div className="flex lg:hidden">
            <label
              htmlFor="my-drawer"
              aria-label="open sidebar"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isScrolled ? '#ffffff' : '#000000'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer Sidebar for Mobile */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="bg-base-200 min-h-full w-[85vw] sm:w-80 p-4 text-black relative">
          {/* Logo at Top */}
          <div className="flex items-center space-x-2 font-bold text-black group mb-4 sm:mb-6">
            <img src="/logo-5.png" alt="Logo" className="h-7 w-7 sm:h-10 sm:w-10" />
            <span className="text-sm sm:text-base">
              <ShinyText text="CARLOS.DGREAT" speed={3} baseColor="#000000" shineColor="#555555" className="group-hover:text-primary" />
            </span>
          </div>

          {/* Close Button */}
          <label
            htmlFor="my-drawer"
            className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </label>
            {/* Mobile Nav Links */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Menu</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
             <ul className="menu text-base-content">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item)}
                    className={`text-base sm:text-lg mb-1 border-l-4 transition-all duration-200 rounded-none rounded-r-lg ${
                      activeItem === item.href
                        ? 'border-red-900 bg-red-900/10 text-red-900 font-semibold'
                        : 'border-transparent hover:border-red-900 hover:bg-red-900/5 hover:text-red-900'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {activeItem === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-900 inline-block" />
                      )}
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
              
              {/* Social Media Icons for Mobile */}
              <li className="mt-6 pt-6 border-t border-gray-300">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">Connect:</span>
                  <a
                    href="https://www.linkedin.com/in/carlosopeña"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Carlos-Opena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:openacarlos@gmail.com"
                    className="text-black hover:text-gray-700 transition-colors"
                    title="Gmail"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/carlos_thegreatz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700 transition-colors"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
