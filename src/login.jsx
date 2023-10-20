import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function login() {

  const [Nombre, setNombre] = useState("");
  const [Pass, setPass] = useState("");

  const get = () =>{
  Axios.post("http://localhost:3003/logueo", {
    Nombre: Nombre,
    Pass: Pass,
    }).then(() => {
      noti.fire({
        title: <strong>Conexión exitosa</strong>,
        html: <i>LOGIN CORRECTO</i>,
        icon: 'success',
        timer: 2000
      })

    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Usuario y/o Password incorrectas'
        })
      });
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="images/ImagenLogin.png" alt="Login image" className="w-100 vh-100"/>
            </div>
            <div className="col-sm-6 text-black">        
                <main className="form-signin text-center p-3 mb-5">

                    <img className="mb-4" src="images/logo 1.png" alt="" width="150" height="100"/>
                    <h4 className="salto letra">INICIO DE SESIÓN</h4>
                    <div className="form-floating salto">
                      <input type="text" onChange={(event)=>{
                        setNombre(event.target.value);
                        }}
                        className="form-control" value={Nombre} placeholder="Correo"/>
                      <label for="user">USUARIO</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" onChange={(event)=>{
                        setPass(event.target.value);
                        }} 
                        className="form-control" value={Pass} placeholder="Contraseña"/>
                      <label for="pass">CONTRASEÑA</label>
                    </div>
                    <div className="form-check form-switch salto">
                      <input className="form-check-input" name="duradera" type="checkbox" role="switch" id="duradera"/>
                      <label className="form-check-label" for="duradera">Mantener sesión iniciada</label>
                    </div>
                    {/*<button className="w-100 btn btn-lg btn-primary" onClick={get}>INICIAR</button>*/}
                    <a href="/" type="button" className="w-100 btn btn-lg btn-primary">INICIAR</a>
                
                  <p className="salto"></p>

                  <a href="/registrate" type="button" className="w-100 btn btn-lg btn-bd-primary">Registrarse</a>
                  <p className="salto"></p>
                  <p className="sinsalto">¿Olvidaste tu contraseña?</p>
                  <a href="#">Recupérala aquí</a>
                </main>   
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default login
