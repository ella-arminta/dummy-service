import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroserviceControllerController } from './microservice-controller/microservice-controller.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FINANCE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'finance_queue',
          queueOptions: {
            durable: false
          },
        },
      }]),
  ],
  controllers: [AppController, MicroserviceControllerController],
  providers: [AppService],
})
export class AppModule {}
