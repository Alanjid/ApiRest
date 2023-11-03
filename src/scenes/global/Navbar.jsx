import * as React from 'react';
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material"
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

import Avatar from '@mui/material/Avatar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImageIcon from '@mui/icons-material/Image';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Mi cuenta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src='images/icon.png' sx={{ width: 42, height: 42 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >              
        <MenuItem onClick={handleClose} component={Link} to="/cuenta">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>          
            Mi cuenta         
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}


const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [state, setState] = useState(false);
    const isMobile = useMediaQuery("(max-width:767px)");
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
        <Box display="flex" alignItems='center'>
          {!isMobile && (
          <>
            <a href='/' style={{marginRight: '1.5em'}}><button type="button" className="btn btn-outline-primary me-3">Imagenes</button></a>
            <a href='/' style={{marginRight: '1.5em'}}><button type="button" className="btn btn-outline-primary me-3">PACIENTES</button></a>
            <a href='/actividades' style={{marginRight: '1.5em'}}><button type="button" className="btn btn-outline-primary me-3">ACTIVIDADES</button></a>
            <AccountMenu/>
            {/* <a className="navbar-brand me-2" href="#">
                <img
                src="images/icon.png"
                height="40"
                alt=""
                loading="lazy"
                />
            </a> */}
          </>
          )}
          {isMobile && (
          <>
            
          <Button onClick={()=>setState(true)}>
            <MenuIcon/>
          </Button>
          <Drawer
            anchor={'left'}
            open={state}
            onClose={()=>setState(false)}
          >            
          <List  component='nav'>
            {/* Item */}
            <NavbarItem icon={<PeopleAltIcon />} text='Pacientes' link='/' />
            {/* END Item */}
            {/* Item */}
            <NavbarItem icon={<AssignmentIcon />} text='Actividades' link='/actividades' />
            {/* END Item */}
            {/* Item */}
            <NavbarItem icon={<ImageIcon />} text='Imagenes' link='' />
            {/* END Item */}                    
          </List>
          <Divider sx={{opacity:'unset !important'}}/>                       
          <List>
            {/* Item */}
            <NavbarItem icon={<AccountCircleIcon />} text='Mi Cuenta' link='/cuenta' />
            {/* END Item */}
            {/* Item */}
            <NavbarItem icon={<LogoutIcon />} text='Cerrar Sesión' link='' />
            {/* END Item */}                    
          </List>
          </Drawer>
          </>
          )}
         
       
        </Box>
      </Box>
    );
  };
  
  const NavbarItem = ({icon,text,link}) => {
    return(
      <>    
      <ListItem disablePadding >              
      <ListItemButton component={Link} to={link}>
        <ListItemIcon sx={{minWidth:'40px'}}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
    </>
    
    )
  }


  export default Navbar;

