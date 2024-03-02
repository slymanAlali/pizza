/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const handleLogin = () =>  {
        setisLoggedIn(true)
    };
    const handleLogout = () =>  {
        setisLoggedIn(false)
    };

    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>
            user is {isLoggedIn} ? 'logged in' : 'logged out'
        </div>

    </div>
  )
}

export default LoggedIn