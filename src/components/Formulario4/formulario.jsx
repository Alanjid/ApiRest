import * as React from 'react'
import { Box, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material";


const formulario = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [fecha, setFecha] = React.useState(dayjs('2023-06-19'));
    const [terapeuta,setTerapeuta] = React.useState(initialValues);
    const [showPassword1, setShowPassword1] = React.useState(false); // Estado para visibilidad de contraseña 1
    const [showPassword2, setShowPassword2] = React.useState(false); // Estado para visibilidad de contraseña 2
    const handleClickShowPassword = (field) => { // Modificar función para manejar ambos campos
        if (field === 1) {
            setShowPassword1((show) => !show);
        } else if (field === 2) {
            setShowPassword2((show) => !show);
        }
    };

    const publicar = () => {
        console.log(terapeuta);
    };

    /* useEffect(()=>{
      //Obtener los datos del terapeuta
      const getData = async ()=>{
          try {
            const response = await getTerapeuta()
            const data = await response
            setTerapeuta({...data,localidad: "Morelia, Michoacan"})            
            console.log(terapeuta)       

          } catch (error) {
            console.error(error)        
          }
      } 
      getData()    
    },[]) */

  return (
    <Box>
      <Formik
          onSubmit={publicar}
          initialValues={terapeuta}
          enableReinitialize={true}
          validationSchema={checkoutSchema}
      >
          {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                  <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                      }}
            >
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Karnet"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.karnet}
                name="karnet"
                error={!!touched.karnet && !!errors.karnet}
                helperText={touched.karnet && errors.karnet}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nombre}
                name="nombre"
                error={!!touched.nombre && !!errors.nombre}
                helperText={touched.nombre && errors.nombre}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Apellido Paterno"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.app}
                name="app"
                error={!!touched.app && !!errors.app}
                helperText={touched.app && errors.app}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Apellido Materno"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.apm}
                name="apm"
                error={!!touched.apm && !!errors.apm}
                helperText={touched.apm && errors.apm}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Nombre de usuario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="outlined"
                type={showPassword1  ? 'text' : 'password'}
                label="Contraseña"
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword(1)}
                      >
                        {showPassword1  ? <Visibility  /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }} 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="outlined"
                type={showPassword2  ? 'text' : 'password'}
                label="Repetir Contraseña"
                InputProps={{ // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword(2)}
                      >
                        {showPassword2  ? <Visibility  /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }} 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.comparacion}
                name="comparacion"
                error={!!touched.comparacion && !!errors.comparacion}
                helperText={touched.comparacion && errors.comparacion}
                sx={{ gridColumn: "span 2" }}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={[ 'DatePicker']} sx={{gridColumn: "span 4"}}>
                  <DatePicker                    
                    format='DD-MM-YYYY'
                    label="Fecha De Nacimiento"                    
                    value={fecha}
                    /* readOnly='true' */
                    /* onChange={(newValue) => setValue(newValue)} */
                    sx={{width: '100%'}}
                  />
                </DemoContainer>
              </LocalizationProvider>
              
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Localidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.localidad}
                name="localidad"                
                error={!!touched.localidad && !!errors.localidad}
                helperText={touched.localidad && errors.localidad}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" sx={{backgroundColor: '#4494E5'}}>
                Guardar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    );
};  

const checkoutSchema = yup.object().shape({
  karnet: yup.string().required("required"),
  nombre: yup.string().required("required"),
  app: yup.string().required("required"),
  apm: yup.string().required("required"),
  username: yup.string().required("required"),
  password: yup.string().required("Campo requerido"),
  comparacion: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required("Campo requerido"),
  localidad: yup.string().required("required"),
});

const initialValues = {
  karnet: "",
  nombre: "",  
  app:"",
  apm:"",
  username:"",
  password:"",
  comparacion:"",
  localidad: "Morelia, Michoacan"
};

export default formulario
