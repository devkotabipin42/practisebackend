const express = require('express')
const registrationController=require('../controller/auth.controller')
const authRouter = express.Router()

authRouter.post('/register',registrationController.registrationController)
authRouter.post("/login",registrationController.loginController)

module.exports=authRouter