import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import dummySchedule from "../data/dummySchedule.js";

const router = express.Router();
const SCHEDULE_URL = "https://www.iplt20.com/matches/schedule/men";

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(SCHEDULE_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
    });
    const $ = cheerio.load(data);

    let schedule = [];

    $(".match-list .match-list__item").each((_, el) => {
      const team1 = $(el).find(".team-1 .name").text().trim();
      const team2 = $(el).find(".team-2 .name").text().trim();
      const date = $(el).find(".match-list__date").text().trim();
      const venue = $(el).find(".match-list__venue").text().trim();

      if (team1 && team2) {
        schedule.push({ team1, team2, date, venue });
      }
    });

    // fallback dummy schedule if scraping fails
    if (schedule.length === 0) {
      schedule = dummySchedule;
    }

    res.json({ schedule });
  } catch (error) {
    console.error("Error scraping schedule:", error.message);
    res.json({ schedule: dummySchedule }); // always fallback
  }
});

export default router;
