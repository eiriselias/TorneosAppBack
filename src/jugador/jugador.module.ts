import { Module } from '@nestjs/common';
import { JugadorController } from './jugador.controller';
import { JugadorService } from './jugador.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [JugadorController],
  providers: [JugadorService]
})
export class JugadorModule {}
