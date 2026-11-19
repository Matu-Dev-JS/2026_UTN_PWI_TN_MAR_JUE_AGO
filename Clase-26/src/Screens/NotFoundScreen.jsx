import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'

export default function NotFoundScreen() {
  return (
    <div>
        <Navbar/>
        <h1>Pagina no encontrada 404</h1>
        <Link to={'/home'}>Ir a la pantalla principal</Link>
    </div>
  )
}
