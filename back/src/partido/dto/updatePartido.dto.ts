
import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsIn, IsInt, IsString, IsOptional } from "class-validator"

export class actualizarPartidoDto{

    @ApiProperty({example:"cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    team_localId: string

    @ApiProperty({example:"cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    team_visitante: string

    @ApiProperty({example:"2025-01-01"})
    @IsDate()
    @IsOptional()
    date: Date

    @ApiProperty({example:"15:00"})
    @IsString()
    @IsOptional()
    time: string

    @ApiProperty({example:"cancha athenas"})
    @IsString()
    @IsOptional()
    place: string

    @ApiProperty({example:1})
    @IsInt()
    @IsOptional()
    goals_local: number

    @ApiProperty({example:4})
    @IsInt()
    @IsOptional()
    goals_visitante: number

    @ApiProperty({example:"cm9xl60ja0000wg5wlx19vj0v"})
    @IsString()
    @IsOptional()
    tournamentId: string

    @ApiProperty({example:"octavos"})
    @IsIn(["grupos","octavos","cuartos","semifinal","final"],{
        message:"los estados puden ser grupos, octavos, cuartos, semifinal o final"
    })
    @IsOptional()
    stage: "grupos"|"octavos"|"cuartos"|"semifinal"|"final"

}