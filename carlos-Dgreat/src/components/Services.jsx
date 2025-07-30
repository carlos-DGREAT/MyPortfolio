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
    <div className="flex justify-center items-center w-full min-h-[70vh] bg-gradient-to-b from-red-950 via-stone-950 to-red-950">
      <div
        className={`z-10 w-full max-w-7xl px-6 md:px-10 py-10 transition-all duration-700 ease-out
          ${
            isWideScreen && scrolled
              ? "mt-[-20rem] opacity-100"
              : isWideScreen
              ? "mt-0 opacity-0"
              : "mt-0 opacity-100"
          }
          ${isWideScreen ? "rounded-[80px]" : "rounded-none"}
          ${
            isWideScreen
              ? "bg-[radial-gradient(ellipse_70.11%_336.83%_at_50.00%_50.00%,_#932929_0%,_#0B0B0B_50%,_#581E1E_100%)]"
              : "bg-gradient-to-b from-red-950 via-stone-950 to-red-950"
          }
          shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`}
      >
        {/* Title */}
        <div className="text-center justify-center text-white">
          <p className="text-[28px] font-bold">What I can provide?</p>
          <hr className="bg-primary my-3 border-2 w-[220px] mx-auto" />
        </div>

        {/* Services Cards */}
        <div className="flex flex-row max-[1024px]:flex-col items-center justify-between gap-12 mt-16 text-white">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src="/icon-3.png" alt="icon1" className="w-[60px] h-[60px] mb-4" />
            <p className="font-semibold text-2xl py-3">UI/UX DESIGN</p>
            <p className="text-[18px]">
              I create user-friendly designs using Figma and can also use Photoshop to edit photos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src="/icon-1.png" alt="icon2" className="w-[60px] h-[60px] mb-4" />
            <p className="font-semibold text-2xl py-3">Front-end Development</p>
            <p className="text-[18px]">
              I work with HTML, CSS Frameworks, JavaScript, WordPress, and Bootstrap for responsive
              web development, along with knowledge in PHP for database management.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img src="/icon-2.png" alt="icon3" className="w-[60px] h-[60px] mb-4" />
            <p className="font-semibold text-2xl py-3">Responsiveness</p>
            <p className="text-[18px]">
              I focus on developing responsive designs that adapt smoothly to different screen sizes,
              ensuring an optimal user experience on any device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
