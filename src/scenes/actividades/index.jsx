import * as React from 'react';
import { Box, Typography } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* Dialog */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const Actividades = () => {
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
                    <Header title="Actividades" subtitle="Welcome to your dashboard" />               
                </Box>
                <Box display='flex' rowGap='1rem' flexDirection='column'>
                    
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>                        
                        <CardContent>
                            <Typography variant="h4">Metodo TEACCH</Typography>
                        </CardContent>
                    </Card>
                    <Card onClick={handleClickOpen} sx={{":hover":{cursor:'pointer'}}}>
                        <CardContent>
                            <Typography variant="h4">Metodo </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            {/* Modal */}
            <div>
                <Dialog open={open} fullWidth maxWidth='sm'>
                <DialogTitle><Typography variant='h3'>Metodo TEACCH</Typography></DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>
                  
                  Seleccione las actividades para el paciente.
                    </DialogContentText>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color='blue' defaultChecked />}  label="Alimentos" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Bebidas" />
                        <FormControlLabel control={<Checkbox color='blue' defaultChecked />}  label="Acciones" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Partes del cuerpo" />
                        <FormControlLabel control={<Checkbox color='blue' />} label="Prendas de vestir" />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
                </Dialog>
            </div>
        </Base>
    )
}

export default Actividades
