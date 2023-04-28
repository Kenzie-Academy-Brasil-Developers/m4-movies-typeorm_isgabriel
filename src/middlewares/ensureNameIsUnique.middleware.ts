import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureNameIsUnique = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);
    const reqName = request.body.name;

    if (!reqName) {
        return next();
    }

    const findMovie = await movieRepository.findOne({
        where: {
            name: reqName,
        },
    });

    if (findMovie && reqName) {
        throw new AppError("Movie already exists.", 409);
    }

    return next();
};

export default ensureNameIsUnique;
