import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Formulario from "../../components/formulario2/formulario"

function index() {
  return (
    <Base>
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title="Información del paciente" subtitle="" />    
            </Box>
            <Box justifyContent='space-between' alignItems='center'>
                <Formulario/>    
            </Box>
        </Box>
    </Base>
  )
}

export default index