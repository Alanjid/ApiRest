import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Form from '../../components/formulario1/formulario'


const Cuenta = () => {

    return (
        <Base>
            <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Mi Cuenta"/>
                </Box>
                <Form />
            </Box>
        </Base>
    )
}

export default Cuenta