import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsOptional, IsString, MinLength, IsIn, IsArray, ValidateNested } from "class-validator"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearPartidoDto } from "src/partido/dto/crearPartido.dto"

export class crearCampeonatoDto{

    @ApiProperty({example:'Campeonato de ejemplo'})
    @IsString()
    @MinLength(3)
    name: string

    @ApiProperty({example:'2025-01-01'})
    @IsDate()
    @Type(()=>Date)
    date_start: Date

    @ApiProperty({example:'2025-01-01'})
    @IsDate()
    @IsOptional()
    @Type(()=>Date)
    date_end?: Date

    @ApiProperty({example:'por_iniciar'})
    @IsIn(["por_iniciar","en_juego","terminado"],{
        message: 'El estado puede ser por_iniciar, en_juego o terminado'
    })
    stade: "por_iniciar"|"en_juego"|"terminado"

    @ApiProperty({example:'futbol_sala'})
    @IsIn(["futbol_11","futbol_9","futbol_sala"],{
        message: 'el tipo puede ser futbol_11, futbol_9 o futbol_sala'
    })
    tipe: "futbol_11"|"futbol_9"|"futbol_sala"

    @ApiProperty({example:'[]'})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearEquipoDto)
    teams: crearEquipoDto[]
    
    @ApiProperty({example:'[]'})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearPartidoDto)
    matches: crearPartidoDto[]

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    @IsOptional()
    first?: crearEquipoDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    @IsOptional()
    second?: crearEquipoDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    @IsOptional()
    third?: crearEquipoDto

    @ValidateNested()
    @Type(()=>crearEquipoDto)
    @IsOptional()
    fourth?: crearEquipoDto
}