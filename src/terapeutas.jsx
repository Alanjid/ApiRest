import React from 'react'
import Formulario from './components/formulario1/formulario'
import Header from './components/header/Header'

function terapeutas() {
  return (
    <div>
        <Header title="Información personal" subtitle="Edita tus datos" />
        <Formulario/>
    </div>
  )
}

export default terapeutas
