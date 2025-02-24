
import React, { useContext, useState } from 'react'
import AuthContext from './auth.context'

const Login = () => {
    const {setToken} = useContext(AuthContext);
    const [userToken, setUserToken] =useState("")


    const handlelogin=()=>{
        console.log("userToken ",userToken)
        setUserToken(userToken)
        setToken(userToken)

    }
  return (
    <div>
        <input className='outline-1' value={userToken} onChange={(e)=>setUserToken(e.target.value)}/>
        <button onClick={handlelogin} className='p-2 m-1 bg-blue-600 cursor-pointer'>Login</button>
    </div>
  )
}

export default Login