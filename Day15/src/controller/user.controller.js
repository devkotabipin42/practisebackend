const followModel = require('../model/follow.model')



async function followUserController(req,res){
  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  if (followeeUsername==followerUsername){
    return res.status(400).json({
      message:'You cannot follow yourself'
    })
  }

  const isAlreadyFolllowing = awaa
  const followRecord = await followModel.create({
    follower:followerUsername,
    followee:followeeUsername

  })

  res.status(201).json({
    message:`You are now following ${followeeUsername}`,follow:followRecord
  })
}




module.exports={followUserController}