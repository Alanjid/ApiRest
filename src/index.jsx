import Navbar from './scenes/global/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { useState,useEffect } from 'react'
import * as React from 'react';
import { Button, Switch, FormControlLabel  } from '@mui/material';
import {
  DataGrid,
  GridToolbar,
  esES
} from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';
import { fetchData } from './api/pacientes/getPacientes';
import { useSelector, useDispatch } from 'react-redux';
import { addPaciente } from './redux/pacienteSlice';
import { useNavigate, Link } from 'react-router-dom';
import { selectCurrentRol } from './redux/userSlice';
import { Carta } from './data/main';


const handleClick = (karnet,dispatch,navigate)=>{
 
  dispatch(addPaciente(karnet))
  
  console.log('Karnet:',karnet)
  navigate('/paciente')

}
const columnsPacientes = [
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

const format_data = (data) =>{  
  return data.map((item,index)=>{
    return {...item, id:index, fecha:new Intl.DateTimeFormat('es').format(new Date(item.fecha))}
  })
}

function index() {

  const Admin = useSelector(selectCurrentRol)
  const [cartas, setCartas] = useState([])
  const [pacientes, setPacientes]=useState([])
  const correo_terapeuta = useSelector((state)=>state.user.correo)
  const [bandera, setBandera] = useState(false);

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
          <Box display='flex' gap='3rem' justifyContent={{xs:'center',lg:'start'}} flexDirection='row' flexWrap='wrap'>
            <FormControlLabel onChange={() => setBandera(!bandera)} control={<Switch />} label={bandera ? 'Terapeutas' : 'Pacientes'} />
            { bandera ? 
              <Link 
                className="btn btn-primary botonañadir" 
                style={{textDecoration: 'none', color: 'white'}}
                to='añadirterapeuta'
                >
                Añadir Terapeuta
                <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
              </Link>
              :
              <Link 
                className="btn btn-primary botonañadir" 
                style={{textDecoration: 'none', color: 'white'}}
                to='añadirpaciente'
              >
                Añadir Paciente
                <img src="images/Plus.png" className='imagenañadir' height="20" alt="MyTEAPony Logo" loading="lazy"/>
              </Link>              
            }
          </Box>        
          <Box component={Paper} elevation={0} width='100%'>
        
          <DataGrid 
            rows={pacientes}
            columns={columnsPacientes}
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