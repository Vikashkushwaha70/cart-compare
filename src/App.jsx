// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

import { LocationSelector } from "./components/LocationSelector.jsx";
import { SearchBar } from "./components/SearchBar.jsx";
import { DeliverySlots } from "./components/DeliverySlots.jsx";
import { RecentSearch } from "./components/RecentSearch.jsx";
import { TrendingItems } from "./components/TrendingItems.jsx";
import { CartBanner } from "./components/CartBanner.jsx";
import { SearchResults } from "./pages/SearchResults.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";



export default function App() {
  // toggle dark mode
  const [darkMode, setDarkMode] = useState(false);

  // location shown in header
  const [location, setLocation] = useState("Aurobindo Sarani, Dum Dum, Kolkata");

  // recent searches shown on home
  const [recentSearches, setRecentSearches] = useState(["milk"]);

  // page: "login" | "register" | "home" | "search"
  // NOTE: set to "login" to start with auth screen, or "home" to start on app
  const [currentPage, setCurrentPage] = useState(() => {
    // Example: try to restore last page from localStorage (optional)
    try {
      const saved = localStorage.getItem("cc_current_page");
      return saved || "login"; // default to login for demo
    } catch {
      return "login";
    }
  });

  // search query sent into SearchResults
  const [searchQuery, setSearchQuery] = useState("");

  // optional: persist currentPage (so after refresh you stay on same page in dev)
  useEffect(() => {
    try {
      localStorage.setItem("cc_current_page", currentPage);
    } catch {}
  }, [currentPage]);

  // geolocation -> reverse geocode using Nominatim
  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          setLocation(data.display_name || "Detected location");
        } catch (e) {
          console.error(e);
          alert("Could not fetch address");
        }
      },
      () => alert("Please allow location permission")
    );
  };

  const goHome = () => setCurrentPage("home");

  // root classes for theming + auth backgrounds
  const rootClass = [
    "app-root",
    darkMode ? "dark" : "light",
    currentPage === "login" ? "auth-login-bg" : "",
    currentPage === "register" ? "auth-register-bg" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Called when user clicks search bar (from home) or selects recent term.
  // If query omitted, still open SearchResults with defaultQuery (recent or blank)
  function onSearchStart(query = "") {
    if (query) {
      // prepend to recent searches (avoid duplicates)
      setRecentSearches((s) => {
        if (s.includes(query)) return [query, ...s.filter((x) => x !== query)];
        return [query, ...s];
      });
    }
    setSearchQuery(query);
    setCurrentPage("search");
  }

  return (
    <div className={rootClass}>
      <div className="app-shell">
        <div className="app-card">
          <div className="p-4 space-y-4">
            {/* top-right theme toggle (works anywhere) */}
            <div className="flex justify-end">
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setDarkMode((v) => !v)}
                aria-label="Toggle theme"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>

            {/* LOGIN PAGE */}
            {currentPage === "login" && (
              <LoginPage
                onLoginSuccess={() => {
                  goHome();
                }}
                onShowRegister={() => setCurrentPage("register")}
              />
            )}

            {/* REGISTER PAGE */}
            {currentPage === "register" && (
              <RegisterPage
                onRegisterSuccess={() => {
                  goHome();
                }}
                onShowLogin={() => setCurrentPage("login")}
              />
            )}

            {/* HOME PAGE */}
            {currentPage === "home" && (
              <>
                <div className="flex justify-between items-center home-top-row">
                  <div className="home-brand">Cart Compare</div>
                  <button
                    type="button"
                    className="home-auth-link"
                    onClick={() => setCurrentPage("login")}
                  >
                    Log in
                  </button>
                </div>

                <LocationSelector
                  location={location}
                  onLocationChange={setLocation}
                  onDetect={detectLocation}
                />

                {/* SearchBar onClick opens search page.
                    We pass most-recent search as default search term for convenience */}
                <SearchBar onSearchClick={() => onSearchStart(recentSearches[0] || "")} />

                <DeliverySlots />

                <RecentSearch
                  items={recentSearches}
                  onClear={() => setRecentSearches([])}
                  onDelete={(item) => setRecentSearches((s) => s.filter((x) => x !== item))}
                  onSelect={(term) => onSearchStart(term)}
                />

                <TrendingItems />
                <CartBanner />
              </>
            )}

            {/* SEARCH RESULTS PAGE */}
            {currentPage === "search" && (
              <SearchResults
                onBack={() => setCurrentPage("home")}
                defaultQuery={searchQuery || recentSearches[0] || ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
