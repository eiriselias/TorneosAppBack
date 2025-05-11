
import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsOptional, IsString} from "class-validator"

export class crearGolDto{

    @ApiProperty({example: "jugadorId???????"})
    @IsString()
    @IsOptional()
    playerId:string

    @ApiProperty({example: "equipoId????????"})
    @IsString()
    teamId:string

    @ApiProperty({example: "partidoId??????"})
    @IsString()
    matchId: string

    @ApiProperty({example:false})
    @IsBoolean()
    autogol: boolean
}