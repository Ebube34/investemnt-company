import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import DashboardHeading from "../../components/dashboard-heading";
import DashboardFooter from "../../components/DashboardFooter";




const Geography = () => {
  const theme = useTheme();
  
    return (
      <>
        <Box m="20px">
        <DashboardHeading title="Geography" subTitle="Users around the world" />
          <Box height="40px"></Box>
        <Box
          height="75vh"
          border={`1px solid ${theme.palette.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
      <DashboardFooter />
      </>
    );
 
};

export default Geography;
