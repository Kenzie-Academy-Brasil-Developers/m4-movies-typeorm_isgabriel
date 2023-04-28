import { Request, Response } from "express";
import createMovieService from "../services/movies/createMovie.service";
import { IMovieRepo } from "../interfaces/movies.interfaces";
import { sortSchema } from "../schemas/movies.schema";
import { listAllMoviesService } from "../services/movies/listAllMovies.service";

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
const deleteMovieController = async (
    request: Request,
    response: Response
) => {};
const updateMovieController = async (
    request: Request,
    response: Response
) => {};

export {
    createMovieController,
    listAllMoviesController,
    deleteMovieController,
    updateMovieController,
};
