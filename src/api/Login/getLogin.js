import Axios from "axios";

const getLogin = async (username, password) => {
    try {
        const response = await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/token/`, {
            username: username,
            password: password
        });
        /* console.log(response); */
        return (response);
    } catch (error) {
        const datoserror = {
            "response":error.response,
            "message": error.message
        };
/*         console.log(datoserror); */
        return (datoserror);
    }
  }
  
  export default getLogin