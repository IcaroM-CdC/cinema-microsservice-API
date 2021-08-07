import express from "express";

import { MoviesController } from "./controllers/moviesController"

const APP = express()
const PORT = 3001

const moviesController = new MoviesController

APP.use(express.json())

APP.post("/movies", moviesController.insertMovie)


APP.listen(PORT, function(){
    console.log(`microsservice rodando na porta http://localhost:${PORT}`)
})