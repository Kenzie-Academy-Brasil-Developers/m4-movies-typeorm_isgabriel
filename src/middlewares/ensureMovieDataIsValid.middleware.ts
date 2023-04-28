import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureMoviedataIsValid =
    (schema: ZodTypeAny) =>
    (request: Request, response: Response, next: NextFunction) => {
        const reqBody = request.body;
        const validatedData = schema.parse(reqBody);
        request.body = validatedData;

        return next();
    };

export default ensureMoviedataIsValid;
