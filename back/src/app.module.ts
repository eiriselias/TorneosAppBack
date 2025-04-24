import { Module } from '@nestjs/common';
import { GolModule } from './gol/gol.module';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { EquipoModule } from './equipo/equipo.module';
import { JugadorModule } from './jugador/jugador.module';
import { PartidoModule } from './partido/partido.module';

@Module({
  imports: [GolModule, CampeonatoModule, EquipoModule, JugadorModule, PartidoModule],
})
export class AppModule {}
