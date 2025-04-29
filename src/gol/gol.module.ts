import { Module } from '@nestjs/common';
import { GolService } from './gol.service';
import { GolController } from './gol.controller';

@Module({
  providers: [GolService],
  controllers: [GolController]
})
export class GolModule {}
