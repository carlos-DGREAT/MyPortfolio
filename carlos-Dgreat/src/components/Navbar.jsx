import { useState, useEffect } from "react";

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
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        } h-20 flex items-center`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-24">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-black">
            <img src="/logo-5.png" alt="Logo" className="h-13 w-13" />
            <span>CARLOS.DGREAT</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 text-lg font-display text-black">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-[#932929] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn bg-primary text-white px-10 py-3 rounded-full"
          >
            Hire Me
          </a>

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
          {/* Close Button */}
          <label
            htmlFor="my-drawer"
            className="absolute top-4 right-4 btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </label>

          <ul className="menu mt-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-[#932929]"
                  onClick={() => {
                    document.getElementById("my-drawer").checked = false;
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Full-width Hire Me Button */}
          <div className="mt-6">
            <a
              href="#contact"
              onClick={() => {
                document.getElementById("my-drawer").checked = false;
              }}
              className="btn bg-primary text-white w-full rounded-[0.5rem] py-3 text-center text-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}