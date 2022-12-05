import { Test, TestingModule } from '@nestjs/testing';
import { PocoesService } from './pocoes.service';

describe('PocoesService', () => {
  let service: PocoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PocoesService],
    }).compile();

    service = module.get<PocoesService>(PocoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
