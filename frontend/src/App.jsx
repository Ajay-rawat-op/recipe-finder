import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RecipeSearch from "./components/RecipeSearch";


export default function App() {
const [selectedCategory, setSelectedCategory] = useState("veg");

  return (
   <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header onCategorySelect={setSelectedCategory} />
      <HeroSection selectedCategory={selectedCategory} />
      <RecipeSearch/>
      <Footer />
    </div>
  );
}
