/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 13:50:20
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 16:49:16
 */
import { Controller, Get, Post, Body } from '@nestjs/common';

import { SpyService } from './spy.service';
import { CreateSpyDto, QuerySpyDto } from './spy.dto';

@Controller('spy')
export class SpyController {
  constructor(private spyService: SpyService) {}

  @Post()
  create(@Body() cto: CreateSpyDto) {
    return this.spyService.create(cto);
  }

  @Post('queryRoleById')
  async queryByRoomId(@Body() qto: QuerySpyDto) {
    return this.spyService.querySpyId(qto);
  }
}
