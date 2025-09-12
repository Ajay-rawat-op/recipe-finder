import React from "react";

const HeroSection = ({ selectedCategory }) => {
    const contentMap = {
        veg: {
            title: "Fresh & Delicious Veg Meals",
            description:
                "Vegetarian food is a beautiful expression of simplicity, health, and tradition. Rooted deeply in many cultures, especially in India, veg cuisine showcases how plant-based ingredients can create incredibly flavorful and satisfying meals. From fresh vegetables and lentils to aromatic spices and herbs, each dish is crafted with care and balance. More than just a dietary choice, veg food often reflects a lifestyle of harmony, wellness, and respect for nature.",
            image:
                "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
        },
        nonveg: {
            title: "Juicy & Spicy Non-Veg Delights",
            description:
                "Non-vegetarian food holds a special place in many cuisines around the world. From succulent kebabs and spicy curries to grilled delicacies and hearty stews, every dish offers a unique blend of texture, flavor, and tradition. For many, non-veg meals are not just about taste — they’re a symbol of celebration, family gatherings, and cultural heritage. Whether it’s a festive feast or a simple homemade dish, non-veg food continues to bring joy and richness to the dining table.",
            image:
                "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
        },
        desserts: {
            title: "Sweet Endings",
            description:
                "Sweets have always held a special place in our hearts. Whether it's a festive celebration, a family gathering, or just a quiet moment of joy, a sweet treat has the power to bring smiles and create memories. Across cultures and generations, sweets symbolize love, happiness, and togetherness. Today, let's take a moment to appreciate the rich flavors, traditions, and emotions wrapped up in every bite.",
            image:
                "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
        },
        beverages: {
            title: "Cool & Refreshing Beverages",
            description:
                "Beverages are more than just drinks — they’re a reflection of our moods, cultures, and traditions. From a hot cup of tea on a rainy day to a refreshing glass of juice in the summer heat, beverages comfort us, energize us, and bring people together. Whether shared over a conversation or enjoyed in solitude, every sip tells a story.",
            image:
                "https://images.pexels.com/photos/7809753/pexels-photo-7809753.jpeg",
        },
        indian: {
            title: "Classic Indian Cuisine",
            description:
                "Indian food is a vibrant celebration of flavor, color, and tradition. With every region offering its own unique spices, ingredients, and cooking styles, Indian cuisine is as diverse as its culture. From rich curries and aromatic biryanis to crispy snacks and sweet delicacies, each dish tells a story passed down through generations. It's not just food — it's an experience that brings people together and connects them to their roots.",
            image:
                "https://images.pexels.com/photos/8818667/pexels-photo-8818667.jpeg",
        },
    };

    const active = contentMap[selectedCategory] || contentMap["indian"];

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
            <div className="relative z-20 text-left text-white px-10 py-20 ml-10">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-merienda mb-8">{active.title}</h1>
                    <p className="text-lg text-justify text-align: justify mb-6">{active.description}</p>
                    <button className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-[200px] hover:bg-gray-200 transition ">
                        Learn More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
