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
import Dashboard from './scenes/dashboard'
import Sidebar from './scenes/global/Sidebar'

import Login from "./login";
import Index from "./index";
import Registro from "./registro";
import Error from "./error";
/*  const router = createBrowserRouter([
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
  },
]) 
 */
function App(){
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
        <Sidebar isSidebar={isSidebar}/>
        {/* <RouterProvider router={router}/> */}
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path='/' element={<Dashboard/>} />              
            </Routes> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App