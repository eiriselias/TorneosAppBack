import { Module } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CampeonatoController } from './campeonato.controller';

@Module({
  providers: [CampeonatoService],
  controllers: [CampeonatoController]
})
export class CampeonatoModule {}
