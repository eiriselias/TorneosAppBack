import { IsOptional, IsString, IsIn, IsNumber } from "class-validator"

export class actulizarJugadorDto {
    @IsString()
    @IsOptional()
    name?: string

    @IsNumber()
    @IsOptional()
    number?: number

    @IsIn(["portero","defensor","mediocampista","delantero"],{
        message: 'La posision debe ser portero, defensor, mediocampista o delantero'
    })
    @IsOptional()
    position?: "portero"|"defensor"|"mediocampista"|"delantero"

    @IsString()
    @IsOptional()
    teamId?: string
}