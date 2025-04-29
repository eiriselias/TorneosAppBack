import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GolService } from './gol.service';
import { crearGolDto } from './dto/crearGol.dto';
import { actualizarGolDto } from './dto/updateGol.dto';

@Controller('gol')
export class GolController {
    constructor(private golService: GolService){}
    
    @Get()
    getAllGols(){
        return this.golService.getAllGol()
    }

    @Get("/:id")
    getGol(@Param() id:string){
        return this.golService.getGol(id)
    }

    @Post()
    createGol(@Body() data:crearGolDto){
        return this.golService.createGol(data)
    }

    @Patch("/:id")
    updateGol(@Param() id:string,  @Body() data: actualizarGolDto ){
        return this.golService.updateGol(id, data)
    }

    @Delete("/:id")
    deleteGol(@Param() id:string){
        return this.deleteGol(id)
    }
    
}
