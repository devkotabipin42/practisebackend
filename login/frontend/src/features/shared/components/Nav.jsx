import React from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Nav = () => {

  const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-50 w-full max-w-sm bg-gray-700 border-b border-gray-200">
      <div className="h-12 px-4 flex items-center justify-between">
        <div className="w-6" /> {/* left spacing */}

        <h1 className="text-lg font-semibold tracking-tight">Instagram</h1>

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
