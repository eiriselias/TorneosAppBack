import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { crearPartidoDto } from './dto/crearPartido.dto';
import { actualizarPartidoDto } from './dto/updatePartido.dto';
import { PartidoService } from './partido.service';

@Controller('partido')
export class PartidoController {
    constructor(private partidoService:PartidoService){}

    @Get()
    getAllPartidos(){
        return this.partidoService.getAllPartidos()
    }

    @Get("/:id")
    getPartido(@Param("id") id: string){
        return this.partidoService.getPartido(id)
    }

    @Post()
    createPartido(@Body() data: crearPartidoDto){
        return this.partidoService.createPartido(data)
    }

    @Patch("/:id")
    updatePartido(@Param("id") id:string, @Body() data: actualizarPartidoDto){
        return this.partidoService.updatePartido(id, data)
    }

    @Delete("/:id")
    deletePartido(@Param("id") id: string){
      return this.partidoService.deletePartido(id)
    }
    
}
