import { Type } from "class-transformer"
import { IsDate, IsOptional, IsString, MinLength, IsIn, IsArray, ValidateNested } from "class-validator"
import { crearEquipoDto } from "src/equipo/dto/crearEquipo.dto"
import { crearPartidoDto } from "src/partido/dto/crearPartido.dto"

export class actualizarCampeonatoDto{
    @IsString()
    @MinLength(3)
    @IsOptional()
    name: string

    @IsDate()
    @IsOptional()
    date_start?: Date

    @IsDate()
    @IsOptional()
    date_end?: Date

    @IsIn(["Por Iniciar","En Juego","Terminado"],{
        message: 'El estado puede ser Por Iniciar, En Juego o Terminado'
    })
    @IsOptional()
    stade?: "Por Iniciar"|"En Juego" | "Terminado"

    @IsIn(["futbol 11","fulbol 9", "futbol sala"],{
        message: 'el tipo puede ser futbol 11, fulbol 9 o fulbol sala'
    })
    @IsOptional()
    tipe?: "futbol 11" | "futbol 9" | "futbol sala"

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