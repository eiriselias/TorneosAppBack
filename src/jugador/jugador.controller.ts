import { Controller, Get, Post, Put, Delete, Patch, Param, Body } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { crearJugadorDto } from './dto/crearJugador.dto';
import { ApiTags } from '@nestjs/swagger'
import { actulizarJugadorDto } from './dto/actulizarJugador.dto';

@Controller('jugador')
@ApiTags("players")
export class JugadorController {

    constructor(private jugadorService: JugadorService){}

    @Get()
    getAllPlayers(){
        return this.jugadorService.getAllPlayers()
    }

    @Get("/:id")
    gePlayer(@Param('id') id:string){
        return this.jugadorService.getPlayer(id)
    }

    @Post()
    createPlayer(@Body() player: crearJugadorDto){
        return this.jugadorService.createPlayer(player)
    }

    @Put("/:id")
    updatePlayer(@Param("id") id:string, @Body() data:actulizarJugadorDto){
        return this.jugadorService.updatePlayer(id, data)
    }

    @Patch("/:id")
    UpdatePlayerStatus(@Param("id") id:string, @Body() data:actulizarJugadorDto){
        return this.jugadorService.updatePlayer(id, data)
    }

    @Delete("/:id")
    deletePlayer(@Param("id") id:string){
        return this.jugadorService.deletePlayer(id)
    }
}
