import { Injectable, NotFoundException } from '@nestjs/common';
import { crearJugadorDto } from './dto/crearJugador.dto';
import { PrismaService } from 'src/prisma.service';
import { actulizarJugadorDto } from './dto/actulizarJugador.dto';

@Injectable()
export class JugadorService {
    
    constructor(private prisma: PrismaService){}   
    
    getAllPlayers(){
        return this.prisma.jugador.findMany()
    }

    async getPlayer(id: string){

        const playerFound = await this.prisma.jugador.findUnique({where:{id}})     

        if (!playerFound){
            return new NotFoundException(`El Jugador con el id:${id} no fue encontrado`)
        }

        return playerFound
    } 

    createPlayer(player: crearJugadorDto){
            return this.prisma.jugador.create({data:player})
     }

    async updatePlayer(id: string, data: actulizarJugadorDto){
        const player = await this.getPlayer(id)
        return this.prisma.jugador.update({where:{id}, data})
    }

    async deletePlayer(id: string){
        const player = await this.getPlayer(id)
        return this.prisma.jugador.delete({where:{id}})
    }


}
