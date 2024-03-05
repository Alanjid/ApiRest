import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlice';
import { Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography,} from "@mui/material";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'


function login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const noti = withReactContent(Swal);
  const [showPassword, setShowPassword] = React.useState(false);
  const [terapeutas, setterapeutas] = useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [Nombre, setNombre] = useState("");
  const [Pass, setPass] = useState("");

  const publicar = async (values) => {
    await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      email: values.email,
      password: values.password,
      recordarme: values.recordarme,
    }).then((response) => {
      if(response.data.token){
        if(response.data.isactive === 1){
          dispatch(addUser(response.data))
          noti.fire({
            icon: 'success',
            title: 'Acceso exitoso',
            text: 'Bienvenido ',
            timer: 2000,
          })
          navigate('/')
        }else{
          noti.fire({
            icon: 'error',
            title: 'Tu cuenta esta inactiva',
            text: 'Contacta con el administrador para resolver este problema',
            timer: 2000,
          })
        }
      }else{
        noti.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Revisa que tus datos sean correctos',
          timer: 2000,
        })
      }
    }).catch(function(error){
      noti.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede iniciar seción actualmente',
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error" ? "Intente Más Tarde" : JSON.parse(JSON.stringify(error)).message
      })
    });
  };

  return (
    <div className="container-fluid" style={{ background: "#fbfbfb" }}>
      <div className="row">
        <div className="col-md-6 px-0 d-none d-md-block">
          <div className="d-flex" style={{height:'100vh',minHeight:'100%'}}>
            <img
              src="images/ImagenLogin1.png"
              style={{ objectFit: "cover" }}
              alt="Login image"
              className="w-100 h-100"
            />
          </div>
        </div>
        <div className="col-md-6   text-black" style={{boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          <main className="form-signin text-center p-3 mb-5">
            <img className="mb-4" src="images/logo 1.png" alt="" height="75 " />
            <h4 className="salto letra">INICIO DE SESIÓN</h4>

            <Box display={"flex"} mt={4} flexDirection={"column"}>
              <Formik onSubmit={publicar} initialValues={initialValues} validationSchema={checkoutSchema}>
                {({
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container rowSpacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          variant="outlined"
                          type="text"
                          id="email"
                          label="Correo electrónico"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name="email"
                          error={!!touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth                          
                          variant="outlined"
                          type={showPassword ? 'text' : 'password'}
                          label="Contraseña"
                          InputProps={{ // <-- This is where the toggle button is added.
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <Visibility  /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}                         
                          onBlur={handleBlur}
                          onChange={handleChange}
                          name="password"
                          error={!!touched.password && !!errors.password}
                          helperText={touched.password && errors.password}
                        />
                      </Grid>
                      <Grid item sx={{ paddingTop: ".5rem !important" }}>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          name="recordarme"
                          id="recordarme"
                          label="Recordarme"
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    <Box display={"flex"} flexDirection={'column'} sx={{ paddingTop: ".5rem" }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Iniciar sesión
                      </Button>
                      <Box display={"flex"} justifyContent={'space-between'}>
                      <Typography variant="subtitle1" component='a' href="#" sx={{textDecoration:'none'}}>¿Olvidaste tu contraseña?</Typography>
                      <Typography variant="subtitle1" component='a' href="#"  sx={{textDecoration:'none'}}>Registrarse</Typography>
                      </Box>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </main>
        </div>
      </div>
    </div>
  );
}

const email =/^[a-z]{0,}\.[a-z]{0,}@teleton.org.mx$/;

const password =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/;

const checkoutSchema = yup.object().shape({
  email: yup.string().matches(email, "Correo Invalido").required("Campo requerido"),
  password: yup.string().matches(password, "Contraseña Invalida").required("Campo requerido"),
});

const initialValues = {
  email: "",
  recordarme: false,
  password:""
};

export default login;
