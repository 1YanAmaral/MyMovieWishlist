import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { listMovies, changeMovie, newMovie, removeMovie, listMoviesByPlatform } from "./controllers/movies-controller.js";
const server = express();

server.use(cors());
server.use(express.json());

server.get("/status", (req, res) => {
  res.send("Ok");
});

server.get("/movies", listMovies);
server.put("/movies", changeMovie);
server.post("/movies", newMovie);
server.delete("/movies/:id", removeMovie);
server.get("/platform", listMoviesByPlatform);



server.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});