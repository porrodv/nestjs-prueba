import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Títulos de documentación
  const options = new DocumentBuilder()
    .setTitle('Bookstore REST API')
    .setDescription('API REST de Bookstore')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta documentación
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
