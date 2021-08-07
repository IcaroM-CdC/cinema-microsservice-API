import mongoose, { ConnectOptions } from 'mongoose';
import { MovieModel } from "../database/database"
import { InterfaceMovie } from "../interfaces"

const options: ConnectOptions = {}

export class CreateMovieService {

    async execute({ id, title, plot, duration, releaseDate, img, categories }: InterfaceMovie){

        await mongoose.connect("mongodb://localhost:27017/movies-service", options)

        const movieAlreadyExists = await MovieModel.findOne({ title })

        if (movieAlreadyExists){
            return "this movie already exists in database"
        }

        const movie = new MovieModel({
            id: id,
            title: title,
            plot: plot,
            duration: duration,
            releaseDate: releaseDate,
            img: img,
            categories: categories
        });

        const newMovie = await movie.save()

        return newMovie
    }
}