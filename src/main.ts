import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://192.168.0.107:3000']
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
