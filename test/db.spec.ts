import '../src/db'
import { User } from '../src/db/entities/User'
import { getConnection, Connection } from 'typeorm'
import 'reflect-metadata'
import * as moment from 'moment'

const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}

let conn: Connection

beforeAll(async () => {
  await sleep(2000)
  conn = getConnection('mysql')
})

describe('db test', () => {
  test.only('add user', async () => {
    const user = new User()
    user.lastActive = new Date()
    user.userId = 'Treasure'
    const result = await conn.manager.save(user)
    expect(result.id).toBeGreaterThanOrEqual(1)
  })

  test('edit user', async () => {
    const users = await conn.manager.find(User)
    expect(users.length).toBeGreaterThanOrEqual(1)
    users[0].userId = 'Sunshine'
    const result = await conn.manager.update(User, {id: 1}, users[0])
    console.log(result)
    expect(result).not.toBeNull()
  })
})

afterAll(() => {
  conn.close()
})
