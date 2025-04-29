
import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString} from "class-validator"

export class crearGolDto{

    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    @IsOptional()
    playerId:string

    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    teamId:string

    @ApiProperty({example: "cm9xll4ao0000wg30i5s2p5r8"})
    @IsString()
    matchId: string

    @ApiProperty({example:false})
    @IsBoolean()
    autogol: boolean
}