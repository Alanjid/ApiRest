import * as React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTerapeuta } from "../../api/terapeuta" 
import { useEffect } from "react"


const formulario = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [terapeuta,setTerapeuta] = React.useState(initialValues)

    const handleFormSubmit = (values) => {
        console.log(values);

    };

    useEffect(()=>{
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
    },[])

  return (
    <Box>
      <Formik
        onSubmit={handleFormSubmit}
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
            {console.log("Values:", values)}
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
                label="Correo electronico"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.correo}
                name="email"
                /* error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email} */
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={`${values.nombre} ${values.app} ${values.apm}`}
                name="nombre"
                error={!!touched.nombre && !!errors.nombre}
                helperText={touched.nombre && errors.nombre}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                label="Contraseña"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pass}
                name="pass"
                error={!!touched.pass && !!errors.pass}
                helperText={touched.pass && errors.pass}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  readOnly: true,
                }}
                
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
  pass: yup.string().matches(password, "Contraseña Invalida").required("required"),
  localidad: yup.string().required("required"),
});

const initialValues = {
  correo: "",
  nombre: '',  
  app:'' ,
  apm:'',  
  localidad: "Morelia, Michoacan", 

};

export default formulario
