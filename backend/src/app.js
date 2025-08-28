import express from "express";
import cors from "cors";

import matchesRoute from "./routes/matches.js";
import pointsRoute from "./routes/pointsTable.js";
import scheduleRoute from "./routes/schedule.js";
import scorecardRoute from "./routes/scoreCard.js";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("✅ backend is running");
});

// routes
app.use("/api/matches", matchesRoute);
app.use("/api/points-table", pointsRoute);
app.use("/api/schedule", scheduleRoute);
app.use("/api/matches", scorecardRoute);

export default app;
