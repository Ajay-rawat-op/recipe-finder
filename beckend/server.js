import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", recipeRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
