import { Type } from "class-transformer"
import { IsBoolean, ValidateNested } from "class-validator"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearJugadorDto } from "src/jugador/dto/crearJugador.dto"

export class crearGolDto{
    
    @ValidateNested()
    @Type(()=> crearJugadorDto)
    player:crearJugadorDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team:crearEquipoDto

    @IsBoolean()
    autogol: boolean
}