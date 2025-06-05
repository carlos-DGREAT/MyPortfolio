import { useEffect, useState } from "react";

export default function Services() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-[70vh] bg-gradient-to-b from-red-950 via-stone-950 to-red-950">
      <div
        className={`z-10 w-[80%] h-[550px] px-35 rounded-[80px] transition-all duration-700 ease-out
        ${
          scrolled
            ? "mt-[-20rem] opacity-100"
            : "mt-0 opacity-0"
        }
        bg-[radial-gradient(ellipse_70.11%_336.83%_at_50.00%_50.00%,_#932929_0%,_#0B0B0B_50%,_#581E1E_100%)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]`}
      >
        {/* Content here */}
        <div className="text-center justify-center mt-16">
            <p className="text-[28px] font-bold text-white">
               What I can provide?
            </p>
            <hr className="my-3 border-2 w-[220px] mx-auto "></hr>
        </div>
        <div className="flex justify-between mt-20">
            <div className="flex flex-col items-center text-center max-w-xs">
                <img 
                src="/icon-3.png"
                alt="icon1"
                className="w-[60px] h-[60px] mb-4"
                />
                <p className="font-semibold text-2xl py-3">UI/UX DESIGN</p>
                <p className="text-[18px]">
                I create user-friendly designs using Figma and can also use Photoshop to 
                edit photos.
                </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs">
                <img 
                src="/icon-1.png"
                alt="icon2"
                className="w-[60px] h-[60px] mb-4"
                />
                <p className="font-semibold text-2xl py-3">Front-end Development</p>
                <p className="text-[18px]">
                I work with HTML, CSS Frameworks, JavaScript, WordPress, and Bootstrap for responsive 
                web development, along with knowledge in PHP for database management.
                </p>
            </div>

            <div className="flex flex-col items-center text-center max-w-xs">
                <img 
                src="/icon-2.png"
                alt="icon3"
                className="w-[60px] h-[60px] mb-4"
                />
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