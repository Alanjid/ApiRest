import { useState } from 'react'
import { useEffect } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import Observaciones from './scenes/observaciones'

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
/* import Header from './components/Header';
import Email from './components/Email';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice'; */

 const router = createBrowserRouter([
  {
    path:"/dashboard",
    element: <Dashboard/>,
  },
  {
    path:"/",
    element: <Index/>,
  },
  {
    path:"/paciente/añadirobservacion",
    element: <Añadirobservaciones/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/actividades",
    element: <Actividades/>,
  },
  {
    path:"/actividades/bebidas",
    element: <Bebidas/>,
  },
  {
    path:"/actividades/acciones",
    element: <Acciones/>,
  },
  {
    path:"/actividades/cuerpo",
    element: <Cuerpo/>,
  },
  {
    path:"/actividades/prendas",
    element: <Prendas/>,
  },
  {
    path:"/actividades/edicion",
    element: <Edicion/>,
  },
  {
    path:"/terapeutas",
    element: <Terapeutas/>,
  },
  {
    path:"/paciente",
    element: <Paciente/>,
  },
  {
    path:"/registrate",
    element: <Registro/>,
  },
  {
    path:"/paciente/observaciones",
    element: <Observaciones/>,
  },
  {
    path:"/paciente/actividades",
    element: <PActividades/>,
  },
  {
    path:"/paciente/avances",
    element: <Avances/>,
  },
  {
    path:"/paciente/tareas",
    element: <Tareas/>,
  }, 
  {
    path:"/paciente/actividades-realizadas",
    element: <ActividadesRealizadas/>,
  },
  {
    path:"/cuenta",
    element: <Cuenta/>,
  },
  {
    path:"*",
    element: <Error/>,
  },
]) 

function App(){
  /* const dispatch = useDispatch();

  useEffect ( () => {
    fetch("http://localhost:3003/users")
      .then((response) => response.json())
      .then((data) =>dispatch(addUser(data)))
      .catch((error) => console.log(error))
  },[]); */

  return(
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App

{/* <div>
      <Header/>
      <Email/>
    </div> */}