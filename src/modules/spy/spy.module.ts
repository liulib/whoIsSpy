/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 13:50:06
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 14:45:35
 */
import { Module } from '@nestjs/common';
import { SpyController } from './spy.controller';
import { SpyService } from './spy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpyEntity } from './spy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpyEntity])],
  controllers: [SpyController],
  providers: [SpyService],
})
export class SpyModule {}
