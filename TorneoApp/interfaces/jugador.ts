import { IGol } from "./gol";

export interface IJugador{
    name: string,
    number: number,
    position: "portero"|"defensor"|"mediocampista"|"delantero",
    goals: IGol[]
}