// src/components/TrendingItems.jsx
import React from "react";

export function TrendingItems() {
  const items = [
    { name: "Amul Butter", file: "amul-butter.webp" },
    { name: "Aashirvaad Atta", file: "aashirvaad-atta.jpg" },
    { name: "Coca Cola", file: "coca-cola.jpg" },
    { name: "Tata Salt", file: "tata-salt.jpg" },
  ];

  return (
    <section className="trending-section">
      <h3 className="trending-title">Trending items</h3>

      <div className="trending-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {items.map((it, i) => {
          const src = `/images/${it.file}`;
          // DEBUG: prints the exact URL for each image
          console.log("Trending item image URL:", src);
          return (
            <div key={i} className="trending-card" style={{ textAlign: "center" }}>
              <div style={{ width: 80, height: 80, margin: "0 auto", borderRadius: 12, overflow: "hidden", background: "#f3f4f6" }}>
                <img
                  src={src}
                  alt={it.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                  onError={(e) => {
                    // replace broken image with fallback and log error
                    console.warn("Image failed to load:", src);
                    e.currentTarget.src = "/images/fallback.png";
                  }}
                />
              </div>
              <p style={{ marginTop: 8, fontSize: 12 }}>{it.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
