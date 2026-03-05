import React from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Nav = () => {

  const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-50 w-full max-w-sm bg-black ">
      <div className="h-12 px-4 flex items-center justify-between">
        <div className="w-6" /> {/* left spacing */}

        <button onClick={()=>{navigate('/logout')}} className="text-lg font-semibold tracking-tight cursor-pointer">Instagram</button>
        

        <button
          className="text-2xl active:scale-95 transition"
          aria-label="Add post"
          onClick={() => {navigate('/create-post')}}
        >
          <FaPlusSquare />
        </button>
      </div>
    </div>
  )
}

export default Nav
