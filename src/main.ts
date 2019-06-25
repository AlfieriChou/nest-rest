import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as morgan from 'morgan'
import { ApplicationModule } from './modules/app.module'
import { loggerMorgan } from './middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule)

  if (process.env.NODE_ENV === 'prod') {
    app.use(loggerMorgan)
  } else {
    app.use(morgan('dev'))
  }

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
