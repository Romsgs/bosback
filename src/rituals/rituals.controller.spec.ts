import { Test, TestingModule } from '@nestjs/testing';
import { RitualsController } from './rituals.controller';
import { RitualsService } from './rituals.service';

describe('RitualsController', () => {
  let controller: RitualsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RitualsController],
      providers: [RitualsService],
    }).compile();

    controller = module.get<RitualsController>(RitualsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
