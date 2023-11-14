import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function login() {
  const noti = withReactContent(Swal);
  const [showPassword, setShowPassword] = React.useState(false);
  const [EmpleadosList, setEmpleados] = useState([]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [Nombre, setNombre] = useState("");
  const [Pass, setPass] = useState("");

  const publicar = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    }
    Axios.post("http://localhost:3003/login" ,{data}).then((response) => {
      if(response.data){
        setEmpleados(response.data);
        console.log("a "+EmpleadosList);
      }else{
        console.log("Error");
      }
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No Se Logro Recuperar Los Empleados',
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
              src="images/ImagenLogin.png"
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
                {/* render props */}
              </Formik>
            </Box>

            {/*  <div className="form-floating salto">
                      <input type="text" onChange={(event)=>{
                        setNombre(event.target.value);
                        }}
                        className="form-control" value={Nombre} placeholder="Correo"/>
                      <label for="user">USUARIO</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" onChange={(event)=>{
                        setPass(event.target.value);
                        }} 
                        className="form-control" value={Pass} placeholder="Contraseña"/>
                      <label for="pass">CONTRASEÑA</label>
                    </div> */}
            {/*  <div className="form-check form-switch salto">
                      <input className="form-check-input" name="duradera" type="checkbox" role="switch" id="duradera"/>
                      <label className="form-check-label" for="duradera">Mantener sesión iniciada</label>
                    </div> */}

            {/*    <a href="/" type="button" className="w-100 btn btn-lg btn-primary">INICIAR</a> */}

            {/*  <p className="salto"></p> */}

            {/*  <a href="/registrate" type="button" className="w-100 btn btn-lg btn-bd-primary">Registrarse</a>
                  <p className="salto"></p>
                  <p className="sinsalto">¿Olvidaste tu contraseña?</p>
                  <a href="#">Recupérala aquí</a> */}
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
