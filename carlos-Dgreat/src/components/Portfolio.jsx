import { useState, useEffect } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "Website Landing Page",
      category: "Web App",
      image: "project-2-mobile.png",
      description:
        "A responsive landing page built with modern CSS and accessible patterns. Includes animations and optimized images.",
      role: "Frontend Developer",
      tools: ["React", "Tailwind", "Vite"],
      deliverables: ["Landing page", "Responsive assets", "Accessibility review"],
      gallery: ["project-2-desktop.png", "project-2-details.png", "project-2-mobile.png"],
    },
    {
      id: 2,
      title: "Website Landing Page",
      category: "Web Design",
      image: "project-3-mobile.png",
      description: "Design-forward landing page with an emphasis on typography and layout.",
      role: "UI/UX Designer",
      tools: ["Figma", "Illustrator"],
      deliverables: ["Figma prototype", "Exported assets", "Design spec"],
      gallery: ["project-3-desktop.png", "project-3-mobile.png"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Design",
      image: "project-4-mobile.png",
      description: "Personal portfolio showcasing projects, animations and responsive design.",
      role: "Full-stack Designer",
      tools: ["React", "Tailwind", "GSAP"],
      deliverables: ["Portfolio site", "Animations", "Deployment"],
      gallery: ["project-4-desktop.png", "project-4-mobile.png"],
    },
    {
      id: 4,
      title: "My Portfolio",
      category: "Figma Design",
      image: "MyPortfolio.PNG",
      description: "Figma mockups and prototypes for a portfolio site with interactive states.",
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
      description: "Reservation system built for managing bookings and schedules with validation and admin panel.",
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
      description: "A proof-of-concept web app that integrates a deep learning model for image analysis.",
      role: "ML Engineer / Frontend",
      tools: ["Python", "Flask", "TensorFlow", "React"],
      deliverables: ["Model integration", "Inference UI", "Performance report"],
      gallery: ["EcoSense-result.png", "EcoSense.png"],
    },
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const [selected, setSelected] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const prevImage = () => {
    const len = (selected?.gallery || [selected?.image]).length;
    setGalleryIndex((i) => (i - 1 + len) % len);
  };

  const nextImage = () => {
    const len = (selected?.gallery || [selected?.image]).length;
    setGalleryIndex((i) => (i + 1) % len);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (!selected) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  useEffect(() => {
    setGalleryIndex(0);
  }, [selected]);

  return (
    <div>
      <p className="text-center text-4xl mb-14 font-bold">My Recent Projects</p>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 rounded-xl p-2">
          {["All", "Web App", "Web Design", "Figma Design"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                filter === cat ? "bg-primary text-white" : "bg-gray-200 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mt-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelected(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(item);
            }}
            className="card bg-base-100 p-6 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full rounded-xl overflow-hidden h-full flex flex-col border border-base-content/25 cursor-pointer"
          >
            <figure className="flex items-center justify-center">
              <img
                src={`/${item.image}`}
                alt={item.title}
                className="rounded-lg object-contain mx-auto max-h-40"
              />
            </figure>
            <div className="card-body flex-1 flex flex-col justify-between">
              <div>
                <h2 className="card-title">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-600">This project falls under the category: {item.category}</p>
              </div>

              <div className="card-actions justify-end mt-4">
                <div className="badge">{item.category}</div>
                <div className="badge">Project</div>
              </div>
            </div>
          </div>
        ))}
      </div>

{/* Modal / Lightbox */}
{selected && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
    onClick={() => setSelected(null)}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="bg-white rounded-2xl w-full max-w-6xl max-h-[92vh] shadow-2xl relative overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={() => setSelected(null)}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center text-xl"
      >
        ×
      </button>

      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 overflow-y-auto">

        {/* IMAGE CONTAINER */}
        <div className="md:w-3/5">
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner flex flex-col items-center">

            <div className="relative w-full flex items-center justify-center">
              {((selected.gallery && selected.gallery.length) || 1) > 1 && (
                <button
                  onClick={() => setGalleryIndex((i) => Math.max(0, i - 1))}
                  className="absolute left-0 -translate-x-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-xl"
                  aria-label="Previous image"
                >
                  ‹
                </button>
              )}

              <img
                src={`/${(selected.gallery && selected.gallery[galleryIndex]) || selected.image}`}
                alt={selected.title}
                className="object-contain max-h-[65vh] w-full rounded-lg"
              />

              {((selected.gallery && selected.gallery.length) || 1) > 1 && (
                <button
                  onClick={() =>
                    setGalleryIndex((i) =>
                      Math.min(((selected.gallery && selected.gallery.length) || 1) - 1, i + 1)
                    )
                  }
                  className="absolute right-0 translate-x-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-xl"
                  aria-label="Next image"
                >
                  ›
                </button>
              )}
            </div>

            {/* Thumbnails */}
            {selected.gallery && selected.gallery.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto w-full justify-center">
                {selected.gallery.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setGalleryIndex(i)}
                    className={`rounded-lg overflow-hidden border ${
                      i === galleryIndex
                        ? "ring-2 ring-primary"
                        : "border-base-content/20"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={`/${img}`}
                      alt={`${selected.title} ${i + 1}`}
                      className="h-20 w-32 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* DESCRIPTION CONTAINER */}
        <div className="md:w-2/5">
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner flex flex-col gap-4 h-full">
            <div>
              <h3 className="font-semibold text-2xl mb-1">
                {selected.title}
              </h3>
              <p className="text-sm text-gray-500">
                {selected.category}
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {selected.description}
            </p>

            <div>
              <h4 className="text-sm font-medium mb-2">
                Tools used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.tools &&
                  selected.tools.map((t) => (
                    <span key={t} className="badge badge-outline">
                      {t}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
}
