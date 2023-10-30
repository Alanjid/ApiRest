import Navbar from './scenes/global/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Link } from '@mui/material';

/* const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
}; */

const columns = [
  { field: 'id', headerName: 'Karnet', width: 70 },
  { field: 'Nombre', headerName: 'Nombre', width: 300 },
  { field: 'Apellidos', headerName: 'Apellidos', width: 300 },
  {
    field: 'Diagnostico',
    headerName: 'Diagnostico',
    type: 'number',
    width: 90,
  },
  {
    field: 'Accion',
    headerName: 'Accion',
    width: 160,
    cellClassName: 'actions',
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          /* onClick={(event) => {
            handleClick(event, cellValues);
          }} */
          href='/paciente'
        >
          Ver más
        </Button>
      );
    }
  },
];

const Carta = [
  { id: 1, Apellidos: 'Snow', Nombre: 'Jon', Diagnostico: 3 , Activo: 'Activo'},
  { id: 2, Apellidos: 'Lannister', Nombre: 'Cersei', Diagnostico: 1, Activo: 'Activo'},
  { id: 3, Apellidos: 'Lannister', Nombre: 'Jaime', Diagnostico: 2, Activo: 'Activo'},
  { id: 4, Apellidos: 'Stark', Nombre: 'Arya', Diagnostico: 1, Activo: 'Activo'},
  { id: 5, Apellidos: 'Targaryen', Nombre: 'Daenerys', Diagnostico: 2, Activo: 'Activo'},
  { id: 6, Apellidos: 'Melisandre', Nombre: null, Diagnostico: 1, Activo: 'Activo'},
  { id: 7, Apellidos: 'Clifford', Nombre: 'Ferrara', Diagnostico: 1, Activo: 'Activo'},
  { id: 8, Apellidos: 'Frances', Nombre: 'Rossini', Diagnostico: 1, Activo: 'Activo'},
  { id: 9, Apellidos: 'Roxie', Nombre: 'Harvey', Diagnostico: 2, Activo: 'Activo'},
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
        <div style={{ height: '475px', width: '100%', marginTop: '10px' }}>
          <DataGrid
            rows={Carta}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 7},
              },
            }}
            pageSizeOptions={[7, 50]}
            checkboxSelection
          />
        </div>
      </ul> 
 
    </div>
  )
}

export default index