// src/components/DeliverySlots.jsx
import zeptoLogo from "../assets/logos/zepto.png";
import blinkitLogo from "../assets/logos/blinkit.png";
import instamartLogo from "../assets/logos/instamart.png";
import flipkartLogo from "../assets/logos/flipkart.png";

export function DeliverySlots() {
  const slots = [
    { label: "10 min", active: true },
    { label: "15 min", active: false },
    { label: "20 min", active: false },
    { label: "30 min", active: false },
  ];

  const services = [
    {
      name: "Flipkart Minutes",
      eta: "9 mins",
      logo: flipkartLogo,
      theme: "flipkart",
      url: "https://www.flipkart.com/grocery-minutes",
    },
    {
      name: "Swiggy Instamart",
      eta: "12 mins",
      logo: instamartLogo,
      theme: "instamart",
      url: "https://www.swiggy.com/instamart",
    },
    {
      name: "Zepto",
      eta: "15 mins",
      logo: zeptoLogo,
      theme: "zepto",
      url: "https://www.zepto.com",
    },
    {
      name: "Blinkit",
      eta: "17 mins",
      logo: blinkitLogo,
      theme: "blinkit",
      url: "https://www.blinkit.com",
    },
  ];

  return (
    <section className="qc-section">
      <h3 className="qc-section-title">Delivering in</h3>

      <div className="qc-slot-row">
        {slots.map((slot, i) => (
          <button key={i} className={`qc-slot-chip ${slot.active ? "qc-slot-chip--active" : ""}`}>
            {slot.label}
          </button>
        ))}
      </div>

      <div className="qc-services">
        {services.map((svc, i) => {
          const inner = (
            <>
              <div className="qc-service-left">
                <div className="qc-service-logo-wrap">
                  <img src={svc.logo} alt={svc.name} className="qc-service-logo" />
                </div>
                <span className="qc-service-name">{svc.name}</span>
              </div>
              <span className="qc-service-eta">{svc.eta}</span>
            </>
          );

          // if url present make an anchor, else button
          return svc.url ? (
            <a
              key={i}
              className={`qc-service-card qc-service-${svc.theme}`}
              href={svc.url}
              target="_blank"
              rel="noreferrer"
            >
              {inner}
            </a>
          ) : (
            <button key={i} className={`qc-service-card qc-service-${svc.theme}`} type="button">
              {inner}
            </button>
          );
        })}
      </div>
    </section>
  );
}
