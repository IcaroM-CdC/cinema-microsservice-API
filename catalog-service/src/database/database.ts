import mongoose, { Schema } from "mongoose"
import { InterfaceCinema } from "../interfaces/index"

const cinemaSchema = new Schema<InterfaceCinema>({

    name: { type: String, required: true },
    movieTheaters: { type: Number, required: true },
    movies: { type: Array, required: true, default: [] },
    address: {
        state:  { type: String, required: true },
        city:   { type: String, required: true },
        CEP:    { type: String, required: true },
        street: { type: String, required: true },
        number: { type: Number, required: true }
    }
})

export const CinemaModel = mongoose.model<InterfaceCinema>("Cinema", cinemaSchema)