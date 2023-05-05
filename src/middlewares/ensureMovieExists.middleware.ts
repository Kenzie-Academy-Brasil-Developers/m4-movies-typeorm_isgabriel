import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureMovieExists = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const movieRespository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const findMovieOnList: Movie | null = await movieRespository.findOne({
        where: {
            id: parseInt(request.params.id),
        },
    });

    if (!findMovieOnList) {
        throw new AppError("Movie not found", 404);
    }

    return next();
};

export default ensureMovieExists;
