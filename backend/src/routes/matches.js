import { Router } from "express";
import { pool } from "../utils/db.js";

const router = Router();

// Get upcoming fixtures
router.get("/fixtures", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, team_a, team_b, venue, raw_date, status FROM matches WHERE status='upcoming'"
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching fixtures:", err);
    res.status(500).json({ error: "Failed to fetch fixtures" });
  }
});

export default router;
