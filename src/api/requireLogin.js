import Axios from "axios";
import { useState } from "react";
import React from 'react'

const requireLogin = async (token) => {
  try {
    const response = await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`, {
      token: token.token,
      correo: token.correo,
      nombre: token.nombre,
      app: token.app,
      apm: token.apm,
      rol: token.rol,
      idinstitucion: token.idinstitucion,
    });
    // console.log(response);
    let bandera = (response.data);
    return (bandera);
  } catch (error) {
    console.log('api: ' + error);
    throw { data: error };
  }
}

export default requireLogin