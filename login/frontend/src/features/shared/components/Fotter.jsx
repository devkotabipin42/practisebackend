import React from "react"
import { FaHome, FaSearch, FaPlayCircle, FaFacebookMessenger } from "react-icons/fa"

const InstagramFooter = () => {
  return (
    <div className="sticky bottom-0 z-50 w-full max-w-sm bg-black">
      
      <div className="max-w-sm mx-auto flex justify-around items-center py-3 text-white text-xl">

        <FaHome className="cursor-pointer hover:scale-110 transition" />
        
        <FaSearch className="cursor-pointer hover:scale-110 transition" />
        
        <FaPlayCircle className="cursor-pointer hover:scale-110 transition" />
        
        <FaFacebookMessenger className="cursor-pointer hover:scale-110 transition" />

        <div className="w-7 h-7 rounded-full bg-gray-400"></div>

      </div>

    </div>
  )
}

export default InstagramFooter