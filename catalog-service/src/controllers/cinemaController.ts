import { Request, Response } from "express"
import { CreateCinemaService } from "../services/createCinemaService"
import { UpdateCinemaService } from "../services/updateCinemaService"

export class CinemaController {

    async createCinema( request: Request, response: Response ){

        const { name, movieTheaters, movies, address } = request.body

        const createCinemaService = new CreateCinemaService()
        const newCinema = await createCinemaService.execute({ name, movieTheaters, movies, address })

        return response.status(200).json({
            cinema: newCinema
        })
    }

    async updateMovieList( request: Request, response: Response ){

        const { cineName, movieName } = request.body

        const updateCinemaService = new UpdateCinemaService()
        const updatedCinema = await updateCinemaService.addMovie({ cineName, movieName })

        return response.status(200).json({
            cinema: updatedCinema
        })
    }
}