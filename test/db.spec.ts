import { sequelize, USER, TODO } from '../src/db'

beforeAll(async () => {
  await sequelize.sync()
})

describe('添加用户', async () => {
  const result = await USER.create({
    user_id: 1,
    last_active: new Date()
  })
  expect(result).not.toBeNull()
})

afterAll(async () => {
  sequelize.close()
})