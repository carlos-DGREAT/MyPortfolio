import { useState } from "react";
import { ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import GitHubContributions2026 from './GitHubContributions2026';

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Website Landing Page",
      category: "Web App",
      image: "project-2-mobile.png",
      description:
        "This project was part of my role as a web developer at Dan Gordon Enterprise. It involved rebuilding a client’s mediation website from scratch. The site was designed in Figma and implemented using WordPress with custom CSS. The focus was on creating a clean, professional landing page that clearly presents services and encourages client inquiries.",
      role: "Frontend Developer",
      tools: ["WordPress", "CSS", "Figma"],
      deliverables: [
        "Landing page",
        "Responsive assets",
        "Accessibility review",
      ],
      gallery: [
        "project-2-desktop.png",
        "project-2-details.png",
        "project-2-mobile.png",
      ],
    },
    {
      id: 2,
      title: "Plan & Services page",
      category: "Web Design",
      image: "project-4-mobile.png",
      description:
        "Developed and rebuilt the Services and Plans & Pricing pages for the LArealtor website as part of my role at Dan Gordon Enterprise. The pages were designed in Figma and implemented using WordPress with custom HTML, CSS, and JavaScript. Focused on creating clear layouts, interactive elements, and responsive design to improve usability and present services effectively.",
      role: "Frontend Developer",
      tools: ["Wordpress", "Javascript", "Figma", "CSS"],
      deliverables: ["Portfolio site", "Animations", "Deployment"],
      gallery: ["project-4-desktop.png", "project-4-mobile.png"],
    },
    {
      id: 3,
      title: "Outsourcing Website",
      category: "Web Design",
      image: "project-3-mobile.png",
      description:
        "This project was a freelance gig for Seva Solutions, where I built their website entirely from scratch. I managed the project end-to-end, including setting up hosting via cPanel, designing and implementing the site in WordPress, and customizing it with CSS to match the client’s branding and functional needs. The focus was on creating a fully responsive, user-friendly website that effectively showcases their services and provides a seamless experience for visitors.",
      role: "UI/UX Designer",
      tools: ["Figma", "Illustrator"],
      deliverables: ["Figma prototype", "Exported assets", "Design spec"],
      gallery: ["project-3-desktop.png", "project-3-mobile.png"],
    },
    {
      id: 4,
      title: "My Portfolio",
      category: "Figma Design",
      image: "MyPortfolio.PNG",
      description:
        "Figma mockups and prototypes for a portfolio site with interactive states.",
      role: "Product Designer",
      tools: ["Figma"],
      deliverables: ["Interactive prototype", "Design system"],
      gallery: ["MyPortfolio.PNG"],
    },
    {
      id: 5,
      title: "DENR-Reservation System",
      category: "Web App",
      image: "DENR-reservation System.PNG",
      description:
        "Reservation system built for managing bookings and schedules with validation and admin panel.",
      role: "Full-stack Engineer",
      tools: ["React", "Node", "Express", "MongoDB"],
      deliverables: ["Reservation UI", "Admin dashboard", "API integration"],
      gallery: ["DENR-dashboard.png", "DENR-reservation System.PNG"],
    },
    {
      id: 6,
      title: "Web Application Utilizing a Deep Learning Model",
      category: "Web App",
      image: "EcoSense.png",
      description:
        "This thesis project involved developing a web application that integrates a deep learning model to conduct pine tree and crop plot census using drone-captured imagery for DENR-CAR. The application automates image analysis, providing accurate and efficient mapping of vegetation. I handled both the backend model integration with TensorFlow and Flask, and the frontend interface using React, ensuring a seamless experience for users to visualize and interpret results.",
      role: "ML Engineer / Frontend",
      tools: ["Python", "Flask", "TensorFlow", "React"],
      deliverables: ["Model integration", "Inference UI", "Performance report"],
      gallery: ["EcoSense-result.png", "EcoSense.png"],
    },
    {
      id: 7,
      title: "Personal Portfolio V1",
      category: "Web Design",
      image: "portfolio-1.PNG",
      description:
        "First version of my personal portfolio website showcasing my frontend development projects and UI design skills. Built with responsive layout principles and focused on clean visual hierarchy.",
      role: "Frontend Developer",
      tools: ["React", "Tailwind CSS"],
      deliverables: ["Portfolio UI", "Responsive layout"],
      gallery: ["portfolio-1.PNG"],
    },
  ];

  // Show only first 6 items unless 'showAll' is true
  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

  // Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-6 bg-gray-50">
      
      {/* GitHub Contributions 2026 Section */}
      <GitHubContributions2026 username="Carlos-Opena" />
      
      {/* Title */}
      <FadeIn className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-red-900 mb-4">
          My Recent Projects
        </h2>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {displayedItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            onClick={() => setSelectedProject(item)}
          >
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LinkIcon className="w-5 h-5 text-red-900" />
                </div>
              </div>
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mt-3 text-gray-900 group-hover:text-red-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-3 text-sm flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {portfolioItems.length > 6 && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 bg-red-900 text-white rounded-full hover:bg-red-950 transition-all shadow-md"
          >
            {showAll ? (
              <>
                See Less <ChevronUp size={20} />
              </>
            ) : (
              <>
                See More <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          
          {/* Modal Content */}
          <div 
            className="bg-white w-full max-w-6xl max-h-[92vh] overflow-y-auto shadow-2xl relative rounded-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition z-10"
            >
              ✕
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 bg-gray-100 p-6 sm:p-8 flex flex-col gap-4 lg:sticky lg:top-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg shadow-md object-contain max-h-[520px]"
                />
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-2">
                    {selectedProject.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`screenshot-${idx}`}
                        className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-80 border border-gray-300 flex-shrink-0"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-red-900 font-medium text-lg">{selectedProject.category}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Role</h4>
                    <p className="text-gray-800">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Tools</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">About</h4>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Deliverables</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                      {selectedProject.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href="#"
                    className="block w-full text-center bg-red-900 text-white font-bold py-3 rounded-lg hover:bg-red-950 transition-colors shadow-md"
                  >
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
