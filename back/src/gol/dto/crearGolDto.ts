import { Type } from "class-transformer"
import { IsBoolean, ValidateNested } from "class-validator"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearJugadorDto } from "src/jugador/dto/crearJugador.dto"
import { crearPartidoDto } from "src/partido/dto/crearPartido.dto"

export class crearGolDto{
    
    @ValidateNested()
    @Type(()=> crearJugadorDto)
    player:crearJugadorDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team:crearEquipoDto

    @ValidateNested()
    @Type(()=>crearPartidoDto)
    match: crearPartidoDto


    @IsBoolean()
    autogol: boolean
}