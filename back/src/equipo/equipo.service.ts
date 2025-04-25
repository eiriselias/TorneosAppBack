import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { crearEquipoDto } from './dto/crearEquipo.dto';
import { actualizarEquipoDto } from './dto/updateEquipo.dto';

@Injectable()
export class EquipoService {
    constructor(private prisma: PrismaService ){}

    createTeam(team: crearEquipoDto){
        

        const prismaData = {
            name: team.name,
            shield: team.shield,
            pj: team.pj,
            pg: team.pg,
            pe: team.pe,
            pp: team.pp,
            gf: team.gf,
            gc: team.gc,
            pts: team.pts,
        }
        return this.prisma.equipo.create({data: prismaData})
    }

    getAllTeams(){
        return this.prisma.equipo.findMany({
            include:{
                players: true,
                tournaments: true
            }
        })
    }

    async getTeam(id: string){
        const teamFound = await this.prisma.equipo.findUnique({where:{id}})
        if(!teamFound){
            return new NotFoundException(`El equipo con el id:${id} no fue encontrado`)
        }
        return teamFound;
    }

    async updateTeam(id:string, data: actualizarEquipoDto){
        const team = await this.getTeam(id)
        if(team instanceof NotFoundException){
            return team
        }
        
        const updateData: any = {}

        if(data.name !== undefined) updateData.name = data.name;
        if(data.shield !== undefined) updateData.shield = data.shield;
        if(data.pj !== undefined) updateData.pj = data.pj;
        if(data.pg !== undefined) updateData.pg = data.pg;
        if(data.pe !== undefined) updateData.pe = data.pe;
        if(data.pp !== undefined) updateData.pp = data.pp;
        if(data.gf !== undefined) updateData.gf = data.gf;
        if(data.gc !== undefined) updateData.gc = data.gc;
        if(data.pts !== undefined) updateData.pts = data.pts;
        
        return this.prisma.equipo.update({
            where:{id},
            data: updateData
        })
    }

    async deleteTeam(id:string){
        const team = await this.getTeam(id)
        if (team instanceof NotFoundException) {
            return team;
        }

        return this.prisma.equipo.delete({where:{id}})
    }
}
