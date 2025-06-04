function Banner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex w-full z-0"
      style={{ backgroundImage: 'url("/Banner.png")' }}
    >
      <div className="flex w-full">
        {/* Left div */}
        <div className=" w-1/2 flex-1 flex flex-col justify-center text-black ml-28">
          <p className="text-base font-semibold">
            Hi,
          </p>
          <h1 className="text-5xl md: font-bold mb-4">I am Carlos Opeña</h1>
          <p className="text-lg max-w-2xl">
          Welcome to my landing page! I’m a Web Developer and UI/UX Designer with a 
          passion for creating engaging and user-friendly websites. This page showcases 
          some of my work and the skills I’ve developed along the way!
          </p>
        </div>

        {/* Right div */}
        <div className="w-1/2 flex items-center">
          <img
            src="/Profile 1.png"
            alt="profile"
            className="absolute bottom-0 right-14 h-[95vh] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
