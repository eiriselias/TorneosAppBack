import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { actualizarCampeonatoDto } from './dto/updateCampeonato.dto';
import { crearCampeonatoDto } from './dto/crearCampeonato.dto';


@Injectable()
export class CampeonatoService {
    
    constructor(private prisma: PrismaService){}

    createCampeonato(data: crearCampeonatoDto){
        const prismaData = {
            name: data.name,
            date_start: data.date_start,
            date_end: data.date_end,
            stade: data.stade,
            tipe: data.tipe
        }

        return this.prisma.campeonato.create({data: prismaData})
    }

    getAllCampeonatos(){
        return this.prisma.campeonato.findMany({
            include:{
                first: true,
                second: true,
                third: true,
                fourth: true,
                teams: true
            }
        }) 
    }

    async getCampeonato(id:string){
        const campeonato = await this.prisma.campeonato.findUnique({where:{id}})
        if (!campeonato) {
            return new NotFoundException(`El campeonato con el id:${id} no fue encontrado`);
        }
        return campeonato
    }

    async updateCampeonato(id:string, data: actualizarCampeonatoDto){
        const campeonato = await this.getCampeonato(id)
        if (!campeonato) {
            return new NotFoundException(`El campeonato con el id:${id} no fue encontrado`);
        }

        const updateData: any = {}
        if(data.name !== undefined) updateData.name = data.name;
        if(data.date_start !== undefined) updateData.date_start = data.date_start;
        if(data.date_end !== undefined) updateData.date_end = data.date_end;
        if(data.stade !== undefined) updateData.stade = data.stade;
        if(data.tipe !== undefined) updateData.tipe = data.tipe;
         
        return this.prisma.campeonato.update({
            where:{id},
            data: updateData
        })
    }   

    async deleteCampeonato(id:string){
        const campeonato = await this.getCampeonato(id)
        if (!campeonato) {
            return new NotFoundException(`El campeonato con el id:${id} no existe`);
        }
        
        this.prisma.campeonato.delete({where:{id}})
        return `El Capeonato: ${campeonato?.name} fue eliminado`
    }
}
