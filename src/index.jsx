import Navbar from './scenes/global/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import {
  GridRowModes,
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Link } from '@mui/material';

/* const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
}; */

const columns = [
  { field: 'id', headerName: 'Karnet', width: 70, align: 'center' },
  { field: 'Nombre', headerName: 'Nombre', width: 300, align: 'center' },
  { field: 'Apellidos', headerName: 'Apellidos', width: 300, align: 'center' },
  { field: 'nacimiento', headerName: 'Fecha De Nacimiento', width: 300, align: 'center' },
  {
    field: 'Diagnostico',
    headerName: 'Diagnostico',
    width: 90,
    align: 'center',
  },
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
  { id: 1, Apellidos: 'Snow', Nombre: 'Jon', Diagnostico: 3 , Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 2, Apellidos: 'Lannister', Nombre: 'Cersei', Diagnostico: 1, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 3, Apellidos: 'Lannister', Nombre: 'Jaime', Diagnostico: 2, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 4, Apellidos: 'Stark', Nombre: 'Arya', Diagnostico: 1, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 5, Apellidos: 'Targaryen', Nombre: 'Daenerys', Diagnostico: 2, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 6, Apellidos: 'Melisandre', Nombre: null, Diagnostico: 1, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 7, Apellidos: 'Clifford', Nombre: 'Ferrara', Diagnostico: 1, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 8, Apellidos: 'Frances', Nombre: 'Rossini', Diagnostico: 1, Activo: 'Activo', nacimiento: '17/07/2002'},
  { id: 9, Apellidos: 'Roxie', Nombre: 'Harvey', Diagnostico: 2, Activo: 'Activo', nacimiento: '17/07/2002'},
]

function index() {
  const [cartas, setCartas] = useState([])

  return (
    <div>
      <Navbar/>
      <button type="button" className="btn btn-primary botonañadir">Añadir
        <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
      </button>
      
      <ul>
        <div style={{ height: '90%', width: '100%', marginTop: '10px' }}>
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
      </ul> 
 
    </div>
  )
}

export default index