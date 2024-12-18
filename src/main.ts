import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1', 
        port: 3001,       
      },
    },
  );
  const app = await NestFactory.create(AppModule);
  
  await microservice.listen();
  await app.listen(3003); // HTTP listens on port 3000
}
bootstrap();