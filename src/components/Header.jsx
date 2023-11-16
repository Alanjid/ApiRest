import React from 'react'
import { useSelector } from 'react-redux';
function Header() {
    const user = useSelector ((state) => state.user)
  return (
    <header>
        <h1>Redux</h1>
        <ul>
            <li>Nombre: {user.nombre}</li>
            <li>Correo: {user.correo}</li>
        </ul>
    </header>
  )
}

export default Header
