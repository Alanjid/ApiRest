import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function registro() {
  return (
    <div>
      <div class="container">
        <div class="row">
            <div class="col-lg-12 shadow-lg p-3 mb-5">

              <div class="card border-primary">
                <div class="card-header bg-primary text-white">Registrarse</div>
                <div class="card-body text-primary">   
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre completo</label>
                        <input id="name" name="name" type="text" class="form-control" aria-describedby="emailHelp"/>              
                    </div>
                    <div class="mb-3">
                        <label for="user" class="form-label">Cuenta de usuario</label>
                        <input id="user" name="user" type="text" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input id="pass" name="pass" type="password" class="form-control"/>
                    </div>                            
                </div>
                <div class="card-footer bg-transparent border-primary">
                  <a href="/" type="button" class="btn btn-secondary">Cancelar</a>
                  <button type="submit" class="btn btn-primary">Registrar</button>
                </div>
              </div>   
        
            </div>
        </div>
    </div>
    </div>
  )
}

export default registro
