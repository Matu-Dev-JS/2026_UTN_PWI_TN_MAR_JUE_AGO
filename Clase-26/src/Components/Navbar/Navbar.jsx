import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <header>
        <h2>Brand name</h2>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </nav>
    </header>
  )
}
