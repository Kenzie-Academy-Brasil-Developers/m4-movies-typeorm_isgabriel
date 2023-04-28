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

export { createMovieSchema, movieResSchema };
