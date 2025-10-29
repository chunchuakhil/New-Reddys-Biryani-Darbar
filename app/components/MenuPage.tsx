"use client";
import React, { useState } from "react";
import { theme } from "../theme";

// ----- Sample Menu Data -----
const menuData = {
  categories: [
    {
      id: 1,
      name: "Biryani Specials",
      image: {
        url: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?w=600",
      },
      items: [
        {
          id: 101,
          name: "Chicken Dum Biryani",
          price: { full: 220, half: 140 },
          isVeg: false,
          isSpicy: true,
        },
        {
          id: 102,
          name: "Veg Biryani",
          price: { full: 180 },
          isVeg: true,
          isSpicy: false,
        },
      ],
    },
    {
      id: 2,
      name: "Starters",
      image: {
        url: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?w=600",
      },
      items: [
        {
          id: 201,
          name: "Chicken Tikka",
          description: "Juicy boneless chicken marinated in yogurt and spices.",
          price: { plate: 160 },
          isVeg: false,
          isSpicy: true,
        },
        {
          id: 202,
          name: "Paneer Tikka",
          description: "Soft paneer cubes marinated and grilled to perfection.",
          price: { plate: 150 },
          isVeg: true,
          isSpicy: false,
        },
      ],
    },
  ],
};

const MenuPage: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div
      className=" lg:w-4xl sm:w-auto"
      style={{ backgroundColor: theme.primaryColour }}
    >
      {/* Hero Section */}
      <section className="text-center py-10  mx-2">
        <h1 className="text-4xl font-bold mb-3" style={{ color: theme.accent }}>
          Our Menu
        </h1>
        <p className="text-gray-100 text-lg">
          Discover our delicious range of biryanis, starters, and more
        </p>
      </section>

      {/* Menu Section */}
      <section className="max-w-5xl mx-auto px-4 pb-18">
        {menuData.categories.map((category) => (
          <div
            key={category.id}
            className="mb-6 rounded-2xl overflow-hidden shadow-md"
            style={{ backgroundColor: theme.card }}
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center w-full text-left"
            >
              <div
                className="w-36 h-24 sm:w-48 sm:h-32 bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${category.image.url})` }}
              ></div>
              <div className="flex-1 p-4 sm:p-6">
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-1"
                  style={{ color: theme.accent }}
                >
                  {category.name}
                </h2>
              </div>
              <span
                className={`text-2xl pr-4 transition-transform ${
                  openCategory === category.id ? "rotate-180" : ""
                }`}
                style={{ color: theme.accent }}
              >
                ▼
              </span>
            </button>

            {/* Accordion Content */}
            {openCategory === category.id && (
              <div className="p-4 sm:p-6 border-t border-[#ad634420]">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#2a2a2b] rounded-lg p-4 mb-3 hover:bg-[#333] transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-100">
                          {item.name}
                        </h3>
                        {item.isVeg && (
                          <span className="px-2 py-0.5 text-xs border border-green-500 text-green-400 rounded">
                            Veg
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="px-2 py-0.5 text-xs border border-red-500 text-red-400 rounded">
                            Spicy
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className="mt-2 sm:mt-0 sm:ml-4 text-right text-[#ad6344] font-semibold text-sm"
                      style={{ color: theme.accent }}
                    >
                      {Object.entries(item.price).map(([key, value]) => (
                        <div key={key}>
                          {key !== "plate" && key !== "piece" && key !== "bowl"
                            ? `${
                                key[0].toUpperCase() + key.slice(1)
                              }: ₹${value}`
                            : `₹${value}`}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuPage;
