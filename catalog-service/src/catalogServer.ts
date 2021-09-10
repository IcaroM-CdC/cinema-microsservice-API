import express from "express";
import generalSettings from "../config.json"
import { CinemaController } from "./controllers/cinemaController" 
import { ErrorHandler } from "./middlewares/errorHandler"
import "express-async-errors"

const APP = express()
const PORT = 3002 || generalSettings.PORT

const cinemaController = new CinemaController();

APP.use(express.json())

APP.post("/cinema/create", cinemaController.createCinema)
APP.post("/cinema/update/add-movie", cinemaController.updateMovieList)

// APP.get("/cinema/")

APP.use(ErrorHandler)

APP.listen(PORT, function(){
    console.log(`microsservice rodando na porta http://localhost:${PORT}`)
})