import { BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task.model';

export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desceription: string;

  @Column()
  status: TaskStatus;
}
