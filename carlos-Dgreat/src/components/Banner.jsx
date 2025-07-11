export default function Banner() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex w-full z-0"
      style={{ backgroundImage: 'url("/Banner.png")' }}
    >
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left div */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left text-black px-6 sm:px-10 md:px-16 lg:pl-20 xl:pl-40 py-10">
          <p className="text-2xl sm:text-3xl font-bold font-body mb-2">
            Hi, I'm Carlos
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-red-900 leading-tight">
            Front-end Developer + UI/UX Designer
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
            Welcome to my landing page! I’m a Web Developer and UI/UX Designer with a
            passion for creating engaging and user-friendly websites. This page showcases
            some of my work and the skills I’ve developed along the way!
          </p>
          <button className="mt-8 px-6 py-2 border w-fit border-red-900 text-red-900 hover:bg-red-950 hover:text-white rounded transition">
            Download CV
          </button>
        </div>

        {/* Right div (hidden below 1024px) */}
        <div className="hidden lg:flex flex-1 justify-end items-end relative">
          <img
            src="/Profile 1.png"
            alt="profile"
            className="h-[80vh] xl:h-[90vh] 2xl:h-[95vh] object-cover z-10 absolute bottom-0 right-10 xl:right-20 2xl:right-24"
          />
        </div>
      </div>
    </div>
  );
}
