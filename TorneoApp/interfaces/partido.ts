import { IEquipo } from "./equipo";
import { ICampeonato } from "./campeonato";
import { IGol } from "./gol";

export interface IPartido{
    team_local: IEquipo,
    team_visitante: IEquipo,
    date: Date,
    goals_local: number,
    goals_visitante: number
    tournament: ICampeonato,
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final",
    goals: IGol[]
}