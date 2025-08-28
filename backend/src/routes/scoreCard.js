import express from "express";
import scorecards from "../data/dummyScoreCard.js";

const router = express.Router();

router.get("/:matchId/scorecard", (req, res) => {
  const { matchId } = req.params;
  const scorecard = scorecards[matchId];

  if (!scorecard) {
    return res.status(404).json({ error: "Scorecard not found" });
  }

  res.json(scorecard);
});

export default router;
