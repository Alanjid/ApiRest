import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Formulario from "../../components/formulario2/formulario"
import { useSelector } from "react-redux"
import { useEffect } from "react"


function index() {
  
  
  return (
    <Base>    
        <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title="Información del paciente" subtitle="" />    
            </Box>
            <Box >
                <Formulario/>    
            </Box>
        </Box>
    </Base>
  )
}

export default index