import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Login } from './Components/Login/Login'
import { User } from './Components/User/User'
import { Post } from './Components/User/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Login/> */}
     <User/>
     {/* <Post/> */}
    </div>
  )
}

export default App
