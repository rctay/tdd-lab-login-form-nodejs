const request = require('supertest')
const app = require('../app')

describe('POST /users', function () {
  it('login with username and password', function (done) {
    request(app)
      .post('/users')
      .send('email=demo@example.com&password=demo1234')
      .expect(302, /\/welcome/, done)
  })

  it('redirects with msg=password_too_short when password is length 7', function () {
    return request(app)
      .post('/users')
      .send('email=demo@example.com&password=1234567')
      .expect(302)
      .expect('Location', '/?msg=password_too_short')
  })
})
