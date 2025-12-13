// src/components/ProductCard.jsx
import React from "react";
import { Clock } from "lucide-react";

export function ProductCard({ image, brand, name, options = [] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3">
      <img src={image} alt={name} className="w-full h-32 object-contain mb-3" />
      <p className="text-xs text-gray-500 dark:text-gray-400">{brand}</p>
      <h4 className="text-sm text-gray-900 dark:text-gray-100 mt-1 mb-3">{name}</h4>

      <div className="space-y-2">
        {options.map((opt, i) => (
          <div key={i} className="text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white px-2 py-0.5 rounded" style={{ background: '#444' }}>{opt.platform}</span>
              <span className="text-gray-600 dark:text-gray-400">{opt.quantity}</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                {opt.originalPrice && <span className="text-gray-400 line-through mr-2">₹{opt.originalPrice}</span>}
                <span className="text-gray-900 dark:text-gray-100">₹{opt.price}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{opt.deliveryTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
