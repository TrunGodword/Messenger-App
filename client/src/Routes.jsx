import React from 'react'
import Chat from './components/Chat'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const Routes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
  )
}

export default Routes