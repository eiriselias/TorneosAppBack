import { Type } from "class-transformer"
import { IsArray, IsInt, IsOptional, IsString, MinLength, ValidateNested } from "class-validator"
import { crearCampeonatoDto } from "src/campeonato/dto/crearCampeonato.dto"
import { crearJugadorDto } from "src/jugador/dto/crearJugador.dto"

export class crearEquipoDto{

    @IsString()
    @MinLength(3)
    name: string
    
    @IsString()
    @IsOptional()
    shield: string //url o imagen del escudo

    @IsArray()
    @ValidateNested({each: true})
    @Type(()=>crearJugadorDto)
    players: crearJugadorDto[]

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearCampeonatoDto)
    tournaments: crearCampeonatoDto[]

    @IsInt()
    @IsOptional()
    pj: number

    @IsInt()
    @IsOptional()
    pg: number

    @IsInt()
    @IsOptional()
    pe: number

    @IsInt()
    @IsOptional()
    pp: number

    @IsInt()
    @IsOptional()
    gf: number

    @IsInt()
    @IsOptional()
    gc: number

    @IsInt()
    @IsOptional()
    pts: number
}