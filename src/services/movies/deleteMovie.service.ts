import { Repository } from "typeorm";
import { Movie } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteMovieService = async (movieId: number): Promise<void> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const selectedMovieToDelete: Movie | null = await movieRepository.findOne({
        where: {
            id: movieId,
        },
    });

    await movieRepository.remove(selectedMovieToDelete!);
};

export default deleteMovieService;
