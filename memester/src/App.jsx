import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './Components/Login/Login'
import { User } from './Components/User/User'
import { Post } from './Components/User/Post'
import { Navbar } from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Add } from './Components/Add/Add'
import { Home } from './Components/Home/Home'
import { Explore } from './Components/Explore/Explore'

function App() {
  

  return (
    <div className="App">
     <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='explore' element={<Explore/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  )
}

export default App
