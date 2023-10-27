import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"

import * as React from 'react';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function ActividadesRealizadas() {
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
                <Header title="Actividades realizadas" subtitle="" />    
            </Box>
          
          {/*   <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div> */}

    <Box display='flex' justifyContent='end' >
      <FormControl sx={{ width:'20rem' }} >
        <InputLabel id="demo-simple-select-label">Actividades Realizadas</InputLabel>
            <Select
              defaultValue={1}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={val}
              label="Actividades Realizada"
              onChange={handleChange}
            >
              <MenuItem value={1}>Alimentos</MenuItem>
              <MenuItem value={2}>Bebidas</MenuItem>
              <MenuItem value={3}>Acciones</MenuItem>
              <MenuItem value={4}>Partes del cuerpo</MenuItem>
              <MenuItem value={5}>Prendas de vestir</MenuItem>
          </Select>
        </FormControl>
        </Box>
        <Box mt='2rem' display='flex' flexDirection='column' gap='1rem'>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CheckCircleIcon color="blue"/>
                  <Typography variant="h4">Actividad 1</Typography>
                  </Box>
              </CardContent>
          </Card>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CancelIcon sx={{color:'#e91e63'}}/>
                  <Typography variant="h4">Actividad 2</Typography>
                  </Box>
              </CardContent>
          </Card>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CheckCircleIcon color="blue"/>
                  <Typography variant="h4">Actividad 3</Typography>
                  </Box>
              </CardContent>
          </Card>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CheckCircleIcon color="blue"/>
                  <Typography variant="h4">Actividad 4</Typography>
                  </Box>
              </CardContent>
          </Card>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CheckCircleIcon color="blue"/>
                  <Typography variant="h4">Actividad 5</Typography>
                  </Box>
              </CardContent>
          </Card>
          <Card sx={{":hover":{cursor:'pointer'},marginBottom:0}} onClick={handleClickOpen}>
              <CardContent>
                <Box display='flex' columnGap='10px' alignItems='center'>
                <CancelIcon sx={{color:'#e91e63'}}/>
                  <Typography variant="h4">Actividad 6</Typography>
                  </Box>
              </CardContent>
          </Card>
        </Box>
    </Box>

        {/* Modal */}
        <div>
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
                <DialogTitle><Typography variant='h3'>Evaluación</Typography></DialogTitle>
                <DialogContent dividers>
                    <Typography variant="h4" sx={{fontWeight:'bold'}}>Tiempo realizado:</Typography><Typography variant="h4">2 horas</Typography>
                    <Typography mt='25px' variant="h4" sx={{fontWeight:'bold'}}>Numero de intentos:</Typography><Typography variant="h4">5 intentos</Typography>
                    <Typography mt='25px' variant="h4" sx={{fontWeight:'bold'}}>Observaciones:</Typography><Typography variant="h4">Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad.
                      Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='blue'>Cerrar</Button>                    
                </DialogActions>
                </Dialog>
            </div>
    </Base>

    
  )
}

export default ActividadesRealizadas