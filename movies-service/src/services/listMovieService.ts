import { connect, ConnectOptions } from 'mongoose';
import { MovieModel } from "../database/database"
import generalSettings from "../../config.json"


const options: ConnectOptions = {}

export class ListMovieService {

    async allMovies(){

        await connect(generalSettings.DATABASE_URL, options)
        const movies = await MovieModel.find()

        console.log(movies)

        return movies
    }

    async byCategory(category: any){

        await connect(generalSettings.DATABASE_URL, options)
        const movieList = await MovieModel.find({ categories: category.category })

        if (!movieList){
            throw new Error("Can't exists one movie of this category")
        }

        return movieList
    }

    async byTitle(title: any){

        await connect(generalSettings.DATABASE_URL, options)
        const movie = await MovieModel.findOne(title)

        if (!movie){
            throw new Error("Movie not found")
        }

        return movie
    }
}
