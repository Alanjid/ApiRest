import { Box } from "@mui/material"
import Base from '../../components/base/BaseFormularios'
import Header from "../../components/header/Header"
import Form from '../../components/Formulario3/formulario'


const AñadirTerapeuta = () => {

    return (
        <Base>
            <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Añadir Terapeuta"/>
                </Box>
                <Form />
            </Box>
        </Base>
    )
}

export default AñadirTerapeuta