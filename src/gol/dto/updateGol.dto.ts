import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString } from "class-validator"

export class actualizarGolDto{
    @ApiProperty({example: "jugadorId?????????"})
    @IsString()
    @IsOptional()
    playerId: string

    @ApiProperty({example: "partidoId?????????"})
    @IsString()
    @IsOptional()
    matchId: string

    @ApiProperty({example: "teamId???????????"})
    @IsString()
    @IsOptional()
    teamId: string

    @ApiProperty({example: false})
    @IsBoolean()
    @IsOptional()
    autogol: boolean
}