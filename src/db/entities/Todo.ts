import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  userId: string

  @Column({type: 'varchar', length: 255})
  content: string

  @Column('tinyint')
  status: number

  @Column('date')
  date: Date
}