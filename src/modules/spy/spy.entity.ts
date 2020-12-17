/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-12-17 14:01:24
 * @LastEditors  : liulib
 * @LastEditTime : 2020-12-17 17:10:27
 */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SpyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '玩家数量' })
  playerNum: number;

  @Column({ comment: '卧底数量' })
  spyNum: number;

  @Column({ comment: '白板数量', default: 0 })
  spaceNum: number;

  @Column({ comment: '已经被选择了的id', default: '' })
  useNum: string;

  @Column({ comment: '平民的词语' })
  commonWord: string;

  @Column({ comment: '卧底的词语' })
  spyWord: string;

  @Column({ comment: '卧底id' })
  spyId: string;

  @Column({ comment: '白板id', default: '' })
  spaceId: string;

  @CreateDateColumn({ comment: '创建时间' }) // 自动生成列
  createdAt: string;

  @UpdateDateColumn({ comment: '更新时间' }) // 自动生成并自动更新列
  updatedAt: string;
}
