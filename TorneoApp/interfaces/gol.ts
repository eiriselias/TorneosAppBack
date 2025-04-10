import { IEquipo } from "./equipo";
import { IJugador } from "./jugador";

export interface IGol{
    player: IJugador,
    team: IEquipo,
    autogol: boolean
}