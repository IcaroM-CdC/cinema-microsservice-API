import { ConnectOptions, connect, disconnect } from 'mongoose'
import { CinemaModel } from "../database/database"
import { InterfaceCinema, InterfaceUpdateMovieList } from "../interfaces"
import generalSettings from "../../config.json"

const options: ConnectOptions = {}

export class UpdateCinemaService {

    async addMovie({cineName, movieName}: InterfaceUpdateMovieList){

        await connect(generalSettings.DATABASE_URL, options);

        const movieAlreadyExists = await CinemaModel.find({ name: cineName, movies: movieName })
        const cineAlreadyExists  = await CinemaModel.findOne({ name: cineName })

        console.log(movieAlreadyExists)

        // Caso o filme não exista no banco de dados, @movieAlreadyExists retornara um vetor vazio
        if (movieAlreadyExists != []){
            throw new Error("This movie is already registred in this cine")
        }

        if (!cineAlreadyExists){
            throw new Error("This cinema don't exists in database")
        }

        /*  $push insere no array movies o valor de moviName  */
        const cinema = await CinemaModel.findOneAndUpdate({ name: cineName },{ $push: { movies: movieName }})
        await disconnect()

        return {
            cinemaName: cinema?.name,
            movieList: cinema?.movies
        }
    }
}