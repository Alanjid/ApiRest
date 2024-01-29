import Axios from "axios";
const headers = { Authorization: `${localStorage.getItem('token')}` };

  const getTerapeuta= async () => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_BACKEND_URL}/terapeuta`,{headers});
      const data = await response;   
      console.log(data)
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }
  }; 
export {getTerapeuta}