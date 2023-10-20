import { Box } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Chart from "../../components/dataset/chart"

const Avances = () => {
    return (
        <Base>
            <Box m='20px'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Avances" subtitle="" />               
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Chart/>    
                </Box>
            </Box>
        </Base>
    )
}

export default Avances