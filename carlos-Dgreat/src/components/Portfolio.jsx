import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    { id: 1, title: "Weather App", category: "Web App", image: "project-2-mobile.png" },
    { id: 2, title: "Landing Page Design", category: "Web Design", image: "project-3-mobile.png" },
    { id: 3, title: "Portfolio Website", category: "Web App", image: "project-4-mobile.png" },
    { id: 4, title: "Mobile App UI", category: "Figma Design", image: "project-2-mobile.png" },
    { id: 5, title: "Restaurant Website", category: "Web Design", image: "project-2-mobile.png" },
    { id: 6, title: "E-commerce UI Kit", category: "Figma Design", image: "project-2-mobile.png" },
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div>
      <p className="text-center text-4xl py-14 font-bold">My Recent Projects</p>

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
            className="card bg-base-100 p-6 shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full rounded-xl overflow-hidden h-full flex flex-col border border-base-content/25"
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
                <h2 className="card-title flex items-center justify-between">
                  {item.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
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
    </div>
  );
}
