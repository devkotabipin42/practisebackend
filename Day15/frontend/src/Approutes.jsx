import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/login'

const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome to the App</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Approutes
