import { Repository } from "typeorm";
import { IMovieRepo, IMovieRes } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieResSchema } from "../../schemas/movies.schema";

const createMovieService = async (
    movieData: IMovieRepo
): Promise<IMovieRes> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);
    const movie = movieRepository.create(movieData);
    await movieRepository.save(movie);

    const newMovie = movieResSchema.parse(movie);

    return newMovie;
};
export default createMovieService;
