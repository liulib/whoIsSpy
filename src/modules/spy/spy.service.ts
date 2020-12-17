/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 13:51:52
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 17:26:09
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { SpyEntity } from './spy.entity';
import { resObj, ITmpObj } from './spy.dto';

@Injectable()
export class SpyService {
  constructor(
    @InjectRepository(SpyEntity)
    private spyRepository: Repository<SpyEntity>,
  ) {}

  /**
   * @description: 创建房间
   */
  async create(spy): Promise<SpyEntity[]> {
    const tmpObj: ITmpObj = { commonWord: '', spyWord: '', spyId: '' };
    if (!(spy.commonWord && spy.spyWord)) {
      tmpObj.commonWord = '平民词语';
      tmpObj.spyWord = '卧底词语';
    }
    tmpObj.spyId = [1, 2].join(',');
    const roomInfo = Object.assign(spy, tmpObj);
    return await this.spyRepository.save(roomInfo);
  }

  /**
   * @description: 查询房间信息
   */
  async querySpyId(queryInfo): Promise<resObj> {
    // 获取房间id
    const { roomId } = queryInfo;
    const roomInfo = await this.spyRepository.findOne({ id: roomId });

    if (!roomInfo) {
      throw new HttpException('房间号不存在', HttpStatus.BAD_GATEWAY);
    }
    // 解析当前房间数据
    const { playerNum, useNum, commonWord, spyWord, spyId, spaceId } = roomInfo;

    // 解析已经存在的号码
    const tmpUserNum = useNum.split(',');

    if (tmpUserNum.length >= playerNum) {
      throw new HttpException('房间已满', HttpStatus.BAD_GATEWAY);
    }

    // 生成号码
    const number = 1;

    // 生成返回的数据
    const res = {
      userNumber: number,
      userWord: null,
    };

    // 确定玩家的词语
    if (spyId.split(',').includes(String(number))) {
      res.userWord = spyWord;
    } else if (spaceId.split(',').includes(String(number))) {
      res.userWord = '';
    } else {
      res.userWord = commonWord;
    }

    // 将已使用的id添加到数据库
    const newUserNum = useNum ? useNum + ',' + String(number) : String(number);
    const updated = Object.assign(roomInfo, { useNum: newUserNum });
    await this.spyRepository.save(updated);

    // 返回结果
    return res;
  }
}
