import { Box, Button } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Textarea from "../../components/textarea/textarea"

const Dashboard = () => {
    return (
        <Base>
            <Box m='20px'  padding='20px'  sx={{background:'#fcfcfc'}}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Header title="Ingresa las observaciones del paciente" subtitle="" />    
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

export default Dashboard