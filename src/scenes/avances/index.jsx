import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Base from "../../components/base/Base";
import Header from "../../components/header/Header";
import Chart from "../../components/dataset/chart";
import { Link } from "react-router-dom";

const Avances = () => {
  return (
    <Base>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Avances" subtitle="" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link to="/paciente/actividades-realizadas" style={{ textDecoration: "none", backgroundColor: '#F4F6F9'}}>
            <Card sx={{ ":hover": { cursor: "pointer" }, marginBottom: 0 , borderRadius: 6}}>
              <CardContent sx={{ paddingBottom: "16px !important", backgroundColor: "#4494E5", borderRadius: 6 }}>
                <Typography variant="h4" style={{color: 'white'}}>Ver Actividades Realizadas</Typography>
              </CardContent>
            </Card>
          </Link>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chart />
        </Box>
      </Box>
    </Base>
  );
};

export default Avances;
