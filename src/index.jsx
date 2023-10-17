import React from 'react'
import Navbar from './components/navbar/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import LeftVar from './components/leftvar/leftvar'
import Cartas from './components/cartas/cartas'
import './styles.css'
import { useState } from 'react'

const Carta = [
  {
    karnet: 1,
    name: 'Alan',
    lastName: 'Jimenez',
    image: "https://steamuserimages-a.akamaihd.net/ugc/1622974778773506850/4E3829042BFFCFD36B03599134B52F8077E14881/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"    
  },
  {
    karnet: 2,
    name: 'Roman',
    lastName: 'Chavez',
    image: "https://cdn.milenio.com/uploads/media/2020/02/25/ayuda-pato-zapatos-ganarse-premio_0_332_958_596.jpg"    
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
      
      <ul class="cards">
        {Carta.map(({karnet, name, image}) => (
          <Cartas 
          key={karnet} 
          karnet={karnet} 
          name={name} 
          image={image} />
        ))}
        </ul>
    </div>
  )
}

export default index
