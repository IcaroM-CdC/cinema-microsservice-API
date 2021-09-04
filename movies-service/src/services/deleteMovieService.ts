import { connect, ConnectOptions } from "mongoose"
import { MovieModel } from "../database/database"
import generalSettings from "../../config.json"

const options: ConnectOptions = {}

export class DeleteMovieService {

    async execute(title: any){
        await connect(generalSettings.DATABASE_URL, options)
        const movie = await MovieModel.findOneAndDelete(title)

        if (!movie){
            throw new Error(`Movie ${title} not found`)
        }

        return movie
    }
}