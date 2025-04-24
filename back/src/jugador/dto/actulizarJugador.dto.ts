import { IsOptional, IsString } from "class-validator"

export class actulizarJugadorDto {

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    position?: string
}