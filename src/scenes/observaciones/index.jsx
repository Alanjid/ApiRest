import { Box, Button } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () => {
    return (
        <Base>
            <Box m='20px'  padding='20px'  sx={{background:'#fcfcfc'}}>
                <a href="/añadiro" type="button" className="btn btn-primary botonañadir">Añadir Observación
                    <AddIcon sx={{marginLeft: '20px'}}></AddIcon>
                </a>
            </Box>
        </Base>
    )
}

export default Dashboard