import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://192.168.0.107:3000','https://apptodo-frontened-vlyuyg-147721-77-232-137-205.traefik.me'],
    credentials: true,

  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
