import React, { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun, FaSearch, FaUser } from "react-icons/fa";

export default function Header({ onCategorySelect }) {
  const [searchText, setSearchText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [hoverToggle, setHoverToggle] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navRef = useRef(null);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchText}`);
  };

  const toggleDropdown = (menu) => {
    const newDropdown = openDropdown === menu ? null : menu;
    setOpenDropdown(newDropdown);
    if (newDropdown) {
      onCategorySelect(menu); // 👈 Notify HeroSection
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="shadow-md px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
          R
        </div>
        <p className="text-xl font-bold text-orange-600">Recipe-Finder</p>
      </div>

      {/* Nav Menu */}
      <nav className="px-4 py-2 flex items-center justify-center relative">
        <ul className="flex space-x-8 items-center">
          {[
            { key: "about", label: "About Us" },
            { key: "contact", label: "Contact Us" },
            { key: "service", label: "Service" },
          ].map(({ key, label, items }) => (
            <li key={key} className="relative">
              <button
                onClick={() => toggleDropdown(key)}
                className="font-merienda hover:text-orange-700 dark:hover:text-green-400 text-gray-800 dark:text-gray-200"
              >
                {label}
              </button>
              {openDropdown === key && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="font-merienda px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Panel */}
      <div className="flex items-center space-x-5">
        {/* Search */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setHoverSearch(true)}
          onMouseLeave={() => setHoverSearch(false)}
        >
          <div className="flex items-center relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for dishes, restaurants..."
              className="w-64 sm:w-80 md:w-96 border border-gray-300 dark:border-gray-600 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-300"
            />
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-full flex items-center gap-2 text-sm shadow-md transition-all duration-200"
            >
              <FaSearch />
              Search
            </button>
          </div>

          {hoverSearch && (
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
              Search for dish recipes
            </span>
          )}
        </div>

        {/* Theme toggle */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
        >
          <button
            onClick={handleToggleTheme}
            className="dark:bg-gray-700 px-2 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-1 text-sm"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          {hoverToggle && (
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </div>

        {/* Sign Up */}
        <button className="bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 flex items-center gap-1 text-sm">
          <FaUser /> Sign Up
        </button>
      </div>
    </nav>
  );
}
