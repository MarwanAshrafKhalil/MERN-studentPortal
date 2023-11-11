import React, { useState } from 'react'



export default function RequireAuth() {

  const [logged,setLogged] =useState(false)

  function handleLogin(){
    setLogged(prev => !prev)
    return logged
  }

  return (
    <div>
      <button onClick={()=>handleLogin()}>Login</button>
    </div>

  )
}

