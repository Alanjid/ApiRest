import { Box, IconButton } from "@mui/material";
import './Nav.css'

const Topbar = () => {

  return (
    <Box className="navbar" p={1}>
      {/* Separador*/}
      <Box>
      </Box>

      {/* Menu */}
      <Box display="flex">
        <a href='./' style={{marginRight: '1.5em'}}><button type="button" className="btn btn-outline-primary me-3">PACIENTES</button></a>
        <a href='' style={{marginRight: '1.5em'}}><button type="button" className="btn btn-outline-primary me-3">ACTIVIDADES</button></a>
        <a className="navbar-brand me-2" href="#" style={{paddingBottom: "1rem"}}>
            <img
            src="images/icon.png"
            height="40"
            alt=""
            loading="lazy"
            />
        </a>
      </Box>
    </Box>
  );
};

export default Topbar;