const request = require('supertest')
const app = require('../app')

describe('GET /', function () {
  it('responds with login form', function (done) {
    request(app)
      .get('/')
      .expect(200, /Welcome to the Login Form Demo/, done)
  })

  it('shows "Your password is too short." when msg=password_too_short', function (done) {
    request(app)
      .get('/?msg=password_too_short')
      .expect(200, /Your password is too short[.]/, done)
  })
})
