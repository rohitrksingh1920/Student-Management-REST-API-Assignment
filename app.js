import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Simple home route
app.get("/", (req, res) => {
  res.json({
    message: "Student Management REST API is running",
  });
});

// Student routes
app.use("/students", studentRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log("server has started at port", PORT);
});
