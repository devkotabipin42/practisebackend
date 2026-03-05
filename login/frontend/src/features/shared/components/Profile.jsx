import React from 'react'
import { FaTh, FaVideo } from "react-icons/fa"
import InstagramFooter from './Fotter'
const Profile = () => {
  return (
    <div className="flex  w-screen justify-center items-center">
      <div className="min-h-screen w-full bg-black max-w-sm text-white flex flex-col justify-center">

        {/* Top Bar */}
        <div className="flex items-center justify-center py-3 border-b border-white/10">
          <h2 className="font-semibold text-lg">username</h2>
        </div>

        {/* Profile Header */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-6">

            {/* Avatar */}
            <div className="h-20 w-20 rounded-full bg-white/15 border border-white/10" />

            {/* Stats */}
            <div className="flex-1 flex justify-between text-center">
              <div>
                <p className="font-semibold">50</p>
                <p className="text-xs text-white/60">posts</p>
              </div>
              <div>
                <p className="font-semibold">178</p>
                <p className="text-xs text-white/60">followers</p>
              </div>
              <div>
                <p className="font-semibold">147</p>
                <p className="text-xs text-white/60">following</p>
              </div>
            </div>
          </div>

          {/* Name */}
          <p className="mt-3 font-semibold">Your Name</p>

          {/* Buttons */}
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-lg bg-white/10 py-2 text-sm font-semibold hover:bg-white/15 active:scale-[0.99]">
              Edit profile
            </button>
            <button className="flex-1 rounded-lg bg-white/10 py-2 text-sm font-semibold hover:bg-white/15 active:scale-[0.99]">
              Share profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-around border-t border-white/10">
          {/* Active: POSTS */}
          <button className="flex-1 py-3 flex items-center justify-center gap-2 border-b-2 border-white">
            <FaTh />
            <span className="text-xs font-semibold">POSTS</span>
          </button>

          {/* Inactive: REELS */}
          <button className="flex-1 py-3 flex items-center justify-center gap-2 text-white/60">
            <FaVideo />
            <span className="text-xs font-semibold">REELS</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-white/10 border border-black/40"
            />
          ))}

        </div>
          <InstagramFooter/>

      </div>
    </div>
  )
}

export default Profile
