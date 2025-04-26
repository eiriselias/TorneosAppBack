import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { crearPartidoDto } from './dto/crearPartido.dto';
import { actualizarPartidoDto } from './dto/updatePartido.dto';

@Injectable()
export class PartidoService {
    constructor(private prisma:PrismaService){}

    getAllPartidos(){
        return this.prisma.partido.findMany()
    }

    async getPartido(id:string){
        const partido = await this.prisma.partido.findUnique({where:{id}})
        if(!partido){
            return new NotFoundException(`El partido con id:${id} no fue encontrado`)
        }
        return partido;
    }

    createPartido(data: crearPartidoDto){
        const prismaData = {
            team_localId: data.team_localId,
            team_visitanteId: data.team_visitanteId,
            place: data.place,
            stage: data.stage,
            time: data.time,
            date: data.date,
            tournamentId: data.tournamentId,
            goals_local: data.goals_local,
            goals_visitante: data.goals_visitante
        }
        return this.prisma.partido.create({data: prismaData})
    }

    async updatePartido(id: string, data: actualizarPartidoDto){
        const partido = await this.getPartido(id)
        if(!partido){
            return new NotFoundException(`El partido con id:${id} no fue encontrado`)
        }
        return this.prisma.partido.update({
            where: { id },
            data: {
                team_localId: data.team_localId,
                team_visitanteId: data.team_visitante,
                place: data.place,
                stage: data.stage,
                time: data.time,
                date: data.date,
                tournamentId: data.tournamentId,
                goals_local: data.goals_local,
                goals_visitante: data.goals_visitante
            }
        })
    }

    async deletePartido(id:string){
        const partido = await this.getPartido(id)
        if(!partido){
            return new NotFoundException(`El partido con id:${id} no fue encontrado`)
        }
        this.prisma.partido.delete({where:{id}})
        return `El partido ha sido eliminado`
    }
}
