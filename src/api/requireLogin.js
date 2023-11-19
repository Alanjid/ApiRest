import { useLocation, Navigate, Outlet } from "react-router-dom"
import Axios from "axios";

const requireLogin = (token) => {
    Axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        token: token.token,
        correo: token.correo,
        nombre: token.nombre,
        app: token.app,
        apm: token.apm,
        rol: token.rol,
        idinstitucion: token.idinstitucion,
      }).then((response) => {
      }).catch(function(error){
        console.log(error)
      });
}

export default requireLogin;