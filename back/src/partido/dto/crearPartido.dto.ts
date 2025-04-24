import { Type } from "class-transformer"
import { IsDate, isObject, ValidateNested, IsIn, IsArray, IsInt } from "class-validator"
import { crearCampeonatoDto } from "src/campeonato/dto/crearCampeonato.dto"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearGolDto } from "src/gol/dto/crearGolDto"

class resultadoDto{

    @IsInt()
    goals_local: number

    @IsInt()
    goals_visitante: number
}

export class crearPartidoDto{

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team_local: crearEquipoDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    team_visitante: crearEquipoDto

    @IsDate()
    date: Date

    @ValidateNested()
    @Type(()=>resultadoDto)
    result: resultadoDto

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