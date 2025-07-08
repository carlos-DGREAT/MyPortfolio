import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  // Sample data with categories
  const portfolioItems = [
    { id: 1, title: "Weather App", category: "Web App" },
    { id: 2, title: "Landing Page Design", category: "Web Design" },
    { id: 3, title: "Portfolio Website", category: "Web App" },
    { id: 4, title: "Mobile App UI", category: "Figma Design" },
    { id: 5, title: "Restaurant Website", category: "Web Design" },
    { id: 6, title: "E-commerce UI Kit", category: "Figma Design" },
  ];

  // Filter the items based on selected category
  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div>
      <p className="text-center text-4xl py-14 font-bold">My Portfolio</p>

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4 mt-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt={item.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>Category: {item.category}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
