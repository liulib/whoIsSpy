/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 14:11:31
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 16:48:01
 */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSpyDto {
  @ApiProperty({
    description: '玩家数量',
  })
  @IsNotEmpty({ message: '玩家数不能为空' })
  readonly playerNum: number;

  @ApiProperty({
    description: '卧底数量',
  })
  @IsNotEmpty({ message: '卧底数不能为空' })
  readonly spyNum: number;

  @ApiProperty({
    required: false,
    description: '白板数量',
  })
  readonly spaceNum: number;

  @ApiProperty({
    required: false,
    description: '自定义的平民词语',
  })
  readonly commonWord: string;

  @ApiProperty({
    required: false,
    description: '自定义的卧底词语',
  })
  readonly spyWord: string;
}

export class QuerySpyDto {
  @ApiProperty({
    description: '房间号',
  })
  @IsNotEmpty({ message: '房间号不能为空' })
  readonly roomId: number;
}

export interface resObj {
  userNumber: number;
  userWord: string;
}

export interface ITmpObj {
  commonWord?: string;
  spyWord?: string;
  spyId?: string;
}
