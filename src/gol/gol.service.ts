import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { crearGolDto } from './dto/crearGol.dto';
import { actualizarGolDto } from './dto/updateGol.dto';

@Injectable()
export class GolService {
    constructor(private prisma: PrismaService){}

    createGol(data: crearGolDto){
        const prismaData = {
            player: {
                connect:{
                    id: data.playerId
                }
            },
            team: {
                connect:{
                    id: data.teamId
                }
            },
            match:{
                connect: {
                    id: data.matchId
                }
            },

            autogol: data.autogol
        }
        return this.prisma.gol.create({data: prismaData})
    }

    getAllGol(){
        return this.prisma.gol.findMany({
            include:{
                player:true,
                match:true,
                team: true,
            }
        })
    }

    async getGol(id:string){
        const gol = await this.prisma.gol.findUnique({where:{id}})
        if(!gol){
            return new NotFoundException(`No se encontro el gol con id:${id}`)
        }
        return gol
    }

    async updateGol(id: string, data: actualizarGolDto){
        const gol = await this.getGol(id)
        if(!gol){
            return new NotFoundException(`No se encontro el gol con id:${id}`)
        }
        return this.prisma.gol.update({
            where: { id },
            data: {
                playerId: data.playerId,
                matchId: data.matchId,
                autogol: data.autogol
            }
        })
    }

    async deleteGol(id:string){
        const deleteGol = await this.getGol(id)
        return deleteGol && "Gol eliminado"
    }

}
