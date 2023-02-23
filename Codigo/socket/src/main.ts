import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'artemis_socket',
        brokers: ['localhost:29092'],
      },
    },
  });

  app
    .startAllMicroservices()
    .then(() => console.log('[WebSocket] Microservices Running'));

  app.listen(3335).then(() => console.log('[WebSocket] HTTP service running'));
}
bootstrap();
