import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("✅ sportsbuzz backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});