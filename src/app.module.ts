/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 13:39:25
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 13:50:58
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpyModule } from './modules/spy/spy.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SpyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
