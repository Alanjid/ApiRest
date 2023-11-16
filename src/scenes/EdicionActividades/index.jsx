import { Box, Button } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Textarea from "../../components/textarea/textarea"

function index() {
  return (
    <Base>
        <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title="Actividad 1" subtitle="" />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Header title="" subtitle="Instrucciones para la actividad 1" />
            </Box>
            <Textarea/>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Header title="" subtitle="Objetivo de la actividad 1" />
            </Box>
            <Textarea/>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Header title="" subtitle="Materiales de la actividad 1" />
            </Box>
            <Textarea/>
            <Box display="flex" justifyContent="start" mt="20px" ml='10px'>
                <Button type="submit" variant="contained" sx={{backgroundColor: '#4494E5'}}>
                    Guardar
                </Button>
            </Box>
        </Box>
    </Base>
  )
}

export default index