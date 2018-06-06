import app from '../src/main'
import * as request from 'supertest'


describe('启动APP', async () => {
  test('访问根目录', async () => {
    const res = await request(app).get('/')
    expect(res.body.name).toBe('Hello Xiaoai')
    app.close()
  })
})