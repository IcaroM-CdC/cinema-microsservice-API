import { request, Request, Response } from "express"
import { ListMovieService } from "../services/listMovieService"
import { CreateMovieService } from "../services/createMovieService"
import { DeleteMovieService } from "../services/deleteMovieService"

export class MoviesController {

    async insertMovie(request: Request, response: Response){

        const { title, plot, duration, releaseDate, img, categories } = request.body
        const createMovieService = new CreateMovieService()
        const newMovie = await createMovieService.execute({ title, plot, duration, releaseDate, img, categories})
        

        return response.status(200).json({
            movie: newMovie
        })
    }

    async deleteMovie (request: Request, response: Response){

        const { title } = request.body
        const deleteMovieService = new DeleteMovieService()
        const deletedMovie = await deleteMovieService.execute({ title })

        return response.status(200).json({
            movie: deletedMovie
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

        const { category } = request.headers
        const listMovieService = new ListMovieService()
        const moviesList = await listMovieService.byCategory({ category })

        return response.status(200).json({
            moviesList: moviesList
        })

    }

    async listByTitle(request: Request, response: Response){

        const { title } = request.headers
        const listMovieService = new ListMovieService()
        const movie = await listMovieService.byTitle({title})

        return response.status(200).json({
            movie: movie
        })

    }
}