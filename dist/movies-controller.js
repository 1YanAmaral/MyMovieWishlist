"use strict";
exports.__esModule = true;
exports.listMovies = void 0;
function listMovies(req, res) {
    var movies = ["Movie 1", "Movie 2", "Movie 3"];
    res.send(movies);
}
exports.listMovies = listMovies;
