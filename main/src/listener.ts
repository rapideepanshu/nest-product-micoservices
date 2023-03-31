import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://xqsjzccj:p9Sncdol2tJNaXHX0i8sV_MNWM9fGqYY@sparrow.rmq.cloudamqp.com/xqsjzccj',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}
bootstrap();
