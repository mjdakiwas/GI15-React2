import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/api/movies/:title", async (req, res) => {
  try {
    if (!req.params.title) return res.json({ error: "Movie title required." });
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_TOKEN,
      },
    };
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${req.params.title}`,
      options
    );
    if (!result.ok) throw new Error(`Failed to fetch: ${result}`);
    const data = await result.json();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json({ error: "Error fetching from API" });
  }
});

app.post("/api/tasks", async (req, res) => {});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
