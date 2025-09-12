import React from "react";

const HeroSection = ({ selectedCategory }) => {
  const contentMap = {
    veg: {
      title: "Fresh & Delicious Veg Meals",
      description:
        "Explore our wide variety of vegetarian dishes, made with love and fresh ingredients.",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    },
    nonveg: {
      title: "Juicy & Spicy Non-Veg Delights",
      description:
        "Savor the best of non-vegetarian meals, from spicy curries to grilled perfection.",
      image:
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
    },
    desserts: {
      title: "Sweet Endings",
      description:
        "Indulge in heavenly desserts that complete your meal with a smile.",
      image:
        "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    },
    beverages: {
      title: "Cool & Refreshing Beverages",
      description:
        "From smoothies to mocktails, quench your thirst in the tastiest way.",
      image:
        "https://images.pexels.com/photos/616835/pexels-photo-616835.jpeg",
    },
    indian: {
      title: "Classic Indian Cuisine",
      description:
        "Taste the diversity of Indian food, rich in flavor and tradition.",
      image:
        "https://images.pexels.com/photos/8818667/pexels-photo-8818667.jpeg",
    },
  };

  const active = contentMap[selectedCategory] || contentMap["veg"];

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={active.image}
        alt="Category Background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">{active.title}</h1>
          <p className="text-lg">{active.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
