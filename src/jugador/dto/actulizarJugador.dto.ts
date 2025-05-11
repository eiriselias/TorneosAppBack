import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString, IsIn, IsNumber } from "class-validator"

export class actulizarJugadorDto {
    
    @ApiProperty({example:"Jhan Aguilar"})
    @IsString()
    @IsOptional()
    name?: string

    @ApiProperty({example:8})
    @IsNumber()
    @IsOptional()
    number?: number

    @ApiProperty({example:"mediocampista"})
    @IsIn(["portero","defensor","mediocampista","delantero"],{
        message: 'La posision debe ser portero, defensor, mediocampista o delantero'
    })
    @IsOptional()
    position?: "portero"|"defensor"|"mediocampista"|"delantero"

    @ApiProperty({example:"equipoId??????????"})
    @IsString()
    @IsOptional()
    teamId?: string
}