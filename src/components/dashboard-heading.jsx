import { Typography, Box, useTheme } from "@mui/material";

import React from 'react';

const DashboardHeading = ({ title, subTitle }) => {
    const theme = useTheme();
  return (
    <Box>
        <Typography 
        variant="h2" 
        color="#fff" 
        fontWeight="bold" 
        sx={{ mb: "5px"}}>
            {title}
        </Typography>
        <Typography 
        variant="h5"
        fontFamily = {theme.typography.fontFamily}
         color={theme.palette.secondary[100]} sx={{ opacity: "0.5"}}>
            {subTitle}
        </Typography>
    </Box>
  )
}

export default DashboardHeading;


