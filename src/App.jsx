import { useState } from 'react'
import { useEffect } from 'react'
import RequireAuth from '../../api/RequireAuth.jsx';
import {
  Routes, Route
  /* createBrowserRouter,
  RouterProvider, */
} from "react-router-dom";
import Dashboard from '../dashboard/index.jsx'
import Observaciones from '../observaciones/index.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import Login from "../../login.jsx";
import Index from "../../index";
import Registro from "../../registro.jsx";
import Terapeutas from "../../terapeutas.jsx";

import Actividades from "../alimentos/index.jsx";
import Bebidas from '../bebidas/index.jsx';
import Acciones from '../acciones/index.jsx';
import Cuerpo from '../cuerpo/index.jsx';
import Prendas from '../prendas/index.jsx';
import Edicion from '../EdicionActividades/index.jsx';

import Error from "../../error.jsx";
import PActividades from '../actividades/index.jsx';
import Avances from '../avances/index.jsx';
import Tareas from '../tareas/index.jsx';
import Paciente from '../paciente/index.jsx';
import Cuenta from '../cuenta/index.jsx';
import ActividadesRealizadas from '../actividades_realizadas/index.jsx';
import Añadirobservaciones from '../Añadirobservaciones/index.jsx';
import requireLogin from '../../api/requireLogin.js';
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentInfo, killSession } from "../../redux/userSlice.js"


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