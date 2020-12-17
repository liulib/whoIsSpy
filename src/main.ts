/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 13:39:25
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 15:56:35
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局使用管道
  app.useGlobalPipes(new ValidationPipe());
  // 使用swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('谁是卧底文档')
    .setDescription('spy用来生成房间，spy/queryRoleById用来查询用户身份')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000, () => {
    Logger.log('服务已经启动,请访问localhost:3000');
  });
}
bootstrap();
