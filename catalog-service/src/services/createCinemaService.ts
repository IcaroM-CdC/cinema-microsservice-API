import { ConnectOptions, connect, disconnect } from 'mongoose'
import { CinemaModel } from "../database/database"
import { InterfaceCinema } from "../interfaces"
import generalSettings from "../../config.json"

const options: ConnectOptions = {}

export class CreateCinemaService {

    /* Tratar caso um filme nao existir no banco de dados dos filmes */

    async execute({ name, movieTheaters, movies, address }: InterfaceCinema){

        await connect(generalSettings.DATABASE_URL, options);
        const cinemaAlreadyExists = await CinemaModel.findOne({ name: name });

        if (cinemaAlreadyExists){
            throw new Error("This movie already exists in database")
        }
        
        const cinema = new CinemaModel({
            name: name,
            movieTheaters: movieTheaters,
            movies: movies,
            address: address
        })

        const newCinema = await cinema.save()
        await disconnect()

        return newCinema;
    }
}