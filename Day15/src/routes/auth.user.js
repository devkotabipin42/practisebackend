const express = require('express')
const registrationController=require('../controller/auth.controller')
const authRouter = express.Router()
const identifyUser=require('../middlewares/auth.middleware')

authRouter.post('/register',registrationController.registrationController)
authRouter.post("/login",registrationController.loginController)

authRouter.get('/get-me',identifyUser,registrationController.getMeController)

module.exports=authRouter