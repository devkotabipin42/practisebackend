import React, { useRef, useState } from 'react'
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const [caption, setCaption] = useState('')

  const postImageinputFieldRef = useRef(null)

  const navigate = useNavigate()
  const {loading,handleCreatePost} = usePost()
  async function handleSubmit(e){
    e.preventDefault()
    const file = postImageinputFieldRef.current.files[0]
    handleCreatePost(file,caption)
    navigate('/')
  }
   if(loading){
    return (
      <main className="flex justify-center items-center text-3xl"><h1>creating post</h1></main>
    )
  }

  return (
    <div className='h-screen flex justify-center items-center'>
    <div className="w-full h-[500px] max-w-sm mx-auto flex flex-col justify-center items-center bg-orange-900 border  rounded-xl shadow-sm ">
      
      {/* Header */}
      <div className="px-4 py-3 border-b ">
        <h2 className="text-base font-semibold text-black bg-red-700 p-2 rounded-2xl">
          Create Post
        </h2>
      </div>

      {/* Form */}
      <form 
        onSubmit={handleSubmit}
        className="p-4 space-y-4">

        {/* Post Name */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Post Name
          </label>
          <input
            type="text"
            placeholder="Enter post name"
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Upload Photo
          </label>
          <input
            ref={postImageinputFieldRef}
            type="file"
            accept="image/*"
            className="w-full text-black text-sm 
                       file:mr-3 file:rounded-lg file:border-0
                       file:bg-gray-900 file:px-4 file:py-2
                       file:text-sm file:font-semibold file:text-white"
          />
        </div>

        {/* Caption */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e)=>{setCaption(e.target.value)}}
            rows="3"
            placeholder="Write your caption..."
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Post Button */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold active:scale-95 transition"
        >
          Post
        </button>

      </form>
    </div>
    </div>
  )
}

export default CreatePost
