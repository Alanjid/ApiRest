import Navbar from './scenes/global/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useState,useEffect } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridToolbar,
  esES
} from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';
import { fetchData } from './api/pacientes/getPacientes';
import { useSelector, useDispatch } from 'react-redux';
import { addPaciente } from './redux/pacienteSlice';
import { useNavigate } from 'react-router-dom';

const handleClick = (karnet,dispatch,navigate)=>{
 
  dispatch(addPaciente(karnet))
  
  console.log('Karnet:',karnet)
  navigate('/paciente')

}
const columns = [
  { field: 'karnet', headerName: 'Karnet', width: 70, align: 'center' },
  { field: 'nombre', headerName: 'Nombre', width: 220, minWidth: 150, maxWidth: 300, align: 'center',headerAlign: 'center', },
  { field: 'app', headerName: 'Apellido Paterno', width: 220, minWidth: 150, maxWidth: 300, align: 'center',headerAlign: 'center', },
  { field: 'apm', headerName: 'Apellido Materno', width: 220, minWidth: 150, maxWidth: 200, align: 'center',headerAlign: 'center', },
  { field: 'fecha', headerName: 'Fecha De Nacimiento', width: 200, minWidth: 150, maxWidth: 200, align: 'center',headerAlign: 'center', },
  {
    field: 'diagnostico',
    headerName: 'Diagnostico',
    width: 90,
    align: 'center',
  },
  {
    field: 'Accion',
    headerName: 'Acción',
    width: 100,
    minWidth: 150, 
    maxWidth: 230,
    cellClassName: 'actions',
    align: 'center',
    headerAlign: 'center',
    renderCell: (cellValues) => {
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const karnet = cellValues.row.karnet
      console.log(karnet)
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event)=>{handleClick(karnet,dispatch,navigate)}}
          style={{height: '70%'}}
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
const format_data = (data) =>{  
  return data.map((item,index)=>{
    return {...item, id:index, fecha:new Intl.DateTimeFormat('es').format(new Date(item.fecha))}
  })
}

function index() {
  
  const [cartas, setCartas] = useState([])
  const [pacientes, setPacientes]=useState([])
  const correo_terapeuta = useSelector((state)=>state.user.correo)
  useEffect(()=>{
    
     
   const getData = async ()=>{
      try {
        const response = await fetchData(correo_terapeuta)
        const data = await response
        console.log(data)        
        setPacientes(format_data(data))
      } catch (error) {
        console.error(error)        
      }
    } 
    
    getData()
  },[])
  return (
    <div>
      <Navbar/>
      <Box display='flex' flexDirection='column' alignItems='center' mt='1rem'>
        <Box display='flex' alignItems='end' maxWidth='100%' flexDirection='column' rowGap='2rem'>
        <button type="button" className="btn btn-primary botonañadir">Añadir Paciente
          <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
        </button>            
          <Box component={Paper} elevation={0} width='100%'>
        
          <DataGrid 
            rows={pacientes}
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
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            sx={{
              '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows':{
                margin:0
              }

            }}
          />
          
          </Box>
        </Box>
      </Box>
     </div>
  )
}



export default index