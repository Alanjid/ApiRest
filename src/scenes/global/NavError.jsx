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



const NavError = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  
    return (
      <Box display="flex" justifyContent="space-between" p={1} sx={{backgroundColor: colors.primary[400],boxShadow:'6px 3px 23px 0px rgba(204,204,204,0.41)'}}>
        <Box display='flex' columnGap='10px'>
        <a className="navbar-brand me-2" href="/">
        <img
        src="images/logo 1.png"
        height="50"
        alt="MyTEAPony Logo"
        loading="lazy"
        />
      </a>
        </Box>
        
        {/* ICONS */}
        <Box display="flex">
        </Box>
      </Box>
    );
  };
  
  export default NavError;