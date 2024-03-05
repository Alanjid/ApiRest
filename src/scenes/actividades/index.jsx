/* eslint-disable react/prop-types */
import * as React from 'react';
import { Box, Typography } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"

/* Dialog */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox'

/* Card */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

/* imagenes */
import imagen_alimentos from '../../assets/alimento.png' 
import imagen_bebidas from '../../assets/bebidas.png'
import imagen_partes_cuerpo from '../../assets/partes del cuerpo.png'
import imagen_prendas from '../../assets/prendas.png'
import imagen_acciones from '../../assets/acciones.png'
import imagen_matematicas from '../../assets/matematicas.png'


const Card_actividad = ({titulo,imagen}) =>{
    return (
    <Card sx={{minWidth: 300, flex:1,
        maxWidth:{
            xs:'100%',            
            md:350
        }
    }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="200"
            image={imagen}
            alt="categoria"
            sx={{objectFit: 'contain'}}
            />
            <CardContent>
            <Typography  variant="h4" component="p">
                {titulo}
            </Typography>             
            </CardContent>
        </CardActionArea>
    </Card>
    )
}


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
                <Box display='flex' justifyContent={{xs:'center',lg:'start'}} alignItems='center' mb='1rem'>
                    <Header title="Actividades" />               
                </Box>
                <Box display='flex' gap='3rem' justifyContent={{xs:'center',lg:'start'}} flexDirection='row' flexWrap='wrap'>
                
                <Card_actividad titulo='Alimentos' imagen={imagen_alimentos}/>
                <Card_actividad titulo='Bebidas' imagen={imagen_bebidas}/>
                <Card_actividad titulo='Acciones' imagen={imagen_acciones}/>
                <Card_actividad titulo='Partes del cuerpo' imagen={imagen_partes_cuerpo}/>
                <Card_actividad titulo='Prendas de vestir' imagen={imagen_prendas}/>
                <Card_actividad titulo='Matemáticas' imagen={imagen_matematicas}/>
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

export default Actividades
