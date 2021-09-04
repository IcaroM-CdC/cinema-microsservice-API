import { ConnectOptions, connect, disconnect } from 'mongoose'
import { MovieModel } from "../database/database"
import { InterfaceMovie } from "../interfaces"
import generalSettings from "../../config.json"

const options: ConnectOptions = {}

export class CreateMovieService {

    async execute({ title, plot, duration, releaseDate, img, categories }: InterfaceMovie){
        
        await connect(generalSettings.DATABASE_URL, options)

        const movieAlreadyExists = await MovieModel.findOne({ title })

        if (movieAlreadyExists){
            throw new Error("This movie already exists in database")
        }

        const movie = new MovieModel({
            title: title,
            plot: plot,
            duration: duration,
            releaseDate: releaseDate,
            img: img,
            categories: categories
        });

        const newMovie = await movie.save()
        await disconnect()
        return newMovie
    }
}