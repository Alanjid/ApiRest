import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Hidden, Typography, Alert, Stack } from "@mui/material"
import { useState } from 'react'
import * as React from 'react';
import Base from '../../components/base/Base'
import Header from "../../components/header/Header"
import AddIcon from '@mui/icons-material/Add';
import {
    GridRowModes,
    DataGrid,
    GridToolbar,
    GridFooter,
    GridToolbarContainer,
    useGridApiContext,
    useGridApiEventHandler,
    GridActionsCellItem,
    GridRowEditStopReasons,
  } from '@mui/x-data-grid';
  import { Link } from '@mui/material';
import { blue } from "@mui/material/colors";

const Dashboard = () => {
    function Footer() {
        const [message, setMessage] = React.useState('');
        const apiRef = useGridApiContext();
      
        const handleRowClick = (params) => {
          setMessage(`Observacion: ${params.row.Observacion}`);
        };
      
        useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);
      
        return (
          <React.Fragment>
            <GridFooter />
            {message && <Alert severity="info">{message}</Alert>}
          </React.Fragment>
        );
      }

    const columns = [
        { field: 'id', headerName: 'id', width: 70, align: 'center' },
        { field: 'Fecha', headerName: 'Fecha', width: 300, align: 'center' },
        { field: 'Responsable', headerName: 'Responsable', width: 300, align: 'center' },
        { field: 'Observacion', headerName: 'Observacion', width: 300, align: 'center' },
        {
            field: 'Accion',
            headerName: 'Accion',
            width: 300,
            cellClassName: 'actions',
            align: 'right',
            renderCell: (cellValues) => {
              return (
                <Button
                  variant="contained"
                  color="primary"
                  /* onClick={(event) => {
                    handleClick(event, cellValues);
                  }} */
                  href='/paciente'
                  style={{width: '100%', height: '70%'}}
                >
                  Ver más
                </Button>
              );
            }
          },
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
            <Box m='20px' sx={{background:'#fcfcfc'}}>
                <Box paddingBottom={3} paddingTop={2}>
                    <a href="/paciente/añadirobservacion" type="button" className="btn btn-primary botonañadir">Añadir Observación
                        <AddIcon sx={{marginLeft: '20px'}}></AddIcon>
                    </a>
                </Box>
                <Box>
                    <ul>
                        <div style={{ height: '200', width: '100%', marginTop: '10px' }}>
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
                            footer: Footer,
                            }}
                        />
                        </div>
                    </ul> 
                </Box>
                
            </Box>         
        </Base>
    )
}

export default Dashboard