const jwt = require('jsonwebtoken')
const redis= require('../config/cache')
async function IdentifyUser(req,res,next){
  const token = req.cookies.token

  if(!token){
    return res.status(401).json({
      message:'Token not provided,Unauthorized access'
    })
  }
  const istokenBlackListed = await redis.get(token)
  if(istokenBlackListed){
    return res.status(401).json({
      message:"invalid token"
    })
  }

  let decoded = null

  try{
    decoded = jwt.verify(token,process.env.JWT_SECRET)
  }catch(err){
    return res.status(401).json({
      message:"user not authorized"
    })
  }
  req.user=decoded

  next()
}

module.exports=IdentifyUser