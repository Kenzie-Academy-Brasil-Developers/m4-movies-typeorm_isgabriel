import { Repository } from "typeorm";
import { TMovieRepo, TMovieRes } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieResSchema } from "../../schemas/movies.schema";

const createMovieService = async (
    movieData: TMovieRepo
): Promise<TMovieRes> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);
    const movie: Movie = movieRepository.create(movieData);
    await movieRepository.save(movie);

    const newMovie: TMovieRes = movieResSchema.parse(movie);

    return newMovie;
};
export default createMovieService;
