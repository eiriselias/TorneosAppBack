import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsArray, IsInt, IsOptional, IsString, IsUrl, MinLength, ValidateNested } from "class-validator"
import { crearJugadorDto } from "src/jugador/dto/crearJugador.dto"

export class crearEquipoDto{

    @ApiProperty({example:"Los Galaticos"})
    @IsString()
    @MinLength(3)
    name: string
    
    @ApiProperty({example:'https://www.imagenes.com/image'})
    @IsUrl()
    @IsOptional()
    shield: string //url o imagen del escudo

    @ApiProperty({example:'[]'})
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=>crearJugadorDto)
    players: crearJugadorDto[]

    @ApiProperty({example:'capeonatoId?????????????'})
    @IsString()
    tournamentId: string

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