export function CartBanner() {
  return (
    <div style={{ marginTop: 24 }}>
      <div
        style={{
          borderRadius: 18,
          padding: "20px 18px",
          background: "linear-gradient(180deg,#ffffff, #f8fafc)",
          boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          DealFinder 
        </h3>

        <p style={{ marginTop: 8, fontSize: 14, color: "#6b7280" }}>
          Save money, compare fast
        </p>

        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            color: "#111827",
            fontWeight: 600,
          }}
        >
          Available on
        </p>

        {/* Store Buttons */}
        <div
          style={{
            marginTop: 12,
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {/* Google Play Store */}
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/badges/google-play.svg"
              alt="Get it on Google Play"
              style={{
                height: 40,
                cursor: "pointer",
                borderRadius: 8,
              }}
            />
          </a>

          {/* Apple App Store */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/badges/app-store.svg"
              alt="Download on the App Store"
              style={{
                height: 40,
                cursor: "pointer",
                borderRadius: 8,
              }}
            />
          </a>
        </div>

        <p
          style={{
            marginTop: 14,
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          Crafted with ❤️ in Kolkata — Code Pulse
        </p>
      </div>
    </div>
  );
}
