import { z } from "zod";
import { createMovieSchema, movieResSchema } from "../schemas/movies.schema";

type IMovieRepo = z.infer<typeof createMovieSchema>;
type IMovieRes = z.infer<typeof movieResSchema>;

export { IMovieRepo, IMovieRes };
