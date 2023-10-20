import { Box, Card, CardContent, Typography } from "@mui/material";
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
        <Link to="/paciente/actividades-realizadas" style={{ textDecoration: "none" }}>
          <Card sx={{ ":hover": { cursor: "pointer" }, marginBottom: 0 }}>
            <CardContent sx={{ paddingBottom: "16px !important" }}>
              <Typography variant="h4">Actividades Realizadas</Typography>
            </CardContent>
          </Card>
        </Link>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chart />
        </Box>
      </Box>
    </Base>
  );
};

export default Avances;
