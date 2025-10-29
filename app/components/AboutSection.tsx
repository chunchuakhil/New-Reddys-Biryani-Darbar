import { MapPin, Phone, Clock } from "lucide-react";

const COLORS = {
  background: "#1a0f0d",
  card: "#2a1815",
  accent: "#923d25",
  text: "#ffffff",
  highlight: "#FFB84C",
};

const CONTACT_INFO = {
  heading: "Contact Us",
  subheading: "Visit us or get in touch",
  details: [
    {
      icon: <MapPin size={28} color={COLORS.accent} />,
      title: "Location",
      content: [
        "IT Park, Dehu - Alandi Rd, near talwade, Talawade Gaon, Talwade, Pune, Pimpri-Chinchwad, Maharashtra 411062",
      ],
      actionText: "Get Directions →",
      link: "https://www.google.com/maps/place/New+Reddys+Biryani+Darbar/@18.69944,73.7895373,18z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b7988f39aa0d:0xa4d0c2a5ccfd9e6a!8m2!3d18.69944!4d73.7895373!16s%2Fg%2F11fh_mpb6s?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <Phone size={28} color={COLORS.accent} />,
      title: "Phone",
      content: ["+91 8856 885 645"],
      actionText: "Call Now →",
      link: "tel:+918856885645",
    },
    {
      icon: <Clock size={28} color={COLORS.accent} />,
      title: "Hours",
      content: [
        "Weekdays: 11:00 AM – 11:00 PM",
        "Weekends: 11:00 AM – 12:00 AM",
      ],
      actionText: "Open all days",
      link: "#",
    },
  ],
};

export default function AboutSection() {
  return (
    <section className="py-16 px-6 sm:px-12" style={{ color: COLORS.text }}>
      <div className="text-center mb-10">
        <h2
          className="text-lg font-semibold mb-2"
          style={{ color: COLORS.accent }}
        >
          {CONTACT_INFO.heading}
        </h2>
        <p className="text-gray-300 text-lg">{CONTACT_INFO.subheading}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {CONTACT_INFO.details.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 sm:p-8 text-center shadow-lg"
            style={{ backgroundColor: COLORS.card }}
          >
            <div className="flex justify-center items-center mb-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${COLORS.accent}20` }}
              >
                {item.icon}
              </div>
            </div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: COLORS.accent }}
            >
              {item.title}
            </h3>
            <div className="space-y-1 text-gray-200 mb-4">
              {item.content.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <a
              href={item.link}
              className="font-medium hover:underline"
              style={{ color: COLORS.highlight }}
            >
              {item.actionText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
