import { useState } from "react";
import { ChevronDown, ChevronUp, Link as LinkIcon, Figma, ExternalLink, Briefcase } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import BorderGlow from './ui/BorderGlow';

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Website Landing Page",
      category: "Web App",
      image: "project-2-mobile.png",
      description:
        "This project was part of my role as a web developer at Dan Gordon Enterprise. It involved rebuilding a client's mediation website from scratch. The site was designed in Figma and implemented using WordPress with custom CSS. The focus was on creating a clean, professional landing page that clearly presents services and encourages client inquiries.",
      role: "Frontend Developer",
      tools: ["WordPress", "CSS", "Figma"],
      deliverables: ["Landing page", "Responsive assets", "Accessibility review"],
      figmaUrl: "https://www.figma.com/proto/7XZtjjZKFRjrmW3bLavcBt/My-Portfolio?node-id=1-632&t=yDUtjLGUuU7zacPT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A632&show-proto-sidebar=1",
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
      figmaUrl: "https://www.figma.com/proto/7XZtjjZKFRjrmW3bLavcBt/My-Portfolio?node-id=1-1489&t=yDUtjLGUuU7zacPT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1489&show-proto-sidebar=1",
    },
    {
      id: 3,
      title: "Outsourcing Website",
      category: "Web Design",
      image: "project-3-mobile.png",
      description:
        "This project was a freelance gig for Seva Solutions, where I built their website entirely from scratch. I managed the project end-to-end, including setting up hosting via cPanel, designing and implementing the site in WordPress, and customizing it with CSS to match the client's branding and functional needs. The focus was on creating a fully responsive, user-friendly website that effectively showcases their services and provides a seamless experience for visitors.",
      role: "UI/UX Designer",
      tools: ["Figma", "Illustrator"],
      deliverables: ["Figma prototype", "Exported assets", "Design spec"],
      liveUrl: "https://seva.com.co/",
      figmaUrl: "https://www.figma.com/proto/7XZtjjZKFRjrmW3bLavcBt/My-Portfolio?node-id=1-2&t=yDUtjLGUuU7zacPT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
    },
    {
      id: 4,
      title: "DENR-Reservation System",
      category: "Web App",
      image: "DENR-reservation System.PNG",
      description:
        "Reservation system built for managing bookings and schedules with validation and admin panel.",
      role: "Full-stack Engineer",
      tools: ["React", "Node", "Express", "MongoDB"],
      deliverables: ["Reservation UI", "Admin dashboard", "API integration"],
      liveUrl: "https://denr-car-reservation.vercel.app/",
      imageFit: "cover",
    },
    {
      id: 5,
      title: "Web Application Utilizing a Deep Learning Model",
      category: "Web App",
      image: "EcoSense.png",
      description:
        "This thesis project involved developing a web application that integrates a deep learning model to conduct pine tree and crop plot census using drone-captured imagery for DENR-CAR. The application automates image analysis, providing accurate and efficient mapping of vegetation. I handled both the backend model integration with TensorFlow and Flask, and the frontend interface using React, ensuring a seamless experience for users to visualize and interpret results.",
      role: "ML Engineer / Frontend",
      tools: ["Python", "Flask", "TensorFlow", "React"],
      deliverables: ["Model integration", "Inference UI", "Performance report"],
      figmaUrl: "#",
      imageFit: "cover",
    },
    {
      id: 6,
      title: "Smart waste bin",
      category: "Web Design",
      image: "portfolio-1.PNG",
      description:
        "First version of my personal portfolio website showcasing my frontend development projects and UI design skills. Built with responsive layout principles and focused on clean visual hierarchy.",
      role: "Frontend Developer",
      tools: ["React", "Tailwind CSS"],
      deliverables: ["Portfolio UI", "Responsive layout"],
      liveUrl: "https://smart-waste-bin-ph.vercel.app/",
      imageFit: "cover",
    },
    {
      id: 7,
      title: "My Portfolio",
      category: "Figma Design",
      image: "MyPortfolio.PNG",
      description:
        "Figma mockups and prototypes for a portfolio site with interactive states.",
      role: "Product Designer",
      tools: ["Figma"],
      deliverables: ["Interactive prototype", "Design system"],
      imageFit: "cover",
    },
  ];

  // Show only first 6 items unless 'showAll' is true
  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

  // Modal State
  const [selectedProject, setSelectedProject] = useState(null);

  const toolColors = {
    React:        { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    dot: 'bg-blue-400' },
    'Tailwind CSS':{ bg: 'bg-cyan-50',   border: 'border-cyan-200',    text: 'text-cyan-700',    dot: 'bg-cyan-400' },
    JavaScript:   { bg: 'bg-yellow-50',  border: 'border-yellow-200',  text: 'text-yellow-700',  dot: 'bg-yellow-400' },
    TypeScript:   { bg: 'bg-blue-50',    border: 'border-blue-300',    text: 'text-blue-800',    dot: 'bg-blue-500' },
    Python:       { bg: 'bg-yellow-50',  border: 'border-yellow-200',  text: 'text-yellow-800',  dot: 'bg-yellow-500' },
    Flask:        { bg: 'bg-gray-50',    border: 'border-gray-300',    text: 'text-gray-700',    dot: 'bg-gray-400' },
    TensorFlow:   { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-700',  dot: 'bg-orange-400' },
    Node:         { bg: 'bg-green-50',   border: 'border-green-200',   text: 'text-green-700',   dot: 'bg-green-400' },
    Express:      { bg: 'bg-green-50',   border: 'border-green-200',   text: 'text-green-700',   dot: 'bg-green-400' },
    MongoDB:      { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-400' },
    WordPress:    { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     dot: 'bg-sky-400' },
    Wordpress:    { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     dot: 'bg-sky-400' },
    Figma:        { bg: 'bg-purple-50',  border: 'border-purple-200',  text: 'text-purple-700',  dot: 'bg-purple-400' },
    CSS:          { bg: 'bg-indigo-50',  border: 'border-indigo-200',  text: 'text-indigo-700',  dot: 'bg-indigo-400' },
    Illustrator:  { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-700',  dot: 'bg-orange-400' },
  };
  const getToolStyle = (tool) => toolColors[tool] ?? { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', dot: 'bg-gray-400' };

  return (
    <div className="relative flex flex-col w-full" >
      {/* Title */}
      <div className="relative flex justify-center w-full py-16">
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-900 to-gray-800 bg-clip-text text-transparent mb-4">
              My Recent Projects
            </h2>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer h-full flex flex-col"
            onClick={() => setSelectedProject(item)}
          >
            <BorderGlow
              backgroundColor="#ffffff"
              colors={['#7f1d1d', '#991b1b', '#1f2937']}
              glowColor="0 75 25"
              glowIntensity={0.8}
              glowRadius={30}
              borderRadius={12}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="h-64 overflow-hidden relative bg-gray-100 rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${item.imageFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                  />
                  <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <LinkIcon className="w-5 h-5 text-black" />
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
            </BorderGlow>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {portfolioItems.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-md"
          >
            {showAll ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
          </button>
        </div>
      )}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          
          {/* Modal Content */}
          <div 
            className="bg-white w-full max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[78vh] overflow-y-auto shadow-2xl relative rounded-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Image with gradient overlay + title */}
            <div className="relative w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-contain rounded-t-2xl bg-gray-950"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-t-2xl" />
              {/* Close button on image */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition z-10 text-xs font-bold leading-none"
              >
                ✕
              </button>
              {/* Title overlaid at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-5">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col gap-6 bg-white">
              {/* Role row */}
              <div className="flex items-center gap-3 pb-5 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-red-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Role</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">{selectedProject.role}</p>
                </div>
              </div>

              {/* About */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">About</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base border-l-2 border-red-800/30 pl-4">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => {
                    const s = getToolStyle(tool);
                    return (
                      <span
                        key={tool}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 border text-xs sm:text-sm font-medium rounded-lg transition-opacity hover:opacity-80 ${s.bg} ${s.border} ${s.text}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`} />
                        {tool}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Buttons */}
              {(selectedProject.liveUrl || selectedProject.figmaUrl) && (
                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-900 to-gray-900 text-white font-semibold text-sm sm:text-base py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-red-900/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </a>
                  )}
                  {selectedProject.figmaUrl && (
                    <a
                      href={selectedProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-sm sm:text-base py-3 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <Figma className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      View in Figma
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
