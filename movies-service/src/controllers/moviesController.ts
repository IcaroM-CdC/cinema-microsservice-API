import { Request, Response } from "express"

export class MoviesController {

    insertMovie(request: Request, response: Response){
        const { name, duration, description } = request.body
        
        return response.status(200).json({

            name: name,
            duration: duration,
            escription: description

        })
    }
}