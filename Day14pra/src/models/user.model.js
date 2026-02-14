const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "username is required"], required: [true, "User name is required"] },
  email: { type: String, required: [true, "email is required"], unique: true },
  password: { type: String, required: [true, "password is required"] },
  bio: { type: String },
  profile_image: { type: String, default: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png" }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel