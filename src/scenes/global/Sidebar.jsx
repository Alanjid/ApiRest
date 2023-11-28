import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ImageIcon from '@mui/icons-material/Image';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import tea from '../../images/logo 1.png'
import avatar1 from '../../assets/avatar1.jpg'
import { useSelector } from "react-redux"


const handleSelectedItem = (title, setSelected) =>{
  setSelected(title)
  localStorage.setItem('item',title)
}

const Item = ({ title, to, icon, selected, setSelected }) => {  
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
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const Sidebar = ({toggled,setToggled}) => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(localStorage.getItem("sidebar_collapsed") === "true");
  const [selected, setSelected] = useState("");
  const isMobile = useMediaQuery("(max-width:768px)");
  const [paciente,setPaciente] = useState('')
  const sidebarMobile = useMediaQuery("(max-width:768px)");

  
  //console.log(typeof isCollapsed)
  var {pathname} = useLocation()
  console.log('location', pathname)

  pathname = pathname.split('/')
  console.log(pathname[1])
  const nombre_paciente =useSelector(state=>state.paciente.nombre)
  console.log(nombre_paciente)
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
 
      <ProSidebar width='224px' collapsed={isCollapsed} toggled={toggled} breakPoint="md">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              !isMobile ? handleSetIsCollapsed(!isCollapsed) : setToggled(!toggled)
              
            }}
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
                <Box width='100%' justifyContent='start' alignItems='center' display='flex'>
                  <img style={{width:100}} src={tea} alt="MyTea" />
                </Box>
                
                   <IconButton onClick={() => isMobile ? setToggled(!toggled) : handleSetIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                    </IconButton>
                
                  
              </Box>
            )}
          </MenuItem>
        
          <Box>
          {/* movil */}
          {isMobile && (
            <>
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }} 
            >
              Paginas
            </Typography>
          <Item
              title="Pacientes"
              to="/"
              icon={<PeopleAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Actividades"
              to="/actividades"
              icon={<EditNoteOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Imágenes"
              to="/actividades"
              icon={<ImageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Paciente
            </Typography>
            </>
            )}
          {/* END movil */}

            {/* Items detalles paciente */}
            {pathname[1]=='actividades' ? (<>
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
            <Item
              title="Prendas de vestir"
              to="/actividades/prendas"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </>
            ) :
            (
              <>
               <Item
              title={nombre_paciente}
              to="/paciente"
              icon={<PersonOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Observaciones"
              to="/paciente/observaciones"
              icon={<EditNoteOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Actividades"
              to="/paciente/actividades"
              icon={<FormatListBulletedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tareas en casa"
              to="/paciente/tareas"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />          
            <Item
              title="Avances"
              to="/paciente/avances"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              </>
            )
            }
          </Box>
        </Menu>
      </ProSidebar>
     
    </Box>
    
  );
};

export default Sidebar;