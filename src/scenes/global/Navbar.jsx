import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';

const settings = ['Perfil', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: '#FBFBFB'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Box><Link underline="none" href="/">Pacientes</Link></Box>
              </MenuItem>
              <MenuItem>
                <Link underline="none" href="/actividades">Actividades</Link>
              </MenuItem>
              <MenuItem>
                <Link underline="none" href="/">Imagenes</Link>
              </MenuItem>
            </Menu>
          </Box>
          <a className="navbar-brand me-2" href="/">
            <img
              src="images/logo 1.png"
              height="50"
              alt="MyTEAPony Logo"
              loading="lazy"
              style={{xs: 'flex', md: 'none'}}
              mr= {1}
            />
          </a>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, flexDirection: "row-reverse",display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2,
                    color: '#0D6EFD',
                    display: 'block',  
                    mr: '10px',
                    borderRadius: 0,
                    borderRight: 1,
                    borderColor: 'grey.500'}}
              href='/actividades'
            >
              Actividades
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2,
                    color: '#0D6EFD',
                    display: 'block',  
                    mr: '10px',
                    borderRadius: 0,
                    borderRight: 1,
                    borderLeft: 1,
                    borderColor: 'grey.500'}}
              href='/actividades'
            >
              Pacientes
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2,
                    color: '#0D6EFD',
                    display: 'block',  
                    mr: '10px',
                    borderRadius: 0,
                    borderLeft: 1,
                    borderColor: 'grey.500'}}
              href='/actividades'
            >
              Imagenes
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="images/icon.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;