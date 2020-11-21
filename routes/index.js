const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const responseData = { title: 'Login Demo' }

  if (req.query.msg) {
    switch (req.query.msg) {
      case 'no_session':
        responseData.errorMsg = 'Please login to begin.'
        break
      case 'invalid_credentials':
        responseData.errorMsg = 'Invalid user login.'
        break
      case 'password_too_short':
        responseData.errorMsg = 'Your password is too short.'
        break
      case 'logged_out':
        responseData.successMsg = 'You have successfully logged out.'
        break
    }
  }

  res.render('index', responseData)
})

module.exports = router
