import React from "react"
import { FaHome, FaSearch, FaPlayCircle, FaFacebookMessenger } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const InstagramFooter = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed bottom-0 z-50 w-full max-w-sm bg-black">
      
      <div className="max-w-sm mx-auto flex justify-around items-center py-3 text-white text-xl">

        <FaHome onClick={() =>navigate('/'). window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer hover:scale-110 transition" />
        
        <FaSearch className="cursor-pointer hover:scale-110 transition" />
        
        <FaPlayCircle className="cursor-pointer hover:scale-110 transition" />
        
        <FaFacebookMessenger  className="cursor-pointer hover:scale-110 transition" />

        <div onClick={()=>{navigate('/profile')}} className="w-7 h-7 rounded-full bg-gray-400"></div>

      </div>

    </div>
  )
}

export default InstagramFooter