import { Box, IconButton } from "@mui/material";

const Nav = () => {

  return (
    <Box display="flex" justifyContent="space-between" p={1} sx={{borderBottom: '4px solid #F0F3FB'}}>
      {/* Separador*/}
      <Box>
      <a className="navbar-brand me-2" href="#" style={{paddingTop: "0.5rem"}}>
        <img
        src="images/LogoMyTEAPony.png"
        height="40"
        alt="MyTEAPony Logo"
        loading="lazy"
        />
      </a>
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

export default Nav;