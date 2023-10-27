import React from 'react'
import Navbar from './scenes/global/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartas from './components/cartas/cartas'
import './styles.css'
import { useState } from 'react'

const Carta = [
  {
    karnet: 1,
    name: 'Alan',
    lastName: 'Jimenez',
    image: "images/avatar1.jpg"    
  },
  {
    karnet: 2,
    name: 'Roman',
    lastName: 'Chavez',
    image: "images/avatar2.jpg"    
  }
]

function index() {
  const [cartas, setCartas] = useState([])
  return (
    <div>
      <Navbar/>
      <button type="button" className="btn btn-primary botonañadir">Primary 
        <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
      </button>
      
      <ul>
        <div className="cards">
          {Carta.map(({karnet, name, image}) => (
            <Cartas 
            key={karnet} 
            karnet={karnet} 
            name={name} 
            image={image} />
          ))}
        </div>
      </ul>
    </div>
  )
}

export default index