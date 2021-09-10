import express from "express"
import generalSettings from "../config.json"
import { MoviesController } from "./controllers/moviesController"
import { ErrorHandler } from "./middlewares/errorHandler"
import "express-async-errors"

const APP = express()
const PORT = 3001 || generalSettings.PORT

const moviesController = new MoviesController()

APP.use(express.json())

APP.post("/movies/create", moviesController.insertMovie)
APP.delete("/movies/delete", moviesController.deleteMovie)

APP.get("/movies/list/all", moviesController.listAllMovies)
APP.get("/movies/list/byCategory", moviesController.listByCategory)
APP.get("/movies/list/byTitle", moviesController.listByTitle)


APP.use(ErrorHandler)

APP.listen(PORT, function(){
    console.log(`microsservice rodando na porta http://localhost:${PORT}`)
})