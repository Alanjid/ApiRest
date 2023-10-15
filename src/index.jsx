import React from 'react'
import Navbar from './components/navbar/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import LeftVar from './components/leftvar/leftvar'
import './styles.css'

function index() {
  return (
    <div>
      <Navbar/>
      <button type="button" class="btn btn-primary botonañadir">Primary 
        <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
      </button>
    </div>
  )
}

export default index
