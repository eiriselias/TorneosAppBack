import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, ValidateNested, IsIn, IsArray, IsInt, IsString, IsOptional } from "class-validator"
import { crearGolDto } from "src/gol/dto/crearGol.dto"

export class crearPartidoDto{

    @ApiProperty({example:"equipoId??????????"})
    @IsString()
    team_localId: string

    @ApiProperty({example:"equipoId???????????"})
    @IsString()
    team_visitanteId: string

    @ApiProperty({example:"2025-01-01"})
    @IsDate()
    @Type(()=>Date)
    date: Date

    @ApiProperty({example:"30:00 pm"})
    @IsString()
    time: string

    @ApiProperty({example:"cancha morrumbi"})
    @IsString()
    place: string

    @ApiProperty({example:3})
    @IsInt()
    @IsOptional()
    goals_local: number

    @ApiProperty({example:1})
    @IsInt()
    @IsOptional()
    goals_visitante: number

    @ApiProperty({example:"campeonatoId??????"})
    @IsString()
    tournamentId: string

    @ApiProperty({example:"grupos"})
    @IsIn(["grupos","octavos","cuartos","semifinal","final"],{
        message:"los estados puden ser grupos, octavos, cuartos, semifinal o final"
    })
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final"

    @ApiProperty({example:"[]"})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearGolDto)
    goals: crearGolDto[]
}