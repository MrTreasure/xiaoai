import { createConnection } from 'typeorm'
import secret from '../secret'
import { User } from './entities/User'
import { Todo } from './entities/Todo'
import 'reflect-metadata'

createConnection({
  name: 'mysql',
  type: 'mysql',
  host: secret.url,
  port: 3306,
  username: secret.username,
  password: secret.password,
  database: secret.database,
  entities: [User, Todo]
})