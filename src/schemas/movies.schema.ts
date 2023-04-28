import { z } from "zod";

const createMovieSchema = z.object({
    duration: z
        .number()
        .int()
        .min(0, { message: "Number must be greater than 0" }),
    name: z.string().max(50),
    description: z.string().optional().nullable(),
    price: z
        .number()
        .int()
        .min(0, { message: "Number must be greater than 0" }),
});

const movieResSchema = createMovieSchema.extend({
    id: z.number(),
});

const sortSchema = z.enum(["id", "duration", "price"]).default("id");

const arrayMoviesSchema = movieResSchema.array();

const movieUpdateSchema = createMovieSchema.partial();

const moviePaginationSchema = z.object({
    count: z.number().min(0),
    data: arrayMoviesSchema,
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
});

export {
    createMovieSchema,
    movieResSchema,
    sortSchema,
    arrayMoviesSchema,
    movieUpdateSchema,
    moviePaginationSchema,
};
