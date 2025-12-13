// src/components/SearchBar.jsx
import React from "react";
import { Search } from "lucide-react";

export function SearchBar({ value = "", onChange, onSearchClick }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearchClick?.(e.target.value);
        }}
        onClick={() => onSearchClick?.(value)}
        placeholder="Search to Compare Price"
        className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full dark:bg-gray-800 dark:text-white"
        aria-label="Search products"
      />
    </div>
  );
}
