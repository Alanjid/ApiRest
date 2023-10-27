/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import tea from '../../images/logo 1.png'
import avatar1 from '../../assets/avatar1.jpg'


const handleSelectedItem = (title, setSelected) =>{
  setSelected(title)
  localStorage.setItem('item',title)
}

const Item = ({ title, to, icon, selected, setSelected }) => {
  console.log(selected)
    selected = localStorage.getItem('item')
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        
        style={{
          color: colors.grey[100],
        }}
        onClick={() => handleSelectedItem(title, setSelected)}
        icon={icon}
      >
        {console.log(selected === title)}
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem("sidebar_collapsed") === "true");
  const [selected, setSelected] = useState("");
  //console.log(typeof isCollapsed)
  //const location = useLocation()
  //console.log('location', location)

  useEffect(() => {
    const collapsedValue = localStorage.getItem("sidebar_collapsed");
    setIsCollapsed(collapsedValue === "true");
  }, [])

  function handleSetIsCollapsed(value) {
    setIsCollapsed(value);
    localStorage.setItem("sidebar_collapsed", value ? "true" : "false");
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          boxShadow:'6px 3px 23px 0px rgba(204,204,204,0.045)'
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => handleSetIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
        
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
            {/*     <Typography variant="h3" color={colors.grey[100]}>
                  sd
                </Typography> */}
                <Box width='100%' justifyContent='start' alignItems='center' display='flex'>
                  <img style={{width:100}} src={tea} alt="" />
                </Box>
                <IconButton onClick={() => handleSetIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Categorias
                </Typography>
              </Box>
            </Box>
          )}    
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Alimentos"
              to="/actividades"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bebidas"
              to="/actividades/bebidas"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
{/* 
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography> */}
            <Item
              title="Acciones"
              to="/actividades/acciones"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Partes del cuerpo"
              to="/actividades/cuerpo"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />          

{/*             <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography> */}
   {/*          <Item
              title="Avances"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />            
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography> */}
            <Item
              title="Prendas de vestir"
              to="/actividades/prendas"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;