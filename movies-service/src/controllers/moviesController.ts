import { Request, Response } from "express"
import { ListMovieService } from "../services/listMovieService"
import { CreateMovieService } from "../services/createMovieService"

export class MoviesController {

    async insertMovie(request: Request, response: Response){

        const { title, plot, duration, releaseDate, img, categories } = request.body
        const createMovieService = new CreateMovieService()
        const newMovie = await createMovieService.execute({ title, plot, duration, releaseDate, img, categories})
        
        console.log(newMovie)

        return response.status(200).json({
            movie: newMovie
        })
    }

    async listAllMovies(request: Request, response: Response){

        const listMovieService = new ListMovieService()
        const moviesList = await listMovieService.allMovies()

        return response.status(200).json({
            moviesList: moviesList
        })
    }

    async listByCategory(request: Request, response: Response){

        console.log(request.headers.category)

        const { category } = request.headers
        const listMovieService = new ListMovieService()
        const moviesList = await listMovieService.byCategory({ category })

        return response.status(200).json({
            moviesList: moviesList
        })

    }
}