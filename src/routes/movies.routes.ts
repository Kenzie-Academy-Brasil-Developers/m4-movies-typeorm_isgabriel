import { Router } from "express";
import {
    createMovieController,
    deleteMovieController,
    listAllMoviesController,
    updateMovieController,
} from "../controllers/movies.controllers";
import ensureNameIsUnique from "../middlewares/ensureNameIsUnique.middleware";
import ensureMoviedataIsValid from "../middlewares/ensureMovieDataIsValid.middleware";
import { createMovieSchema, movieUpdateSchema } from "../schemas/movies.schema";
import ensureMovieExists from "../middlewares/ensureMovieExists.middleware";

const movieRoutes: Router = Router();

movieRoutes.post(
    "",
    ensureMoviedataIsValid(createMovieSchema),
    ensureNameIsUnique,
    createMovieController
);
movieRoutes.get("", listAllMoviesController);
movieRoutes.delete("/:id", ensureMovieExists, deleteMovieController);
movieRoutes.patch(
    "/:id",
    ensureMoviedataIsValid(movieUpdateSchema),
    ensureMovieExists,
    ensureNameIsUnique,
    updateMovieController
);

export default movieRoutes;
