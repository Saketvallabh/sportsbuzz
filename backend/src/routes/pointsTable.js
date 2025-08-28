import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import dummyPointsTable from "../data/dummyPointsTable.js";

const router = express.Router();
const POINTS_TABLE_URL = "https://www.iplt20.com/points-table/men";

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(POINTS_TABLE_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
    });
    const $ = cheerio.load(data);

    let pointsTable = [];

    $("table.points-table tbody tr").each((_, el) => {
      const team = $(el).find("td.team span.team-names").text().trim();
      const played = $(el).find("td:nth-child(3)").text().trim();
      const won = $(el).find("td:nth-child(4)").text().trim();
      const lost = $(el).find("td:nth-child(5)").text().trim();
      const points = $(el).find("td:nth-child(7)").text().trim();
      const nrr = $(el).find("td:nth-child(8)").text().trim();

      if (team) {
        pointsTable.push({ team, played, won, lost, points, nrr });
      }
    });

    // fallback if scraping failed
    if (pointsTable.length === 0) {
      pointsTable = dummyPointsTable;
    }

    res.json({ pointsTable });
  } catch (error) {
    console.error("Error scraping points table:", error.message);
    res.json({ pointsTable: dummyPointsTable }); // fallback always
  }
});

export default router;
