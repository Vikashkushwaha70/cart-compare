// src/components/LocationSelector.jsx
import { MapPin } from "lucide-react";

export function LocationSelector({ location, onLocationChange, onDetect }) {
  // onLocationChange abhi use nahi kar rahe, but prop rehne do future ke liye

  // Thoda chhota, readable address (optional)
  const shortLocation =
    location && location.length > 30
      ? location.slice(0, 30) + "…"
      : location || "Set your location";

  return (
    <div className="loc-header space-y-1">
      <div className="loc-top-row">
        <span className="loc-label">Delivering to:</span>

        <button type="button" className="loc-link" onClick={onDetect}>
          <MapPin size={16} className="loc-link-icon" />
          <span>Location</span>
        </button>
      </div>

      {/* optional: chhota address line (light grey) */}
      <div className="loc-subline">{shortLocation}</div>
    </div>
  );
}
