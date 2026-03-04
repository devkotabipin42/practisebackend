import React from 'react'
import { FaPlus } from "react-icons/fa"
const Stories = () => {
  return (
     <div className="w-full max-w-sm mx-auto bg-black">
      
      <div className="flex gap-4 px-4 py-3">

        {/* Your Story */}
        <div className="flex flex-col items-center">
          
          <div className="relative">
            
            {/* Story circle */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-gray-500"></div>
              </div>
            </div>

            {/* Plus icon */}
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-[3px] border-2 border-gray-800">
              <FaPlus className="text-white text-[10px]" />
            </div>

          </div>

          <span className="text-xs mt-1 text-white">Your Story</span>

        </div>

      </div>

      <div className="border-b border-gray-700"></div>

    </div>
  )
}

export default Stories
