export default function AboutMe() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full py-20">
        <div className="flex flex-col gap-10 md:flex-row w-full max-w-screen-xl mx-auto">
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <img
              src="/About-me1.png"
              alt="About Me"
              className="w-4/6 md:w-5/6 lg:w-full"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900">
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
      <div className="relative flex justify-center w-full py-20">
        <div className="flex flex-col gap-10 md:flex-row w-full max-w-screen-xl mx-auto">

          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight">
              GOALS
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              My goal is to continuously grow as a front-end developer, stay updated with the latest technologies, and build high-quality, accessible, and scalable web applications that make a difference.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <img
              src="/About-me1.png"
              alt="Goals"
              className="w-4/6 md:w-5/6 lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
