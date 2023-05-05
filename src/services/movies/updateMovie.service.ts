import { Repository } from "typeorm";
import { TMovieRes } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieResSchema } from "../../schemas/movies.schema";

const updateMovieService = async (
    movieData: any,
    movieId: number
): Promise<TMovieRes> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const movieToBeUpdated: Movie | null = await movieRepository.findOneBy({
        id: movieId,
    });

    const movie: Movie[] = movieRepository.create({
        ...movieToBeUpdated,
        ...movieData,
    });
    await movieRepository.save(movie);
    const updatedMovie: TMovieRes = movieResSchema.parse(movie);

    return updatedMovie;
};

export default updateMovieService;
