import { Injectable, NotFoundException } from '@nestjs/common';
import { crearJugadorDto } from './dto/crearJugador.dto';
import { PrismaService } from 'src/prisma.service';
import { actulizarJugadorDto } from './dto/actulizarJugador.dto';

@Injectable()
export class JugadorService {
    
    constructor(private prisma: PrismaService){}   
    
    getAllPlayers(){
        return this.prisma.jugador.findMany({
            include:{
                team: true,
                goals: true
            }
        })
    }

    async getPlayer(id: string){

        const playerFound = await this.prisma.jugador.findUnique({where:{id}})     

        if (!playerFound){
            return new NotFoundException(`El Jugador con el id:${id} no fue encontrado`)
        }

        return playerFound
    } 

    createPlayer(player: crearJugadorDto){
        // Transformar el DTO a un formato compatible con Prisma
        const prismaData = {
            name: player.name,
            number: player.number,
            position: player.position,
            team: {
                connect: {
                    id: player.teamId
                }
            }
        };
        
        return this.prisma.jugador.create({data: prismaData});
    }

    async updatePlayer(id: string, data: actulizarJugadorDto){
        const player = await this.getPlayer(id)
        if (player instanceof NotFoundException) {
            return player;
        }
        
        // Preparar los datos para la actualización
        const updateData: any = {};
        
        // Agregar campos solo si están definidos
        if (data.name !== undefined) updateData.name = data.name;
        if (data.number !== undefined) updateData.number = data.number;
        if (data.position !== undefined) updateData.position = data.position;
        
        // Si se proporciona un nuevo teamId, actualizar la relación con el equipo
        if (data.teamId !== undefined) {
            updateData.team = {
                connect: {
                    id: data.teamId
                }
            };
        }
        
        return this.prisma.jugador.update({
            where: { id }, 
            data: updateData
        });
    }

    async deletePlayer(id: string){
        const player = await this.getPlayer(id)
        if (player instanceof NotFoundException) {
            return player;
        }
        
        return this.prisma.jugador.delete({where:{id}})
    }


}
