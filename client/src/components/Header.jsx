import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/" className='Logo'>Messaging App</Link>
    </header>
  )
}

export default Header