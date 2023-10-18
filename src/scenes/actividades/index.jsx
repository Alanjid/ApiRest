
import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
const Actividades = () => {
    return (
        <Base>
            <Box m='20px'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Actividades" subtitle="Welcome to your dashboard" />               
                </Box>
            </Box>
        </Base>
    )
}

export default Actividades