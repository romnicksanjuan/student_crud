const express = require('express')
const {studentLogin} = require('../controller/student_controller')

const loginRouter = express.Router();

loginRouter.post('/',studentLogin )

module.exports = loginRouter