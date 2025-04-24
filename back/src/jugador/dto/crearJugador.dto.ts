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
import { crearGolDto } from 'src/gol/dto/crearGolDto'

export class crearJugadorDto {

    @IsString()
    @MinLength(3)
    name: string

    @IsNumber()
    @IsOptional()
    number?: number

    @IsIn(["portero","defensor","mediocampista","delantero"],{
        message: 'La posision debe ser portero, defensor, mediocampista o delantero'
    })
    position: "portero"|"defensor"|"mediocampista"|"delantero"

    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>crearGolDto)
    goals:crearGolDto[];

    @IsString()
    teamId: string

    id?: string
}