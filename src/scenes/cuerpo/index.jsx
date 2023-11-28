import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function index() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [val, setVal] = React.useState(5);

    const handleChange = (event) => {
        setVal(event.target.value);
    };
  return (
    <Base>
        <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title="Partes del cuerpo" subtitle="" />    
        </Box>
        <Box mt='2rem' display='flex' flexDirection='column' gap='1rem'>
        <Link to={'/actividades/edicion'} style={{textDecoration: 'none', color: 'white'}}>
                <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
                    <CardContent>
                        <Box display='flex' columnGap='10px' alignItems='center'>
                        <Typography variant="h4">Actividad 1</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>

            <Link to={'/actividades/edicion'} style={{textDecoration: 'none', color: 'white'}}>
                <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
                    <CardContent>
                        <Box display='flex' columnGap='10px' alignItems='center'>
                        <Typography variant="h4">Actividad 2</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>

            <Link to={'/actividades/edicion'} style={{textDecoration: 'none', color: 'white'}}>
                <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
                    <CardContent>
                        <Box display='flex' columnGap='10px' alignItems='center'>
                        <Typography variant="h4">Actividad 3</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>

            <Link to={'/actividades/edicion'} style={{textDecoration: 'none', color: 'white'}}>
                <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
                    <CardContent>
                        <Box display='flex' columnGap='10px' alignItems='center'>
                        <Typography variant="h4">Actividad 4</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>

            <Link to={'/actividades/edicion'} style={{textDecoration: 'none', color: 'white'}}>
                <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
                    <CardContent>
                        <Box display='flex' columnGap='10px' alignItems='center'>
                        <Typography variant="h4">Actividad 5</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
            </Box>
        </Box>
    </Base>
  )
}

export default index