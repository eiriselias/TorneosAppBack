import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional, IsString, IsUrl, MinLength } from "class-validator"

export class actualizarEquipoDto{

    @ApiProperty({example:'Los Invensibles'})
    @IsString()
    @MinLength(3)
    @IsOptional()
    name: string
    
    @ApiProperty({example:'http://www.image.co/escudo.png'})
    @IsUrl()
    @IsOptional()
    shield: string 

    @ApiProperty({example:1})
    @IsInt()
    @IsOptional()
    pj: number

    @ApiProperty({example:1})
    @IsInt()
    @IsOptional()
    pg: number

    @ApiProperty({example:0})
    @IsInt()
    @IsOptional()
    pe: number

    @ApiProperty({example:0})
    @IsInt()
    @IsOptional()
    pp: number

    @ApiProperty({example:4})
    @IsInt()
    @IsOptional()
    gf: number

    @ApiProperty({example:2})
    @IsInt()
    @IsOptional()
    gc: number

    @ApiProperty({example:3})
    @IsInt()
    @IsOptional()
    pts: number
}