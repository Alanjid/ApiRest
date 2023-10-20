import React from "react";
import { Link } from "react-router-dom";
import Navbar from './scenes/global/NavError'
import { Box, Button} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import './styles.css'

function error() {
  return (
    <div>
      <Navbar/>
      <Box display="flex" justifyContent="center" mt="10px">
        <h2>No se encuentra esta pagina</h2>
      </Box>
      <Box display="flex" justifyContent="center" mt="10px">
        <Button type="submit" variant="contained" sx={{backgroundColor: '#4494E5'}}>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Volver al inicio </Link>
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" mt="10px">
        <Image className="imageerror" src="images/Error.png"></Image>
      </Box>
      
    </div>
  );
}

export default error;
