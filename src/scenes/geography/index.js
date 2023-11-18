import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import DashboardHeading from "../../components/dashboard-heading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Geography = () => {
  const theme = useTheme();
  const token = Cookies.get("Token");
  const navigate = useNavigate();
  
  if (token) {
    return (
      <Box m="20px">
        <DashboardHeading title="Geography" subTitle="Our Investors arond the world" />
          <Box height="40px"></Box>
        <Box
          height="75vh"
          border={`1px solid ${theme.palette.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    );
  } else {
    navigate("/login");
  }
};

export default Geography;
