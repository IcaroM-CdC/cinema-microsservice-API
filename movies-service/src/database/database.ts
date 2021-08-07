import mongoose, { Schema } from "mongoose"
import { InterfaceMovie } from "../interfaces"

const movieSchema = new Schema<InterfaceMovie>({

    id: { type: String, required: true },
    title: { type: String, required: true },
    plot: { type: String, required: true },
    duration: { type: Number, required: true },
    releaseDate: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array, required: true },

})

export const MovieModel = mongoose.model<InterfaceMovie>("Movie", movieSchema)
