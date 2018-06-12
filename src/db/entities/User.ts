import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column('varchar')
  userId: string

  @Column('date')
  lastActive: Date
}