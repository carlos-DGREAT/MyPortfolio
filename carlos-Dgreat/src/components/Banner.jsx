function Banner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex w-full"
      style={{ backgroundImage: 'url("/Banner.png")' }}
    >
      <div className="flex max-w-6xl w-full px-6">
        {/* Left div */}
        <div className=" w-1/2 flex-1 flex flex-col justify-center text-black p-6">
          <h1 className="text-5xl font-bold mb-4">Carlos Opeña</h1>
          <p className="text-lg max-w-md">
            This is a short description about yourself, what you do, your
            skills, or your portfolio highlights.
          </p>
        </div>

        {/* Right div */}
        <div className="w-1/2 flex items-center">
          <img
            src="/Profile 1.png"
            alt="profile"
            className="absolute bottom-0 right-0 h-[90vh] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
