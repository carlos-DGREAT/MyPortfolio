export default function MyTechStack() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <p className="text-center text-4xl py-14 font-bold">My Skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          { name: "HTML", img: "/html-5.svg" },
          { name: "CSS", img: "/css3.svg" },
          { name: "JavaScript", img: "/javascript.svg" },
          { name: "React", img: "/react.svg" },
          { name: "Tailwind", img: "/tailwindcss.svg" },
          { name: "Bootstrap", img: "/bootstrap.svg" },
          { name: "WordPress", img: "/wordpress.svg" },
          { name: "SQL", img: "/mysql.svg" },
          { name: "GitLab", img: "/gitlab.svg" },
          { name: "GitHub", img: "/github.svg" },
          { name: "Figma", img: "/figma.svg" },
          { name: "Photoshop", img: "/photoshop.svg" },
          { name: "Canva", img: "/canva.svg" },
          { name: "PHP", img: "/php.svg" },
          { name: "Node.js", img: "/nodejs.svg" },
        ].map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="card bg-base-100 shadow-md w-44 h-48 flex items-center justify-center">
              <img src={tech.img} alt={tech.name} className="w-16 h-16" />
            </div>
            <p className="mt-3 text-center text-base font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
