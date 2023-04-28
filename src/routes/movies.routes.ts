import { Router } from "express";
import { createMovieController } from "../controllers/movies.controllers";
import ensureNameIsUnique from "../middlewares/ensureNameIsUnique.middleware";
import ensureMoviedataIsValid from "../middlewares/ensureMovieDataIsValid.middleware";
import { createMovieSchema } from "../schemas/movies.schema";

const movieRoutes: Router = Router();

movieRoutes.post(
    "",
    ensureMoviedataIsValid(createMovieSchema),
    ensureNameIsUnique,
    createMovieController
);
movieRoutes.get("");
movieRoutes.delete("/:id");
movieRoutes.patch("/:id");

export default movieRoutes;
