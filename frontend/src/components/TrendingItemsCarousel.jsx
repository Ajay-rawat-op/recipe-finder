import React from 'react';

const items = [
  {
    image: 'https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg',
    title: 'Chole Bhature',
    description: 'Spicy chickpeas with deep-fried fluffy bhature 🍛',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/12737917/pexels-photo-12737917.jpeg',
    title: 'Dal Chawal',
    description: 'Comfort food at its finest – lentils & rice 🥣🍚',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg',
    title: 'Chicken Biryani',
    description: 'Aromatic rice with spicy marinated chicken 🍗🍚',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg',
    title: 'Masala Dosa',
    description: 'South Indian crepe stuffed with spicy potato filling 🌯',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg',
    title: 'Paneer Tikka',
    description: 'Grilled cottage cheese cubes with spices 🔥🧀',
    link: '#',
  },
];


const TrendingItemsCarousel = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5 rounded-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-60 h-[340px] flex flex-col justify-between bg-white border border-orange-200 rounded-2xl p-4 text-gray-800 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div>
            <img
              src={`${item.image}?auto=compress&cs=tinysrgb&h=160`}
              alt={item.title}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm mt-1 text-gray-600">{item.description}</p>
          </div>
          <a
            href={item.link}
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition duration-200"
          >
            View Recipe
          </a>
        </div>
      ))}
    </div>
  );
};

export default TrendingItemsCarousel;
