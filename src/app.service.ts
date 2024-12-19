import { Inject, Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {

  constructor(@Inject('FINANCE_SERVICE') private readonly client: ClientProxy) {} // Missing braces fixed

  emitEvent(data: any) {
    this.client.emit('event_name', data); // Emit the event
  }

  getHello(): string {
    return 'Hello World!';
  }
}
