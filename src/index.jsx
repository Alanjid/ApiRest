import React from 'react'
import Navbar from './components/navbar/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import LeftVar from './components/leftvar/leftvar'

function index() {
  return (
    <div>
      <Navbar/>
      <LeftVar/>
    </div>
  )
}

export default index
