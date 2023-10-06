import { Typography, Box, useTheme } from "@mui/material";

import React from 'react';

const DashboardHeading = ({ title, subTitle }) => {
    const theme = useTheme();
  return (
    <Box>
        <Typography 
        variant="h3" 
        color={theme.palette.secondary[100]} 
        fontWeight="bold" 
        sx={{ mb: "5px"}}>
            {title}
        </Typography>
        <Typography 
        variant="h6"
         color={theme.palette.secondary[300]}>
            {subTitle}
        </Typography>
    </Box>
  )
}

export default DashboardHeading;