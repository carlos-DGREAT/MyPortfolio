import { useState, useEffect } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    { id: 1, title: "Website Landing Page", category: "Web App", image: "project-2-mobile.png" },
    { id: 2, title: "Website Landing Page", category: "Web Design", image: "project-3-mobile.png" },
    { id: 3, title: "Portfolio Website", category: "Web Design", image: "project-4-mobile.png" },
    { id: 4, title: "My Portfolio", category: "Figma Design", image: "MyPortfolio.PNG" },
    { id: 5, title: "DENR-Reservation System", category: "Web App", image: "DENR-reservation System.PNG" },
    { id: 6, title: "Web Application Utilizing a Deep Learning Model", category: "Web App", image: "EcoSense.png" },
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setSelected(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg p-4 max-w-[90%] max-h-[90%] shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-3 right-3 text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>

            <img
              src={`/${selected.image}`}
              alt={selected.title}
              className="object-contain max-h-[75vh] mx-auto rounded"
            />

            <div className="mt-3 text-center">
              <h3 className="font-semibold">{selected.title}</h3>
              <p className="text-sm text-gray-500">{selected.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
