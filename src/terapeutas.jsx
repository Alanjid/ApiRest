import React from 'react'
import Formulario from './components/formulario1/formulario'
import Header from './components/header/Header'

function terapeutas() {
  return (
    <div>
        <Header title="Información personal" subtitle="Create a New User Profile" />
        <Formulario/>
    </div>
  )
}

export default terapeutas
