import express from "express";
import generalSettings from "../config.json"
import { MoviesController } from "./controllers/moviesController"
import { ErrorHandler } from "./middlewares/errorHandler"
import "express-async-errors"

const APP = express()
const PORT = 3001 || generalSettings.PORT

const moviesController = new MoviesController

APP.use(express.json())

APP.post("/movies", moviesController.insertMovie)

APP.get("/movies/getAllMovies", moviesController.listAllMovies)
APP.get("/movies/getByCategory", moviesController.listByCategory)

APP.use(ErrorHandler)

APP.listen(PORT, function(){
    console.log(`microsservice rodando na porta http://localhost:${PORT}`)
})