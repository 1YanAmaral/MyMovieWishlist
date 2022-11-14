import {Request, Response} from 'express';
import { Movie } from '../protocols/Movie.js';
import {getMovies, insertMovie, updateMovie, deleteMovie, getMoviesByPlatform} from "../repository/movies-repository.js";
import {MovieSchema} from '../schemas/movie-schema.js';

async function listMovies(req: Request, res: Response) {
  try {
    const moviesList = (await getMovies()).rows;
    return res.send(moviesList);
    
  } catch (error) {
    console.log(error.message);
  }
  
}

async function changeMovie(req: Request, res: Response) {
  try {
    const {status, id} = req.body;
    updateMovie(status, id);
    return res.send("Updated!")
  } catch (error) {
    console.log(error.message);
  }
  
}

async function newMovie(req: Request, res: Response) {
  try {
    const movie = req.body as Movie;

    const {error} = MovieSchema.validate(movie);
    if(error) {
      return res.status(400).send({
        message: error.message
      })
    }
    insertMovie(movie)
    return res.send("Inserted!")
  } catch (error) {
    console.log(error.message);
  }
  
}

async function removeMovie(req: Request, res: Response) {
  try {
    const id: number = Number(req.params.id);
    deleteMovie(id);
    return res.send("Deleted!")
  } catch (error) {
    console.log(error.message);
  }
  
}

async function listMoviesByPlatform(req: Request, res: Response) {
  try {
    const {platform} = req.query;
    const moviesList = (await getMoviesByPlatform(platform)).rows;
    return res.send(moviesList);
    
  } catch (error) {
    console.log(error.message);
  }
  
}

export { listMovies, changeMovie, newMovie, removeMovie, listMoviesByPlatform};
