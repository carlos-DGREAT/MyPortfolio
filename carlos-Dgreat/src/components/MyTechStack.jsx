export default function MyTechStack() {
  const allTechs = [
    { name: "HTML", img: "/html-5.svg" },
    { name: "CSS", img: "/css3.svg" },
    { name: "JavaScript", img: "/javascript.svg" },
    { name: "React", img: "/react.svg" },
    { name: "Tailwind", img: "/tailwindcss.svg" },
    { name: "Bootstrap", img: "/bootstrap.svg" },
    { name: "Node.js", img: "/nodejs.svg" },
    { name: "PHP", img: "/php.svg" },
    { name: "SQL", img: "/mysql.svg" },
    { name: "GitHub", img: "/github.svg" },
    { name: "GitLab", img: "/gitlab.svg" },
    { name: "Figma", img: "/figma.svg" },
    { name: "Photoshop", img: "/photoshop.svg" },
    { name: "Canva", img: "/canva.svg" },
    { name: "WordPress", img: "/wordpress.svg" },
    { name: "TypeScript", img: "/typescript.svg" },
    { name: "Next.js", img: "/nextjs.svg" },
    { name: "Elementor Pro", img: "/elementor.svg" },
  ];

  return (
    <div className="w-full py-10">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 md:mb-14 bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent">Tech Stack & Proficiencies</h2>

          <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 justify-center">
            {allTechs.map((tech, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center"
              >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-110">
                      <img src={tech.img} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-4 px-3 py-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

