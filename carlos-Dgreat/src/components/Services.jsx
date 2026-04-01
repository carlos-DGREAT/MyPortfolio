import { useEffect, useState } from "react";

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    const handleScroll = () => {
      if (isWideScreen) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isWideScreen]);

  return (
    <div className="flex justify-center items-center w-full py-12 lg:py-14 xl:py-16 lg:min-h-[55vh] xl:min-h-[62vh] 2xl:min-h-[70vh] bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div
        className={`z-10 w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-14 py-6 sm:py-10 lg:py-12 xl:py-16 transition-all duration-700 ease-out
          ${
            isWideScreen && scrolled
              ? "lg:mt-[-14rem] xl:mt-[-18rem] 2xl:mt-[-22rem] opacity-100"
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
        <div className="text-center justify-center text-white">
          <p className="text-xl lg:text-2xl xl:text-3xl font-bold">What I can provide?</p>
          <hr className="bg-primary my-3 border-2 w-[220px] mx-auto" />
        </div>

        {/* Services Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-8 xl:gap-12 2xl:gap-16 mt-8 sm:mt-12 lg:mt-14 xl:mt-16 text-white w-full">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-xs w-full group">
            <img src="/icon-3.png" alt="icon1" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mb-4" />
            <p className="relative font-semibold text-lg lg:text-xl xl:text-2xl py-2 sm:py-3 tracking-wide transition-all duration-300 ease-out group-hover:tracking-wider after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 after:ease-out group-hover:after:w-14">
              UI/UX DESIGN
            </p>
            <p className="text-sm lg:text-sm xl:text-base">
              I create user-friendly designs using Figma and can also use Photoshop to edit photos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-xs w-full group">
            <img src="/icon-1.png" alt="icon2" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mb-4" />
            <p className="relative font-semibold text-lg lg:text-xl xl:text-2xl py-2 sm:py-3 tracking-wide transition-all duration-300 ease-out group-hover:tracking-wider after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 after:ease-out group-hover:after:w-14">
              Front-end Development
            </p>
            <p className="text-sm lg:text-sm xl:text-base">
              I develop dynamic and responsive web applications with clean, maintainable code that performs reliably on any device.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-xs w-full group">
            <img src="/icon-2.png" alt="icon3" className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mb-4" />
            <p className="relative font-semibold text-lg lg:text-xl xl:text-2xl py-2 sm:py-3 tracking-wide transition-all duration-300 ease-out group-hover:tracking-wider after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white/70 after:transition-all after:duration-300 after:ease-out group-hover:after:w-14">
              Responsiveness
            </p>
            <p className="text-sm lg:text-sm xl:text-base">
              I ensure designs and applications adapt to different screen sizes, delivering a consistent and efficient experience for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
