import * as React from 'react'
import { Box, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTerapeuta } from "../../api/terapeuta" 
import { useEffect } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material";


const formulario = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
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
                type="email"
                label="Correo electronico"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
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

const Tmail =
  /^[a-z]{0,}\.[a-z]{0,}@teleton.org.mx$/;

const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;
  

const checkoutSchema = yup.object().shape({
  email: yup.string().matches(Tmail, "Correo Invalido").required("required"),
  nombre: yup.string().required("required"),
  app: yup.string().required("required"),
  apm: yup.string().required("required"),
  password: yup.string().matches(password, "Contraseña Invalida").required("Campo requerido"),
  comparacion: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required("Campo requerido"),
  localidad: yup.string().required("required"),
});

const initialValues = {
  email: "carlos.jimenez@teleton.org.mx",
  nombre: "Carlos",  
  app:"Jimenez",
  apm:"Guzman",
  password:"",
  comparacion:"",
  localidad: "Morelia, Michoacan"
};

export default formulario
