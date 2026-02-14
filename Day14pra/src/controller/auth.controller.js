const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerController(req,res){
  const {username,email,password,bio,profile_image} = req.body
  const user = await userModel.findOne({
    $or:[
      {email:email},
      {username:username}
    ]
  })
  if(user){
    return res.status(409).json({
      message:"User already exists"+ (email===user.email?"with this email":"with this username")
    })
  }
  const hash = await bcrypt.hash(password,10)

  const newUser = await userModel.create({
    username,email,password:hash,bio,profile_image
  })

  const token = jwt.sign({
    id:newUser._id,
  },process.env.JWT_SECRET,{expiresIn:'1d'})

  res.cookie('token',token)

  res.status(201).json({
    message:"User registered successfully",
    username:newUser.username,
    email:newUser.email,
    bio:newUser.bio,
    profile_image:newUser.profile_image
  })
}

async function loginController(req,res){
const {email,username,password}=req.body

const user = await userModel.findOne({
  $or:[
    {email:email},
    {username:username}
  ]
})
if(!user){
  return res.status(404).json({
    message:"User not found"
  })
}

const passwordMath = await bcrypt.compare(password,user.password)

if (!passwordMath){
  return res.status(401).json({message:"Invalid credentials"})
}

const token = jwt.sign({
  id:user._id
},process.env.JWT_SECRET,{expiresIn:'1d'})

res.cookie('token',token)

res.status(200).json({
  message:"Login successful",
  username:user.username,
  email:user.email,
  bio:user.bio,
  profile_image:user.profile_image
})

}



module.exports={registerController,loginController}