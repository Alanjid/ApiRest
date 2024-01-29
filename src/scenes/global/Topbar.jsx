import * as React from 'react';
import { Box, useMediaQuery, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext,tokens } from "../../theme"
import { Link } from "react-router-dom"

import Avatar from '@mui/material/Avatar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Logout from '@mui/icons-material/Logout';

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

const Topbar = ({toggled,setToggled}) => {
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const isMobile = useMediaQuery("(max-width:767px)");
    const sidebarMobile = useMediaQuery("(max-width:576px)");
  
    return (
      <Box display="flex" alignItems='center' justifyContent={isMobile ? "space-between" :"end"} p='10px' sx={{backgroundColor: colors.primary[400],boxShadow:'6px 3px 23px 0px rgba(204,204,204,0.41)'}}>        
        
        {/* ICONS */}
    
         {isMobile && (
          <IconButton onClick={() => setToggled(!toggled)}>
            <MenuOutlinedIcon />
          </IconButton>
         )}
          <AccountMenu />
        
      </Box>
    );
  };
  
  export default Topbar;
  