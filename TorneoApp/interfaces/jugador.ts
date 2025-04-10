import { IGol } from "./gol";

export interface IJugador{
    name: string,
    number: number,
    position: "portero"|"defensa"|"medio"|"delantero",
    goals: IGol[]
}