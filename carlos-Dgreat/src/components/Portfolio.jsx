import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    { id: 1, title: "Weather App", category: "Web App", image: "portfolio-1.PNG" },
    { id: 2, title: "Landing Page Design", category: "Web Design", image: "portfolio-2.PNG" },
    { id: 3, title: "Portfolio Website", category: "Web App", image: "portfolio-3.PNG" },
    { id: 4, title: "Mobile App UI", category: "Figma Design", image: "portfolio-4.PNG" },
    { id: 5, title: "Restaurant Website", category: "Web Design", image: "portfolio-5.PNG" },
    { id: 6, title: "E-commerce UI Kit", category: "Figma Design", image: "portfolio-6.PNG" },
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
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
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
          <div key={item.id} className="card bg-base-100 shadow-sm w-full">
            <figure>
              <img
                src={`/${item.image}`}
                alt={item.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>This project falls under the category: {item.category}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.category}</div>
                <div className="badge badge-outline">Project</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
