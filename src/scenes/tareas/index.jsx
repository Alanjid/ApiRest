import * as React from 'react';
import { Box, Typography } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const Tareas = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <Base>
            <Box m='20px'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Header title="Tareas en casa" />               
                </Box>
                <Box display='flex' rowGap='1rem' flexDirection='column'>
                    
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>                        
                        <CardContent>
                            <Typography variant="h4">Alimentos</Typography>
                        </CardContent>
                    </Card>
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>
                        <CardContent>
                            <Typography variant="h4">Bebidas</Typography>
                        </CardContent>
                    </Card>
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>
                        <CardContent>
                            <Typography variant="h4">Acciones</Typography>
                        </CardContent>
                    </Card>
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>
                        <CardContent>
                            <Typography variant="h4">Partes del cuerpo</Typography>
                        </CardContent>
                    </Card>
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>
                        <CardContent>
                            <Typography variant="h4">Prendas de vestir</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            {/* Modal */}
            <div>
                <Dialog open={open} fullWidth maxWidth='sm'>
                <DialogTitle><Typography variant='h3'>Actividades</Typography></DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>
                  
                  Seleccione las actividades para el paciente.
                    </DialogContentText>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color='blue' defaultChecked />}  label="Actividad 1" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Actividad 2" />
                        <FormControlLabel control={<Checkbox color='blue' defaultChecked />}  label="Actividad 3" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Actividad 4" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Actividad 5" />
                    </FormGroup>
                </DialogContent>
                <DialogActions sx={{display:'flex',justifyContent:'space-between'}}>
                    <Button onClick={handleClose} color='blue'>Cancelar</Button>
                    <Button onClick={handleClose} color='blue'>Agregar</Button>
                </DialogActions>
                </Dialog>
            </div>
        </Base>
    )
}

export default Tareas