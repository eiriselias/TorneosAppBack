import { Type } from "class-transformer"
import { IsDate, ValidateNested, IsIn, IsArray, IsInt } from "class-validator"
import { crearCampeonatoDto } from "src/campeonato/dto/crearCampeonato.dto"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearGolDto } from "src/gol/dto/crearGolDto"

export class crearPartidoDto{

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team_local: crearEquipoDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team_visitante: crearEquipoDto

    @IsDate()
    date: Date

    @IsInt()
    goals_local: number

    @IsInt()
    goals_visitante: number

    @ValidateNested()
    @Type(()=>crearCampeonatoDto)
    tournament: crearCampeonatoDto

    @IsIn(["grupos","octavos","cuartos","semifinal","final"],{
        message:"los estados puden ser grupos, octavos, cuartos, semifinal o final"
    })
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final"

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearGolDto)
    goals: crearGolDto[]
}