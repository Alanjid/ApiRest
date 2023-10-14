import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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