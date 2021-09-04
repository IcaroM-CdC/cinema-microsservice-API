export interface InterfaceCinema {
    name: string,
    movieTheaters: number,
    movies?: Array<string>,
    address: object,
}

export interface InterfaceUpdateMovieList {
    cineName: string,
    movieName: string
}