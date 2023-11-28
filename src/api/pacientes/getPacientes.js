import Axios from "axios";

const fetchData = async (correo) => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_BACKEND_URL}/pacientes`,{
        params:{
            correo
        }
      });
      const data = await response;   
      console.log(data)
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  };

  const getPaciente = async (karnet) => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_BACKEND_URL}/paciente`,{
        params:{
            karnet
        }
      });
      const data = await response;   
      console.log(data)
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  }; 
export {fetchData, getPaciente}