import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceControllerController } from './microservice-controller.controller';

describe('MicroserviceControllerController', () => {
  let controller: MicroserviceControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceControllerController],
    }).compile();

    controller = module.get<MicroserviceControllerController>(MicroserviceControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
