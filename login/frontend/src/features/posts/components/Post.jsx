import React from 'react'
import { FaHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";

const Post = ({user,post, handleLike, handleunLike}) => {
  return (
   <div className="w-full max-w-sm bg-gray-700 text-white">

        {/* Header */}
        <div className="flex items-center p-4">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="ml-3 font-semibold text-gray-800 text-sm">
            {user.username}
          </span>
        </div>

        {/* Post Image */}
        <img
          src={post.imgUrl}
          alt="post"
          className="w-full object-cover"
        />

        {/* Action Buttons */}
        <div className="flex items-center space-x-6 px-4 py-3">
          <FaHeart onClick={()=>{post.isLiked?handleunLike(post._id):handleLike(post._id)}} className={`text-xl cursor-pointer active:scale-90 transition ${
            post.isLiked ? "text-red-500" : "text-gray-800"}`} />
          <FaRegComment className="text-xl cursor-pointer active:scale-90 transition" />
          <FaPaperPlane className="text-xl cursor-pointer active:scale-90 transition" />
        </div>

        {/* Caption */}
        <div className="px-4 pb-4">
          <p className="text-sm text-gray-800">
            <span className="font-semibold mr-2">{user.username}</span>
            {post.caption}
          </p>
        </div>

      </div>
  )
}

export default Post
