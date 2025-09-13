import React, { useState, useEffect } from "react";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Common function to fetch recipes based on a search query
  const fetchRecipes = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setError("Please enter a search term");
      return;
    }
    setError("");
    setLoading(true);
    setSelectedRecipe(null);
    try {
      const res = await fetch(
        `http://localhost:5000/api/search?q=${searchQuery}`
      );
      const data = await res.json();

      if (data?.data?.recipes?.length === 0) {
        setError("No recipes found, try something else.");
      }

      setRecipes(data?.data?.recipes || []);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Call default search when component mounts
  useEffect(() => {
    fetchRecipes("ice-cream"); // Default query to show recipes on load
  }, []);

  // Called on button click or Enter key press
  const handleSearch = () => {
    fetchRecipes(query);
  };

  const fetchRecipeDetails = async (id) => {
    setLoadingDetails(true);
    setError("");
    try {
      const res = await fetch(
        `http://localhost:5000/api/recipe/${id}`
      );
      const data = await res.json();
      setSelectedRecipe(data?.data?.recipe);
    } catch (err) {
      setError("Failed to fetch recipe details.");
      console.error(err);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-orange-800 dark:text-orange-400 drop-shadow-lg">
        Recipe Search
      </h1>

      {/* Search Box */}
      <div className="w-full max-w-3xl flex gap-4 mb-8">
        <input
          type="text"
          className="flex-grow rounded-lg border border-orange-300 px-5 py-3 text-lg shadow-inner focus:outline-none focus:ring-4 focus:ring-orange-400 dark:bg-gray-700 dark:border-orange-600 dark:placeholder-orange-300 dark:text-orange-100 transition"
          placeholder="Search recipes (e.g. pasta, biryani, chicken)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition rounded-lg px-6 py-3 text-white font-semibold shadow-lg flex items-center justify-center select-none"
          aria-label="Search recipes"
        >
          🔍 Search
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-600 dark:text-red-400 mb-6 font-semibold text-center">
          {error}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <p className="text-orange-700 dark:text-orange-300 font-medium mb-6 animate-pulse text-center">
          Loading recipes...
        </p>
      )}

      {/* Recipe Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl overflow-y-auto"
        style={{ maxHeight: "65vh" }}
      >
        {!loading &&
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col"
              onClick={() => fetchRecipeDetails(recipe.id)}
              aria-label={`View details for ${recipe.title}`}
            >
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-2 truncate">
                  {recipe.title}
                </h2>
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-auto">
                  Publisher: {recipe.publisher}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Loading Details */}
      {loadingDetails && (
        <p className="mt-10 text-orange-700 dark:text-orange-300 font-medium animate-pulse text-center">
          Loading details...
        </p>
      )}

      {/* Selected Recipe Details */}
      {selectedRecipe && !loadingDetails && (
        <div className="mt-12 w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-extrabold mb-6 text-orange-800 dark:text-orange-400">
            {selectedRecipe.title}
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={selectedRecipe.image_url}
              alt={selectedRecipe.title}
              className="rounded-xl md:w-64 w-full object-cover shadow-lg"
              style={{ maxHeight: "300px" }}
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300">
                Ingredients:
              </h3>
              <ul className="list-disc list-inside max-h-64 overflow-y-auto text-orange-800 dark:text-orange-200 space-y-1 leading-relaxed">
                {selectedRecipe.ingredients.map((ing, idx) => (
                  <li key={idx}>
                    {ing.quantity ? `${ing.quantity} ` : ""}
                    {ing.unit ? `${ing.unit} ` : ""}
                    {ing.description}
                  </li>
                ))}
              </ul>
              <a
                href={selectedRecipe.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-orange-600 dark:text-orange-400 font-semibold hover:underline transition"
              >
                View full instructions &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;
