import { QueryResult } from "pg";
import connection from "../connection.js";
import {Movie, MovieEntity} from "../protocols/Movie.js";


async function getMovies(): Promise<QueryResult<MovieEntity>>  {
    return await connection.query(`SELECT * FROM movie;`);
  };

async function insertMovie(movie: Movie): Promise<QueryResult<MovieEntity>>{
    return await connection.query(`INSERT INTO movie (name, platform, genre) VALUES ($1, $2, $3);`, [movie.name, movie.platform, movie.genre]);
  };

async function updateMovie (status: string, id: number): Promise<QueryResult> {
    return await connection.query(`UPDATE movie SET status = $1 WHERE id = $2;`, [status, id]);
  };

async function deleteMovie(id: number): Promise<QueryResult> {
    return await connection.query(`DELETE FROM movie WHERE id = $1;`, [id]);
  };
async function getMoviesByPlatform(platform): Promise<QueryResult<MovieEntity>>  {
    return await connection.query(`SELECT * FROM movie WHERE platform ~* $1;`, [platform]);
  };

export {getMovies, insertMovie, updateMovie, deleteMovie, getMoviesByPlatform}