import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import{
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
    IsIn,
    IsArray,
    ValidateNested
} from 'class-validator'
import { crearGolDto } from 'src/gol/dto/crearGol.dto'

export class crearJugadorDto {

    @ApiProperty({example:"Elias Salazar"})
    @IsString()
    @MinLength(3)
    name: string

    @ApiProperty({example:7})
    @IsNumber()
    @IsOptional()
    number?: number

    @ApiProperty({example:"delantero"})
    @IsIn(["portero","defensor","mediocampista","delantero"],{
        message: 'La posision debe ser portero, defensor, mediocampista o delantero'
    })
    position: "portero"|"defensor"|"mediocampista"|"delantero"

    @ApiProperty({example:"[]"})
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearGolDto)
    goals?:crearGolDto[];
    
    @ApiProperty({example:"cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    teamId?: string
}