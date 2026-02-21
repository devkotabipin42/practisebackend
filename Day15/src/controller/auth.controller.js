const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registrationController(req, res) {
  const { username, email, password, bio, profileImage } = req.body

  const isUser = await userModel.findOne({
    $or: [
      { email: email },
      { username: username }
    ]
  })
  if (isUser) {
    return res.status(409).json({
      message: "user is already exists" + (isUser.email == email ? "email already exists" : "Username already exists")
    })
  }

  const hash = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    username, email, password: hash, bio, profileImage
  })

  const token = jwt.sign({
    id: user._id,
    username:user.username
  }, process.env.JWT_SECRET)

  res.cookie('token', token)
  res.status(201).json({
    message: "account created sucessfully",
    username: user.username,
    email: user.email,
    bio: user.bio,
    profileImage: user.profileImage
  })
}

async function loginController(req, res) {
  const { email, username, password } = req.body

  const user = await userModel.findOne({
    $or: [
      { username: username },
      { email: email }
    ]
  })

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    })
  }
  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return res.status(404).json({
      messag: "Wrong password"
    })
  }

  const token = jwt.sign({
    id: user._id,
    username:user.username
  }, process.env.JWT_SECRET)

  res.cookie("token", token)
  res.status(200).json({
    messgae: "login sucessfull",
    user: {

      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage

    }
  })
}

async function getMeController(req,res){
  const userId = req.user.id
  const user = await userModel.findById(userId)
  res.status(200).json({
    user:{
      username:user.username,
      email:user.email,
      bio:user.bio,
      profileImage:user.profileImage
    }
  })
}


module.exports = { registrationController, loginController,getMeController }