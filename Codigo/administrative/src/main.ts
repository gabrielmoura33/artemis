import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));

  await app.listen(3334);
}
bootstrap();
