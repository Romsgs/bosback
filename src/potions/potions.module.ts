import { Module } from '@nestjs/common';
import { PotionsService } from './potions.service';
import { PotionsController } from './potions.controller';

@Module({
  controllers: [PotionsController],
  providers: [PotionsService]
})
export class PotionsModule {}
