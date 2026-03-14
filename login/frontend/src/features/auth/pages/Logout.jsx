import React from 'react'
import { useAuth } from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const {loading,handleLogout} = useAuth()
  const Navigate = useNavigate()

  async function handlesubmit(e){
    e.preventDefault()
    await handleLogout()
    Navigate('/login')
  }
  return (
    <div className='h-[30px] w-60px'>
      <button onClick={handlesubmit} className=" absolute z-50 top-1 w-full px-6 py-4 rounded-2xl bg-[#bd0c23] text-white cursor-pointer active:scale-95 ">
            Logout
          </button>
    </div>
  )
}

export default Logout
