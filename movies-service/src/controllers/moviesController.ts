import { Request, Response } from "express"
import { ListMovieService } from "../services/listMovieService"
import { CreateMovieService } from "../services/createMovieService"

export class MoviesController {

    async insertMovie(request: Request, response: Response){

        const { id, title, plot, duration, releaseDate, img, categories } = request.body
        const createMovieService = new CreateMovieService()
        const newMovie = await createMovieService.execute({id, title, plot, duration, releaseDate, img, categories})
        
        console.log(newMovie)

        return response.status(200).json({
            movie: newMovie
        })
    }

    async listAllMovies(request: Request, response: Response){

        const listMovieService = new ListMovieService()
        const moviesList = await listMovieService.execute()

        return response.status(200).json({
            moviesList: moviesList
        })

    }
}