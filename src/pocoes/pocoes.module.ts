import { Module } from '@nestjs/common';
import { PocoesService } from './pocoes.service';
import { PocoesController } from './pocoes.controller';

@Module({
  controllers: [PocoesController],
  providers: [PocoesService]
})
export class PocoesModule {}
