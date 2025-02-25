import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './ User-Authentication-Token-Management/Login'
import Logout from './ User-Authentication-Token-Management/Logout'
import Profile from './components/Profile'
import Interests from './components/Interests'
import Setting from './components/Setting'
import Tab from './components/Tab'

function App() {
  const tabData =[{
    id:1,
    label: "Profile",
    Component:Profile
  },{
    id:2,
    label: "Interests",
    Component:Interests
  },{
    id:3,
    label: "Settings",
    Component:Setting

  }]
 

  return (
    <>
      <div className=''>
        {/* <h1>hiiiii</h1> */}
        {/* <Login/>
        <Logout/> */}
        <Tab tabs={tabData}/>
     </div>
    </>
  )
}

export default App
