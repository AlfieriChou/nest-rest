import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ApplicationModule } from './modules/app.module'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('v1/apidoc', app, document)

  await app.listen(3001, () => {
    console.info('Application is listening port: 3001')
  })
}
bootstrap()
