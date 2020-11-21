const request = require('supertest')
const app = require('../app')

describe('POST /users', function () {
  it('login with username and password', function (done) {
    request(app)
      .post('/users')
      .send('email=demo@example.com&password=demo1234')
      .expect(302, /\/welcome/, done)
  })

  it('redirects with msg=invalid_credentials when username is empty', function () {
    return request(app)
      .post('/users')
      .send('email=&password=1234567')
      .expect(302)
      .expect('Location', '/?msg=invalid_credentials')
  })

  it('redirects with msg=invalid_credentials when username is incorrect', function () {
    return request(app)
      .post('/users')
      .send('email=omed@concrete.com&password=1234567')
      .expect(302)
      .expect('Location', '/?msg=invalid_credentials')
  })

  it('redirects with msg=invalid_credentials when password is empty', function () {
    return request(app)
      .post('/users')
      .send('email=demo@example.com&password=')
      .expect(302)
      .expect('Location', '/?msg=invalid_credentials')
  })

  it('redirects with msg=password_too_short when password is length 7', function () {
    return request(app)
      .post('/users')
      .send('email=demo@example.com&password=1234567')
      .expect(302)
      .expect('Location', '/?msg=password_too_short')
  })
})
