import { Test, TestingModule } from '@nestjs/testing';
import { PocoesController } from './pocoes.controller';
import { PocoesService } from './pocoes.service';

describe('PocoesController', () => {
  let controller: PocoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PocoesController],
      providers: [PocoesService],
    }).compile();

    controller = module.get<PocoesController>(PocoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
