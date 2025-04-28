import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString } from "class-validator"

export class actualizarGolDto{
    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    playerId: string

    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    matchId: string

    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    teamId: string

    @ApiProperty({example: false})
    @IsBoolean()
    @IsOptional()
    autogol: boolean
}