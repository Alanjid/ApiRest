import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext,tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"



const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  
    return (
      <Box display="flex" justifyContent="space-between" p={2} sx={{backgroundColor: colors.primary[400],boxShadow:'6px 3px 23px 0px rgba(204,204,204,0.41)'}}>
        <Box display='flex' columnGap='10px'>
        <a className="navbar-brand me-2" href="#" style={{paddingTop: "0.5rem"}}>
        <img
        src="images/LogoMyTEAPony.png"
        height="40"
        alt="MyTEAPony Logo"
        loading="lazy"
        />
      </a>
        </Box>
        
        {/* ICONS */}
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
  
  export default Navbar;