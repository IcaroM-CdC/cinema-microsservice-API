import mongoose, { ConnectOptions } from 'mongoose';
import { MovieModel } from "../database/database"

const options: ConnectOptions = {}

export class ListMovieService {

    async execute(){

        await mongoose.connect("mongodb://localhost:27017/movies-service", options)

        const movies = await MovieModel.find()

        return movies
    }
}