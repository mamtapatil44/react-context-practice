import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './ User-Authentication-Token-Management/Login'
import Logout from './ User-Authentication-Token-Management/Logout'

function App() {
 

  return (
    <>
      <div className='container mx-auto'>
        <h1>hiiiii</h1>
        <Login/>
        <Logout/>
     </div>
    </>
  )
}

export default App
