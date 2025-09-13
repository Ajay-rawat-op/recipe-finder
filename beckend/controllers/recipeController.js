import { fetchFromForkify } from "../utils/forkifyApi.js";

export const searchRecipes = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Query is required" });

  try {
    const data = await fetchFromForkify(`?search=${q}`);
    res.json(data);
  } catch (err) {
    console.error("Search error:", err.message);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

export const getRecipeDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await fetchFromForkify(`/${id}`);
    res.json(data);
  } catch (err) {
    console.error("Detail error:", err.message);
    res.status(500).json({ error: "Failed to fetch recipe details" });
  }
};
