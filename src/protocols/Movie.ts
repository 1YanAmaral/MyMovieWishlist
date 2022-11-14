export type MovieEntity = {
    id: number,
    name: string,
    platform: string,
    genre: string,
    status: string
}

export type Movie = Omit<MovieEntity, "id" | "status" >