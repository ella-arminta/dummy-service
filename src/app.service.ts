import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3002, // TCP port of the subscriber microservice
      },
    });
  }

  emitEvent(data: any) {
    this.client.emit('event_name', data); // Emit the event
  }

  getHello(): string {
    return 'Hello World!';
  }
}
