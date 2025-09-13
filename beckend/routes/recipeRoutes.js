import express from "express";
import {
  searchRecipes,
  getRecipeDetails,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/search", searchRecipes);
router.get("/recipe/:id", getRecipeDetails);

export default router;
