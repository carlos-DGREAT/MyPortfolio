export default function AboutMe() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full pt-20 pb-10">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto gap-10">

          {/* Image Left (desktop), but on small screens order after text */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2 md:order-1">
            <img
              src="/About-me1.png"
              alt="About Me"
              className="w-4/6 md:w-5/6 lg:w-full"
            />
          </div>

          {/* Text Right (desktop), always first on mobile/tablet */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900 order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight">
              ABOUT ME
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              Hi! I'm Carlos, a passionate Front-End Developer focused on creating intuitive user interfaces and seamless web experiences. I love working with modern tools like React, Tailwind CSS, and more.
            </p>
          </div>
        </div>
      </div>

      {/* GOALS Section */}
      <div className="relative flex justify-center w-full pt-10 pb-20">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto gap-10">

          {/* Text Left (desktop), always first on mobile/tablet */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900 order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight">
              GOALS
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              My goal is to continuously grow as a front-end developer, stay updated with the latest technologies, and build high-quality, accessible, and scalable web applications that make a difference.
            </p>
          </div>

          {/* Image Right (desktop), but on small screens order after text */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2">
            <img
              src="/GOAL-1.png"
              alt="Goals"
              className="w-4/6 md:w-5/6 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
