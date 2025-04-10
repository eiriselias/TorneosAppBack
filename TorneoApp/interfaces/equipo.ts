import { ICampeonato } from "./campeonato";
import { IJugador } from "./jugador";

export interface IEquipo {
    name: string,
    shield: string, //url o imagen del escudo
    players: IJugador[],
    tournaments: ICampeonato[],
    pj: number,
    pg: number,
    pe: number,
    pp: number,
    gf: number,
    gc: number,
    pts: number
}