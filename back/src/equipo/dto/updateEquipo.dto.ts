import { IsInt, IsOptional, IsString, IsUrl, MinLength } from "class-validator"

export class actualizarEquipoDto{
    @IsString()
    @MinLength(3)
    @IsOptional()
    name: string
    
    @IsUrl()
    @IsOptional()
    shield: string 

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