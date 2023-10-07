import React from 'react'

const Login = () => {
  return (
    <form className='Login'>
    <h1> Login </h1>
    <input type='text' placeholder='Username'/>
    <input type='text' placeholder='Password'/>
    <button>Login</button>
    </form>
  )
}

export default Login