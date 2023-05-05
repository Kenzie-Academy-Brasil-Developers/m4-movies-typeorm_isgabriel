import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TMovieRepo } from "../interfaces/movies.interfaces";

const ensureMoviedataIsValid =
    (schema: ZodTypeAny) =>
    (request: Request, response: Response, next: NextFunction) => {
        const reqBody: TMovieRepo = request.body;
        const validatedData: TMovieRepo = schema.parse(reqBody);
        request.body = validatedData;

        return next();
    };

export default ensureMoviedataIsValid;
