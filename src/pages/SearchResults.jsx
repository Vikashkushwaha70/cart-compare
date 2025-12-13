// src/pages/SearchResults.jsx
import React, { useState, useMemo } from "react";
import { ArrowLeft, Search, X, Clock } from "lucide-react";

/**
 * Simple search results page (client-side demo)
 * Props:
 *  - onBack(): called when user taps back
 *  - defaultQuery: initial search text
 */
export function SearchResults({ onBack, defaultQuery = "Milk" }) {
  const [query, setQuery] = useState(defaultQuery);

  // demo products (you can replace with API results later)
  const products = useMemo(
    () => [
      {
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=400&fit=crop",
        brand: "Amul",
        name: "Lactose Free Milk",
        options: [
          {
            platform: "Flipkart Minutes",
            platformClass: "pf-flipkart",
            quantity: "250 ml",
            price: 24,
            originalPrice: 26,
            deliveryTime: "11 min",
          },
          {
            platform: "Swiggy Instamart",
            platformClass: "pf-swiggy",
            quantity: "250 ml",
            price: 25,
            deliveryTime: "6 min",
          },
          {
            platform: "Zepto",
            platformClass: "pf-zepto",
            quantity: "250 ml",
            price: 25,
            deliveryTime: "9 min",
          },
          {
            platform: "Blinkit",
            platformClass: "pf-blinkit",
            quantity: "250 ml",
            price: 26,
            deliveryTime: "10 min",
          },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop",
        brand: "Amul",
        name: "Taaza Toned Milk",
        options: [
          {
            platform: "Flipkart Minutes",
            platformClass: "pf-flipkart",
            quantity: "500 ml",
            price: 29,
            deliveryTime: "11 min",
          },
          {
            platform: "Swiggy Instamart",
            platformClass: "pf-swiggy",
            quantity: "500 ml",
            price: 29,
            deliveryTime: "6 min",
          },
          {
            platform: "Zepto",
            platformClass: "pf-zepto",
            quantity: "500 ml",
            price: 29,
            deliveryTime: "9 min",
          },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=400&fit=crop",
        brand: "Amul",
        name: "Gold Milk",
        options: [
          {
            platform: "Flipkart Minutes",
            platformClass: "pf-flipkart",
            quantity: "500 ml",
            price: 35,
            deliveryTime: "11 min",
          },
          {
            platform: "Swiggy Instamart",
            platformClass: "pf-swiggy",
            quantity: "500 ml",
            price: 35,
            deliveryTime: "6 min",
          },
          {
            platform: "Zepto",
            platformClass: "pf-zepto",
            quantity: "500 ml",
            price: 35,
            deliveryTime: "9 min",
          },
        ],
      },
      {
        image:
          "https://images.unsplash.com/photo-1623309226751-1e7258c87d08?w=600&h=400&fit=crop",
        brand: "Amul",
        name: "Full Cream Milk",
        options: [
          {
            platform: "Swiggy Instamart",
            platformClass: "pf-swiggy",
            quantity: "1 ltr",
            price: 75,
            deliveryTime: "6 min",
          },
          {
            platform: "Zepto",
            platformClass: "pf-zepto",
            quantity: "1 ltr",
            price: 75,
            deliveryTime: "9 min",
          },
        ],
      },
    ],
    []
  );

  // filter out products that have zero options (or where no option is available)
  const visibleProducts = products.filter((p) => p.options && p.options.length > 0);

  // filter by query (simple contains on name)
  const filtered = visibleProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="results-wrapper">
      <div className="results-header">
        <button className="results-back-btn" onClick={onBack} aria-label="Back">
          <ArrowLeft />
        </button>

        <div className="results-search">
          <Search className="results-search-icon" />
          <input
            className="results-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
          />
          {query && (
            <button
              className="results-search-clear"
              onClick={() => setQuery("")}
              aria-label="Clear"
            >
              <X />
            </button>
          )}
        </div>
      </div>

      <p className="results-meta">Showing {filtered.length} results for “{query}”</p>

      <div className="results-grid">
        {filtered.map((product, idx) => (
          <article key={idx} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-body">
              <div className="product-meta">
                <div className="product-brand">{product.brand}</div>
                <div className="product-name">{product.name}</div>
              </div>

              <div className="product-offers">
                {product.options.map((opt, i) => (
                  <div key={i} className="product-offer-row">
                    <div className="product-offer-left">
                      <span className={`product-platform-tag ${opt.platformClass}`}>
                        {opt.platform}
                      </span>
                      <span className="product-qty">{opt.quantity}</span>
                    </div>

                    <div className="product-offer-right">
                      <div className="product-price-left">
                        {opt.originalPrice ? (
                          <span className="product-price-old">₹{opt.originalPrice}</span>
                        ) : null}
                        <span className="product-price-main">₹{opt.price}</span>
                      </div>

                      <div className="product-delivery">
                        <Clock className="clock-icon" />
                        <span className="product-offer-time">{opt.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export default SearchResults;
