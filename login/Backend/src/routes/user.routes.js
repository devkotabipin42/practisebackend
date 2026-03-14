const express = require('express')
const {followUserCollection,unfollowUserController,getMeProfile} = require('../controller/user.controller')
const IdentifyUser=require('../middleware/auth.middleware')
const userRouter = express.Router()


userRouter.post('/follow/:username',IdentifyUser,followUserCollection)
userRouter.post('/unfollow/:username',IdentifyUser,unfollowUserController)

userRouter.get('/me',IdentifyUser,getMeProfile)


module.exports=userRouter