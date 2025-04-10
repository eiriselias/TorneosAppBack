import { IEquipo } from "./equipo";
import { IPartido } from "./partido";

export interface ICampeonato {
    name: string,
    date_start: Date,
    date_end: Date,
    stade: "En juego" | "Terminado",
    tipe: "footbol 11" | "fultbol 9" | "fultbol sala",
    teams: IEquipo[],
    matches: IPartido[],
    first?: IEquipo,
    second?: IEquipo,
    third?: IEquipo,
    fourth?: IEquipo,
}