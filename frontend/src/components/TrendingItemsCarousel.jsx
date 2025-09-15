import React from 'react';
import items from '../data/shortsData';

const TrendingItemsCarousel = () => {
  return (
    <div  className="w-full mx-auto">
      <h2 className="flex items-center text-3xl font-semibold m-4  text-yellow-600">
        <span className="mr-3 text-4xl">🔥</span> Trending Food posts
      </h2>
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
    </div>
  );
};

export default TrendingItemsCarousel;
