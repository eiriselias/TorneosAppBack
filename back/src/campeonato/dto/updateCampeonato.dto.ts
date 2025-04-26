import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsOptional, IsString, MinLength, IsIn } from "class-validator"

export class actualizarCampeonatoDto{

    @ApiProperty({example:'Campeonato de ejemplo'})
    @IsString()
    @MinLength(3)
    @IsOptional()
    name: string

    @ApiProperty({example:'2025-01-01'})
    @IsDate()
    @IsOptional()
    @Type(()=> Date)
    date_start?: Date

    @ApiProperty({example:'2025-01-01'})
    @IsDate()
    @IsOptional()
    @Type(()=> Date)
    date_end?: Date

    @ApiProperty({example:'en_juego'})
    @IsIn(["por_iniciar","en_juego","terminado"],{
        message: 'El estado puede ser por_iniciar, en_juego o terminado'
    })
    @IsOptional()
    stade?: "por_iniciar"|"en_juego" | "terminado"

    @ApiProperty({example:'fulbol_11'})
    @IsIn(["futbol_11","fulbol_9", "futbol_sala"],{
        message: 'el tipo puede ser futbol_11, fulbol_9 o fulbol_sala'
    })
    @IsOptional()
    tipe?: "futbol_11" | "futbol_9" | "futbol_sala"

    @IsString()
    @IsOptional()
    firstId?: string
    
    @IsString()
    @IsOptional()
    secondId?: string
    
    @IsString()
    @IsOptional()
    thirdId?: string
    
    @IsString()
    @IsOptional()
    fourthId?: string
}