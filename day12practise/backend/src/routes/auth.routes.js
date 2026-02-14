const express = require('express')
const userModel= require('../model/user.model')
const jwt = require('jsonwebtoken')
const authRouter = express.Router()

authRouter.post('/register',async(req,res)=>{
  const{email,name,password} = req.body
  const isUserAllReadyExists = await userModel.findOne({email})

  if(isUserAllReadyExists){
    return res.status(400).json({
      message:'user already exists with this mail address'
    })
  }
  const user = await userModel.create({
    email,password,name
  })

  const token = jwt.sign({
    id:user._id
  },
  process.env.JWT_SECRET
)

res.cookie('sec_token',token)
  res.status(201).json({
    message:'user registered',user,token
  })
})


module.exports=authRouter