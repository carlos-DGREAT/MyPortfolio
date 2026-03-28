import { useState, useEffect } from "react";
import ShinyText from './ShinyText';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="drawer fixed top-0 left-0 w-full z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div
        className={`drawer-content transition-all duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-transparent"
        } h-20 flex items-center`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-24">
          {/* Logo */}
          <a href="#home" className={`flex items-center space-x-2 text-xl font-bold group ${isScrolled ? 'text-white' : 'text-black'}`}>
            <img src="/logo-5.png" alt="Logo" className="h-13 w-13" />
            <ShinyText text="CARLOS.DGREAT" speed={3} baseColor={isScrolled ? '#ffffff' : '#000000'} shineColor={isScrolled ? '#fca5a5' : '#7f1d1d'} className="group-hover:text-primary" />
          </a>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex space-x-8 text-lg font-display ${isScrolled ? 'text-white' : 'text-black'}`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors ${isScrolled ? 'hover:text-red-300' : 'hover:text-red-900'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center gap-4 ml-8">
            <a
              href="https://www.linkedin.com/in/carlosopeña"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:scale-110 transform animate-icon-shine ${isScrolled ? 'text-white hover:text-red-300' : 'text-black hover:text-red-900'}`}
              title="LinkedIn"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Carlos-Opena"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:scale-110 transform animate-icon-shine ${isScrolled ? 'text-white hover:text-red-300' : 'text-black hover:text-gray-600'}`}
              title="GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:openacarlos@gmail.com"
              className={`transition-colors hover:scale-110 transform animate-icon-shine ${isScrolled ? 'text-white hover:text-red-300' : 'text-black hover:text-gray-600'}`}
              title="Gmail"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
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
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

        <div className="bg-base-200 min-h-full w-80 p-4 text-black relative">
          {/* Logo at Top */}
          <div className="flex items-center space-x-2 text-xl font-bold text-black group mb-8">
            <img src="/logo-5.png" alt="Logo" className="h-10 w-10" />
            <ShinyText text="CARLOS.DGREAT" speed={3} baseColor="#000000" shineColor="#555555" className="group-hover:text-primary" />
          </div>

          {/* Close Button */}
          <label
            htmlFor="my-drawer"
            className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </label>
            {/* Mobile Nav Links */}
             <ul className="menu text-base-content">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-lg mb-2">{item.label}</a>
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
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
