import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/" className='Logo'>App</Link>
        <div className='HeaderLeft'>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
        </div>
    </header>
  )
}

export default Header