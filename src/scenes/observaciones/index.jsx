import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Hidden, Typography } from "@mui/material"
import { useState } from 'react'
import * as React from 'react';
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import AddIcon from '@mui/icons-material/Add';
import {
    GridRowModes,
    DataGrid,
    GridToolbar,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
  } from '@mui/x-data-grid';
  import { Link } from '@mui/material';
import { blue } from "@mui/material/colors";

const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
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

    const columns = [
        { field: 'id', headerName: 'id', width: 70, align: 'center' },
        { field: 'Fecha', headerName: 'Fecha', width: 300, align: 'center' },
        { field: 'Responsable', headerName: 'Responsable', width: 300, align: 'center' },
        { field: 'Observacion', headerName: 'Observacion', width: 300, align: 'center' },
      ];
      
      const Carta = [
        { id: 1, Responsable: 'Jon', Fecha: '17/01/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 1.'},
        { id: 2, Responsable: 'Cersei', Fecha: '18/02/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 2.'},
        { id: 3, Responsable: 'Jaime', Fecha: '19/03/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 3.'},
        { id: 4, Responsable: 'Arya', Fecha: '11/04/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 4.'},
        { id: 5, Responsable: 'Daenerys', Fecha: '12/05/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 5.'},
        { id: 6, Responsable: 'Dan', Fecha: '13/06/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 6.'},
        { id: 7, Responsable: 'Ferrara', Fecha: '14/07/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 7.'},
        { id: 8, Responsable: 'Rossini', Fecha: '15/08/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 8.'},
        { id: 9, Responsable: 'Harvey', Fecha: '16/09/2002', Observacion: 'Mostró dificultades en el uso del lenguaje verbal para comunicar sus pensamientos y emociones durante la actividad. Se promovió el uso de palabras y frases sencillas para fomentar la comunicación verbal 9.'},
      ]

    return (
        <Base>
            <Box m='20px' padding='20px'  sx={{background:'#fcfcfc'}}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <a href="/añadiro" type="button" className="btn btn-primary botonañadir">Añadir Observación
                        <AddIcon sx={{marginLeft: '20px'}}></AddIcon>
                    </a>
                </Box>
                <Box>
                    <div style={{ height: '500px', width: '100%', marginTop: '10px' }}>
                        <DataGrid
                            rows={Carta}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10},
                            },
                            }}
                            pageSizeOptions={[10, 50]}
                            slots={{
                            toolbar: GridToolbar,
                            }}
                        />
                    </div>
                </Box>
            </Box>
            <div>
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
                <DialogTitle><Typography variant='h3'>Evaluación</Typography></DialogTitle>
                <DialogContent dividers>
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

export default Dashboard