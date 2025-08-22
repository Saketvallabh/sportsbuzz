import express from "express";
import cors from "cors";
import matchesRouter from "./routes/matches.js";

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("✅ sportsbuzz backend is running"));

// Routes
app.use("/api", matchesRouter);

export default app;
