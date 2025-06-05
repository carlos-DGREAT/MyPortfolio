function Banner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex w-full z-0"
      style={{ backgroundImage: 'url("/Banner.png")' }}
    >
      <div className="flex w-full">
        {/* Left div */}
        <div className=" w-1/2 flex-1 flex flex-col justify-center text-black xl:pl-40 lg:pl-20 pl-20">
          <p className="text-[30px] font-bold">
            Hi, I'm Carlos Opeña
          </p>
          <h1 className="xl:text-[60px] text-[50px] font-bold mb-4 xl:w-[750px] w-[600px]  text-red-900 ">Front-end Developer + UI/UX Designer</h1>
          <p className="text-lg/relaxed max-w-2xl">
          Welcome to my landing page! I’m a Web Developer and UI/UX Designer with a 
          passion for creating engaging and user-friendly websites. This page showcases 
          some of my work and the skills I’ve developed along the way!
          </p>
          <button className=" mt-10 px-8 py-2 border w-fit border-red-900 text-red-900 hover:bg-red-950 hover:text-white rounded">
            Download CV
          </button>
        </div>

        {/* Right div */}
        <div className="w-1/2 flex items-center">
          <img
            src="/Profile 1.png"
            alt="profile"
            className="absolute bottom-0  2xl:right-24 xl:right-10 lg:right-2 h-[95vh] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
