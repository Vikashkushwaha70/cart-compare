import React from "react";
import { Trash2 } from "lucide-react";

export function RecentSearch({ items = [], onClear, onDelete, onSelect }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h3 className="text-gray-700 dark:text-gray-300">Recent Search</h3>

      <div className="space-y-2">
        {items.map((it) => (
          <div key={it} className="flex items-center justify-between p-3 border-2 border-gray-300 dark:border-gray-600 rounded-md">
            <button
              onClick={() => onSelect?.(it)}
              className="text-left text-gray-700 dark:text-gray-300 flex-1"
            >
              {it}
            </button>

            <button
              onClick={() => onDelete?.(it)}
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              aria-label={`Delete ${it}`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <div>
          <button className="text-sm text-gray-500" onClick={onClear}>Clear all</button>
        </div>
      </div>
    </div>
  );
}
