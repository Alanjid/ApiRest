import { useState } from 'react'
import { useEffect } from 'react'
import RequireAuth from './api/RequireAuth';
import {
  Routes, Route
  /* createBrowserRouter,
  RouterProvider, */
} from "react-router-dom";
import Dashboard from './scenes/dashboard'
import Observaciones from './scenes/observaciones'
import Layout from './components/Layout/Layout'
import Login from "./login";
import Index from "./index";
import Registro from "./registro";
import Terapeutas from "./terapeutas";

import Actividades from "./scenes/alimentos";
import Bebidas from './scenes/bebidas';
import Acciones from './scenes/acciones';
import Cuerpo from './scenes/cuerpo';
import Prendas from './scenes/prendas';
import Edicion from './scenes/EdicionActividades';

import Error from "./error";
import PActividades from './scenes/actividades';
import Avances from './scenes/avances';
import Tareas from './scenes/tareas';
import Paciente from './scenes/paciente';
import Cuenta from './scenes/cuenta';
import ActividadesRealizadas from './scenes/actividades_realizadas';
import Añadirobservaciones from './scenes/Añadirobservaciones';
import requireLogin from './api/requireLogin.js';
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentInfo, killSession } from "./redux/userSlice.js"


function App(){
  const token = useSelector(selectCurrentInfo)
  const dispatch = useDispatch();
  useEffect(() => {
    requireLogin(token)
    .then((response) =>{
      if(!response){
        dispatch(killSession())
      }
    })
  })

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Index />} />
          <Route path="cuenta" element={<Cuenta />} />
          <Route path="paciente/actividades-realizadas" element={<ActividadesRealizadas />} />
          <Route path="paciente/tareas" element={<Tareas />} />
          <Route path="paciente/avances" element={<Avances />} />
          <Route path="paciente/actividades" element={<PActividades />} />
          <Route path="paciente/observaciones" element={<Observaciones />} />
          <Route path="registrate" element={<Registro />} />
          <Route path="paciente" element={<Paciente />} />
          <Route path="terapeutas" element={<Terapeutas />} />
          <Route path="actividades/edicion" element={<Edicion />} />
          <Route path="actividades/prendas" element={<Prendas />} />
          <Route path="actividades/cuerpo" element={<Cuerpo />} />
          <Route path="actividades/acciones" element={<Acciones />} />
          <Route path="actividades/bebidas" element={<Bebidas />} />
          <Route path="actividades" element={<Actividades />} />
          <Route path="paciente/añadirobservacion" element={<Añadirobservaciones />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App