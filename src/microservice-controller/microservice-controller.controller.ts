import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('microservice')
export class MicroserviceControllerController {
    constructor(
        @Inject('FINANCE_SERVICE') private client: ClientProxy,
    ) {}

    @Post('emit')
    async publish() {
        // this.client.emit<number>('user_created', new UserCreatedEvent());
        this.client.emit('event_name', { message: 'Hello, Subscriber!' });
        return 'Event published';
    }      
}
