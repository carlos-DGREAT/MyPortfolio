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

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } h-20 flex items-center`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-24">
        <a className="flex items-center space-x-2 text-xl font-bold text-black">
          <img src="/logo-5.png" alt="Logo" className="h-13 w-13" />
          <span>CARLOS.DGREAT</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 text-lg font-display text-black">
          {["Services", "About", "Portfolio", "Resume", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-[#932929] transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        <a className="hidden lg:inline-flex btn bg-primary text-white px-10 py-3 rounded-full">
          Hire Me
        </a>

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
          >
            {["Services", "About", "Portfolio", "Resume", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a className="hover:text-[#932929]">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
