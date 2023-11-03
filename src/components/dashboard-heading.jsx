import { Typography, Box, useTheme } from "@mui/material";

import React from 'react';

const DashboardHeading = ({ title, subTitle }) => {
    const theme = useTheme();
  return (
    <Box>
        <Typography 
        variant="h2" 
        color={theme.palette.secondary[100]} 
        fontWeight="bold" 
        fontFamily="Alegreya, serif"
        sx={{ mb: "5px"}}>
            {title}
        </Typography>
        <Typography 
        variant="h6"
        fontFamily = {theme.typography.fontFamily}
         color={theme.palette.secondary[300]}>
            {subTitle}
        </Typography>
    </Box>
  )
}

export default DashboardHeading;