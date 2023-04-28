import { Repository } from "typeorm";
import { IMovieRes } from "../../interfaces/movies.interfaces";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";
import { movieResSchema } from "../../schemas/movies.schema";

const updateMovieService = async (
    movieData: any,
    movieId: number
): Promise<IMovieRes> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const movieToBeUpdated = await movieRepository.findOneBy({
        id: movieId,
    });

    const movie = movieRepository.create({
        ...movieToBeUpdated,
        ...movieData,
    });
    await movieRepository.save(movie);
    const updatedMovie = movieResSchema.parse(movie);

    return updatedMovie;
};

export default updateMovieService;
