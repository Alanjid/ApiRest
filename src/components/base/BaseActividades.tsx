import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link
} from "react-router-dom";

import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes } from 'react-router-dom';

import Topbar from '../../scenes/global/Topbar'
import Sidebar from '../../scenes/global/SidebarActividades'
import Observaciones from '../../scenes/observaciones'
import Dashboard from '../../scenes/dashboard'

interface BaseProps {
    children: React.ReactNode;
}

function Base ({children}: BaseProps) : JSX.Element {
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
                <Route path='/observaciones' element={<Observaciones/>} />              
                <Route path='/prueba3' element={<Dashboard/>} />              
              </Routes> 
              {children}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
}
export default Base