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
import Error from "./error";
import Actividades from './scenes/actividades';
import Avances from './scenes/avances';
import Tareas from './scenes/tareas';

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
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/terapeutas",
    element: <Terapeutas/>,
  },
  {
    path:"/registrate",
    element: <Registro/>,
  },
  {
    path:"/observaciones",
    element: <Observaciones/>,
  },
  {
    path:"/actividades",
    element: <Actividades/>,
  },
  {
    path:"/avances",
    element: <Avances/>,
  },
  {
    path:"/tareas",
    element: <Tareas/>,
  },
  {
    path:"*",
    element: <Error/>,
  },
]) 

function App(){
  return(
  // const [theme, colorMode] = useMode()
  // const [isSidebar, setIsSidebar] = useState(true);
  // return (
  //   <ColorModeContext.Provider value={colorMode}>
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       <div className='app'>
  //       <Sidebar isSidebar={isSidebar}/>
  //       {/* <RouterProvider router={router}/> */}
  //         <main className='content'>
          
  //           <Topbar setIsSidebar={setIsSidebar}/>
  //           <Routes>
  //             <Route path='/' element={<Dashboard/>} />              
  //           </Routes> 
  //         </main>
  //       </div>
  //     </ThemeProvider>
  //   </ColorModeContext.Provider>
  // )
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App