
import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
const Dashboard = () => {
    return (
        <Base>
            <Box m='20px'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Observaciones" subtitle="Welcome to your dashboard" />               
                </Box>
            </Box>
        </Base>
    )
}

export default Dashboard