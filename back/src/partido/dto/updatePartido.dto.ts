import { Type } from "class-transformer"
import { IsDate, ValidateNested, IsIn, IsArray, IsInt, IsString, IsOptional } from "class-validator"
import { crearCampeonatoDto } from "src/campeonato/dto/crearCampeonato.dto"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearGolDto } from "src/gol/dto/crearGolDto"

export class actualizarPartidoDto{

    @IsString()
    @IsOptional()
    team_localId: string

    @IsString()
    @IsOptional()
    team_visitante: string

    @IsDate()
    @IsOptional()
    date: Date

    @IsString()
    @IsOptional()
    time: string

    @IsString()
    @IsOptional()
    place: string

    @IsInt()
    @IsOptional()
    goals_local: number

    @IsInt()
    @IsOptional()
    goals_visitante: number

    @IsString()
    @IsOptional()
    tournamentId: string

    @IsIn(["grupos","octavos","cuartos","semifinal","final"],{
        message:"los estados puden ser grupos, octavos, cuartos, semifinal o final"
    })
    @IsOptional()
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final"

}