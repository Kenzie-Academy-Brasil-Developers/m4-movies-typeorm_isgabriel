import { z } from "zod";
import {
    arrayMoviesSchema,
    createMovieSchema,
    moviePaginationSchema,
    movieResSchema,
} from "../schemas/movies.schema";
import { Repository } from "typeorm";
import { Movie } from "../entities";

type IMovieRepo = z.infer<typeof createMovieSchema>;
type IMovieRes = z.infer<typeof movieResSchema>;

type TMoviePagination = z.infer<typeof moviePaginationSchema>;
type TMoviesArray = z.infer<typeof arrayMoviesSchema>;
type TMovieRepository = Repository<Movie>;

export {
    IMovieRepo,
    IMovieRes,
    TMoviePagination,
    TMoviesArray,
    TMovieRepository,
};
