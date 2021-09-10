import express from "express"
import httpProxy from "express-http-proxy"

import "express-async-errors"

import { ErrorHandler } from "./middlewares/errorHandler"
import { Request, Response, NextFunction } from "express"

const APP = express()
const PORT = 4000


APP.use(express.json())

function selectProxyHost(request: Request){

    if (request.path.startsWith("/movies")){

        console.log(request.path)
        return "http://localhost:3001/"
    }

    if (request.path.startsWith("/cinema")){

        return "http://localhost:3002/"
    }

    else {

        throw new Error("Rota inválida")
    }
}

APP.use((request: Request, response: Response, next: NextFunction) => {

    httpProxy(selectProxyHost(request))(request, response, next)

});

APP.use(ErrorHandler)

APP.listen(PORT, function(){
    console.log(`proxy rodando na porta http://localhost:${PORT}`)
})