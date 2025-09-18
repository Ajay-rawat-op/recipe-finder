import React, { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun, FaSearch, FaUser, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header({ onCategorySelect }) {
  const [searchText, setSearchText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [hoverToggle, setHoverToggle] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navRef = useRef(null);
  const searchRef = useRef(null);

  const handleToggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      alert(`Searching for: ${searchText}`);
    }
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearchExpanded = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsSearchExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when clicking on nav items
  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      key: "about",
      label: "About Us",
      items: ["Our Story", "Mission", "Team"],
    },
    {
      key: "contact",
      label: "Contact Us",
      items: ["Email", "Phone", "Location"],
    },
    {
      key: "service",
      label: "Service",
      items: ["Web Recipes", "Nutrition Plan", "Meal Tracker"],
    },
  ];

  return (
    <header
      ref={navRef}
      className="shadow-lg px-4 py-3 flex justify-between items-center sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      {/* Logo */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg transform hover:scale-105 transition-transform duration-200">
          R
        </div>
        <div className="hidden sm:block">
          <p className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-300 dark:to-orange-400 bg-clip-text text-transparent">
            Recipe-Finder
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-8 items-center">
          {navItems.map(({ key, label, items }) => (
            <li key={key} className="relative">
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center space-x-1 px-4 py-2 font-medium text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-200 group"
              >
                <span>{label}</span>
                <FaChevronDown className={`text-xs transform transition-transform duration-200 ${openDropdown === key ? 'rotate-180' : ''} group-hover:text-orange-600 dark:group-hover:text-orange-400`} />
              </button>

              {openDropdown === key && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  {items?.map((item, index) => (
                    <div
                      key={item}
                      className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 dark:hover:from-gray-700 dark:hover:to-gray-600 cursor-pointer transition-all duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      onClick={handleNavItemClick}
                    >
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-3">
        {/* Desktop Search */}
        <div className="hidden md:block">
          <div className="relative flex items-center group">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                placeholder="Search delicious recipes..."
                className="w-72 lg:w-80 border-2 border-gray-200 dark:border-gray-600 rounded-full px-5 py-2.5 pr-12 text-sm focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:text-white shadow-sm hover:shadow-md focus:shadow-lg"
              />
              <button
                onClick={handleSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-2 rounded-full transition-all duration-200 hover:scale-105 shadow-md"
              >
                <FaSearch className="text-sm" />
              </button>
            </div>
            {hoverSearch && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 shadow-lg">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                Search for your favorite dishes
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <button
          onClick={toggleSearchExpanded}
          className="md:hidden p-2.5 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
        >
          <FaSearch className="text-lg" />
        </button>

        {/* Theme Toggle */}
        <div
          className="relative"
          onMouseEnter={() => setHoverToggle(true)}
          onMouseLeave={() => setHoverToggle(false)}
        >
          <button
            onClick={handleToggleTheme}
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 text-gray-600 dark:text-gray-300 hover:scale-105 shadow-sm"
          >
            {isDark ? (
              <FaSun className="text-lg text-yellow-500" />
            ) : (
              <FaMoon className="text-lg text-blue-600" />
            )}
          </button>
          {hoverToggle && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 shadow-lg">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
              Switch to {isDark ? "Light" : "Dark"} mode
            </div>
          )}
        </div>

        {/* Sign Up Button */}
        <button className="hidden sm:flex bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-lg items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg">
          <FaUser className="text-sm" />
          <span className="hidden lg:inline">Sign Up</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2.5 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchExpanded && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 shadow-lg">
          <div className="relative">
            <input
              ref={searchRef}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              placeholder="Search recipes..."
              className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:border-orange-500 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2.5 rounded-full transition-all duration-200"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl max-h-screen overflow-y-auto">
          <nav className="px-4 py-6">
            <ul className="space-y-4">
              {navItems.map(({ key, label, items }) => (
                <li key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  >
                    <span>{label}</span>
                    <FaChevronDown className={`text-xs transform transition-transform duration-200 ${openDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openDropdown === key && (
                    <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {items?.map((item) => (
                        <div
                          key={item}
                          className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer rounded-md hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-200"
                          onClick={handleNavItemClick}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Sign Up */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleNavItemClick}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-200 hover:from-orange-600 hover:to-orange-700"
              >
                <FaUser />
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}