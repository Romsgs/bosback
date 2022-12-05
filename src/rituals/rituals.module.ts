import { Module } from '@nestjs/common';
import { RitualsService } from './rituals.service';
import { RitualsController } from './rituals.controller';

@Module({
  controllers: [RitualsController],
  providers: [RitualsService]
})
export class RitualsModule {}
