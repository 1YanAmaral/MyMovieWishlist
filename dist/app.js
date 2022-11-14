import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { listMovies } from "./controllers/movies-controller.js";
var server = express();
server.use(cors());
server.use(express.json());
server.get("/status", function (req, res) {
    res.send("Ok");
});
server.get("/movies", listMovies);
server.listen(process.env.PORT, function () {
    console.log("Server running on port " + process.env.PORT);
});
