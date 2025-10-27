import React from "react";
import { theme } from "../theme";

const featuredCategories = [
  {
    id: 1,
    name: "Biryani Specials",
    description:
      "Fragrant rice cooked with tender chicken, spices, and rich flavors — our signature biryani loved by all.",
    image: {
      url: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?w=600",
    },
  },
  {
    id: 2,
    name: "Veg Delights",
    description:
      "Wholesome vegetarian dishes made with fresh veggies, aromatic herbs, and authentic Indian spices.",
    image: {
      url: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?w=600",
    },
  },
  {
    id: 3,
    name: "Tandoori & Grill",
    description:
      "Juicy, smoky tandoori chicken and grilled kebabs straight from the clay oven — full of flavor and spice.",
    image: {
      url: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    },
  },
];

const FeaturedMenu = () => {
  return (
    <section className="py-20" style={{ backgroundColor: theme.primaryColour }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-12"
          style={{ color: theme.accent }}
        >
          Our Specialties
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundColor: theme.card }}
            >
              <div
                className="h-56 sm:h-64 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image.url})` }}
              ></div>

              <div className="p-6 md:p-8">
                <h3
                  className="text-xl md:text-2xl font-semibold mb-2"
                  style={{ color: theme.accent }}
                >
                  {category.name}
                </h3>
                <p
                  className="text-sm md:text-base mb-4 leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
