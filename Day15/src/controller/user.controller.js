const followModel = require('../model/follow.model')



async function followUserController(req,res){
  const followerUsername = req.user.username
  const followeeUsername = req.params.username

  if (followeeUsername==followerUsername){
    return res.status(400).json({
      message:'You cannot follow yourself'
    })
  }

  const isFolloweeExists = await followModel.findOne({
    username:followeeUsername
  })

  if(!isFolloweeExists){
    return res.status(404).json({
      message:"User you are trying to follow does not exists"
    })
  }
  const isAlreadyFolllowing = await followModel.findOne({
    follower:followerUsername,
    followee:followeeUsername,
  })
  if(isAlreadyFolllowing){
    return res.status(200).json({
      message:`You are already following ${followeeUsername}`,follow:isAlreadyFolllowing
    })
  }
  const followRecord = await followModel.create({
    follower:followerUsername,
    followee:followeeUsername

  })

  res.status(201).json({
    message:`You are now following ${followeeUsername}`,follow:followRecord
  })
}




module.exports={followUserController}