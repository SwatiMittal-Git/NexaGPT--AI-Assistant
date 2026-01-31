import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: "*" }));

// 🔥 BASE ROUTE
app.use("/api", chatRoutes);

// 🔹 optional test route (GET works in browser)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, async () => {
  console.log(`server running on ${PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch (err) {
    console.log("DB connection failed", err);
  }
});
