export default function AboutMe() {
  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* ABOUT ME Section */}
      <div className="relative flex justify-center w-full py-16">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-10 px-4 md:px-6">
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
              Hi, I’m Carlos Opena, a Web Developer specializing in responsive and user-friendly websites. I’m passionate about improving my skills and working toward becoming a Software Engineer. I create websites and applications that are reliable, efficient, and easy to use.
            </p>
          </div>
        </div>
      </div>

      {/* GOALS Section */}
      <div className="relative flex justify-center w-full mb-16">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-gray-900 order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight">
              GOALS
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
              I help bring your ideas to life by building websites and applications that are reliable, efficient, and easy to use. I focus on understanding your needs and delivering results that achieve your objectives and meet user expectations.
            </p>
          </div>
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 order-2">
              <img
                src="/Goals-3.png"
                alt="Goals"
                className="mx-auto w-full h-auto object-contain
                          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
