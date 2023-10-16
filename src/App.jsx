import { useState } from 'react'
import { useEffect } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link
} from "react-router-dom";

import Login from "./login";
import Index from "./index";
import Registro from "./registro";
import Error from "./error";
import Pacientes from "./pacientes"

const router = createBrowserRouter([
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/",
    element: <Index/>,
  },
  {
    path:"/registrate",
    element: <Registro/>,
  },{
    path:"/informacion",
    element: <Pacientes/>,
  },{
    path:"*",
    element: <Error/>,
  }
])

function App(){
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App