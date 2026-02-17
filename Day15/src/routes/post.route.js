const express = require('express')
const { postController, getPostDetails } = require('../controller/post.controller')
const { getPostController } = require('../controller/post.controller')
const postRouter = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const identifyUser = require('../middlewares/auth.middleware')



postRouter.post('/', upload.single('image'), identifyUser, postController)

postRouter.get('/', identifyUser, getPostController)

postRouter.get('/details/:postId', identifyUser, getPostDetails)

module.exports = postRouter