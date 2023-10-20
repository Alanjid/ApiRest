import * as React from 'react'
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const currencies = [
  {
    value: '1',
    label: 'Grado 1',
  },
  {
    value: '2',
    label: 'Grado 2',
  },
  {
    value: '3',
    label: 'Grado 3',
  },
];

const formulario = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [value, setValue] = React.useState(dayjs('2023-06-19'));
    const handleFormSubmit = (values) => {
        console.log(values);

    };
  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
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
                label="Numero de folio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.folio}
                name="folio"
                InputProps={{
                  readOnly: true,
                }}
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
                InputProps={{
                  readOnly: true,
                }}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                select
                variant="outlined"
                type="text"
                label="Grado de Autismo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.grado}
                defaultValue="1"
                name="grado"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ gridColumn: "span 4" }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Fecha de inicio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.inicio}
                name="inicio"
                InputProps={{
                  readOnly: false,
                }}
                sx={{ gridColumn: "span 4" }}
              />
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={[ 'DatePicker']} sx={{gridColumn: "span 4"}}>
                  <DatePicker
                    format='DD-MM-YYYY'
                    label="Fecha De Inicio"
                    value={value}
                    readOnly='true'
                    onChange={(newValue) => setValue(newValue)}
                    sx={{width: '100%'}}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
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
  folio: yup.string().required("required"),
  nombre: yup.string().required("required"),
  grado: yup.string().required("required"),
  inicio: yup.string().required("required"),
});
const initialValues = {
  folio: "",
  nombre: "",
  inicio: "",  
};

export default formulario;