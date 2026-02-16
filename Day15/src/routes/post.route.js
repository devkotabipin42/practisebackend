const express = require('express')
const {postController, getPostDetails} = require('../controller/post.controller')
const {getPostController} = require('../controller/post.controller')
const postRouter = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

postRouter.post('/',upload.single('image'),postController)

postRouter.get('/',getPostController)

postRouter.get('/details/:postId',getPostDetails)

module.exports=postRouter