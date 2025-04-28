import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, ValidateNested, IsIn, IsArray, IsInt, IsString } from "class-validator"
import { crearGolDto } from "src/gol/dto/crearGol.dto"

export class crearPartidoDto{

    @ApiProperty({example:"cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    team_localId: string

    @ApiProperty({example:"cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    team_visitanteId: string

    @ApiProperty({example:"2025-01-01"})
    @IsDate()
    date: Date

    @ApiProperty({example:"30:00 pm"})
    @IsString()
    time: string

    @ApiProperty({example:"cancha morrumbi"})
    @IsString()
    place: string

    @ApiProperty({example:3})
    @IsInt()
    goals_local: number

    @ApiProperty({example:1})
    @IsInt()
    goals_visitante: number

    @ApiProperty({example:"cm9xl60ja0000wg5wlx19vj0v"})
    @IsString()
    tournamentId: string

    @ApiProperty({example:"grupos"})
    @IsIn(["grupos","octavos","cuartos","semifinal","final"],{
        message:"los estados puden ser grupos, octavos, cuartos, semifinal o final"
    })
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final"

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearGolDto)
    goals: crearGolDto[]
}