import{
    IsString,
    MinLength
} from 'class-validator'
export class crearJugadorDto {

    @IsString()
    @MinLength(3)
    name: string

    @IsString()
    @MinLength(3)
    position: string

    id?: string
}