import app from '../src/main'
import * as request from 'supertest'
import Response from '../src/interface/response'

describe('启动APP', async () => {
  test('访问根目录', async () => {
    const res = await request(app).get('/')
    expect(res.body.message).toBe('Hello Xiaoai')
  })

  test('小爱语音', async () => {
    const result = await request(app).post('/')
    const body: Response = result.body
    expect(body.version).toBe('1.0')
    expect(body.response.to_speak.type).toBe(0)
    expect(body.response.to_speak.text).not.toBeNull()
  })

  test('验证签名', async () => {
    const result = await request(app).get('/hmac/test?id=xxxxx&name=abc').set('Content-Type', 'application/json').field('Date', (new Date()).toString())
    console.log(result.get('Authorization'))
    expect(result.get('Authorization')).not.toBeNull()
  })
})

afterAll(() => {
  app.close()
})