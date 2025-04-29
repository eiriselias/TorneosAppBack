import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { crearCampeonatoDto } from './dto/crearCampeonato.dto';
import { actualizarCampeonatoDto } from './dto/updateCampeonato.dto';

@Controller('campeonato')
export class CampeonatoController {
    constructor(private campeonatoService: CampeonatoService){}

    @Get()
    getAllCampeonatos(){
        return this.campeonatoService.getAllCampeonatos()
    }

    @Get("/:id")
    getCampeonato(@Param("id") id:string){
        return this.campeonatoService.getCampeonato(id)
    }

    @Post()
    createCampeonato(@Body() data: crearCampeonatoDto){
        return this.campeonatoService.createCampeonato(data)
    }

    @Patch("/:id")
    updateCampeonato(@Param("id") id:string, @Body() data: actualizarCampeonatoDto){
        return this.campeonatoService.updateCampeonato(id, data)
    }

    @Delete("/:id")
    deleteCampeonato(@Param("id") id:string){
        return this.campeonatoService.deleteCampeonato(id)
    }
}
