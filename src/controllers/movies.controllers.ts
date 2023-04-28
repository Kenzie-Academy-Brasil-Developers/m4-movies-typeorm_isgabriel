import { Request, Response } from "express";
import createMovieService from "../services/movies/createMovie.service";
import { IMovieRepo } from "../interfaces/movies.interfaces";
import { sortSchema } from "../schemas/movies.schema";
import { listAllMoviesService } from "../services/movies/listAllMovies.service";
import deleteMovieService from "../services/movies/deleteMovie.service";
import updateMovieService from "../services/movies/updateMovie.service";

const createMovieController = async (request: Request, response: Response) => {
    const movieData: IMovieRepo = request.body;

    const newMovie = await createMovieService(movieData);

    return response.status(201).json(newMovie);
};
const listAllMoviesController = async (
    request: Request,
    response: Response
) => {
    const { perPage, page, order, sort } = request.query;
    const newType = sortSchema.parse(sort);

    const allMovies = await listAllMoviesService(perPage, page, order, newType);

    return response.json(allMovies);
};
const deleteMovieController = async (request: Request, response: Response) => {
    const movieId = parseInt(request.params.id);
    await deleteMovieService(movieId);

    return response.status(204).send();
};
const updateMovieController = async (request: Request, response: Response) => {
    const movieData = request.body;
    const movieId = parseInt(request.params.id);
    const updatedMovie = await updateMovieService(movieData, movieId);

    return response.json(updatedMovie);
};

export {
    createMovieController,
    listAllMoviesController,
    deleteMovieController,
    updateMovieController,
};
