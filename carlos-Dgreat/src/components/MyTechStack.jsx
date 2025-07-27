export default function MyTechStack() {
  const techStacks = [
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
  ];

  return (
    <div className="w-full overflow-hidden py-14 space-y-10">
      <p className="text-center text-4xl font-bold">Tech Stack & Proficiencies</p>

      {/* Row 1 - Slide Left */}
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-slide-left flex gap-6 w-max">
          {techStacks.concat(techStacks).map((tech, idx) => (
            <div key={`left-${idx}`} className="flex-shrink-0 w-44 h-48 bg-base-100 shadow-md rounded-lg flex flex-col items-center justify-center">
              <img src={tech.img} alt={tech.name} className="w-16 h-16" />
              <p className="mt-3 text-center text-base font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Slide Right (using reverse direction) */}
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-slide-right flex gap-6 w-max">
          {techStacks.concat(techStacks).map((tech, idx) => (
            <div key={`right-${idx}`} className="flex-shrink-0 w-44 h-48 bg-base-100 shadow-md rounded-lg flex flex-col items-center justify-center">
              <img src={tech.img} alt={tech.name} className="w-16 h-16" />
              <p className="mt-3 text-center text-base font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
