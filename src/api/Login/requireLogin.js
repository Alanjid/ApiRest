import { decodeToken } from "react-jwt";

const requireLogin = async (access) => {
  const myToken = decodeToken(access.token);
  let currentDate = new Date();

  if (myToken.exp * 1000 < currentDate.getTime()) {
    /* console.log("Token expired."); */
    return false;
  } else {
    /* console.log("Valid token"); */
    if(access.rol === myToken.groups[0]){
      return true;
    }else{
      return false;
    }
  }
}

export default requireLogin