import React, { useContext } from 'react'
import AuthContext from './auth.context'

function Logout() {
    const { logout } = useContext(AuthContext)
    return (
        <div>
            <button className='m-1 p-1 bg-amber-700 rounded-lg cursor-pointer' onClick={logout}>
                Logout</button></div>
    )
}

export default Logout