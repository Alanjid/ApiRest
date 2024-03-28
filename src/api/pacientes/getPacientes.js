import Axios from "axios";
const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

const fetchData = async () => {
  var array = [];
    try {
      const response = await Axios.get(`${import.meta.env.VITE_BACKEND_URL}/asignacion-terapeuta-paciente/`,{headers});
      const data = await response;
      data.data.forEach(element => {
        const arreglo ={
          "karnet" : element.paciente.karnet,
          "nombre" : element.paciente.user.username,
          "app" : element.paciente.user.first_name,
          "apm" : element.paciente.user.last_name,
          "fecha" : element.paciente.user.fecha_nacimiento,
          "diagnostico" : element.paciente.diagnostico,
        }
        array.push(arreglo)
      });
      return array;
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

const fetchTerapeutas = async () => {
    /* try {
      const response = await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/terapeutaAdmin`,{
          correo: correo
      });
      const data = await response;   
      console.log(data)
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Puedes manejar el error según tus necesidades
    } */
  };

export {fetchData, getPaciente, fetchTerapeutas}