import { Request, Response } from "express";
import createMovieService from "../services/movies/createMovie.service";
import { IMovieRepo } from "../interfaces/movies.interfaces";

const createMovieController = async (request: Request, response: Response) => {
    const movieData: IMovieRepo = request.body;

    const newMovie = await createMovieService(movieData);

    return response.status(201).json(newMovie);
};
const listAllMoviesController = async (
    request: Request,
    response: Response
) => {};
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
