import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { crearEquipoDto } from './dto/crearEquipo.dto';
import { actualizarEquipoDto } from './dto/updateEquipo.dto';

@Controller('teams')
export class EquipoController {

    constructor(private equipoService: EquipoService){}

    @Get()
    getAllTeams(){
        return this.equipoService.getAllTeams()
    }

    @Get("/:id")
    getTeam(@Param("id") id:string ){
        return this.equipoService.getTeam(id)
    }

    @Post()
    createTeam(@Body() team: crearEquipoDto){
        return this.equipoService.createTeam(team)
    }

    @Patch("/:id")
    updateTeam(@Param("id") id:string, @Body() data: actualizarEquipoDto){
        return this.equipoService.updateTeam(id, data)
    }

    @Delete("/:id")
    deleteTeam(@Param("id") id:string){
        return this.equipoService.deleteTeam(id)
    }


}
