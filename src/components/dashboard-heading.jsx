import { Typography, Box } from "@mui/material";

import React from 'react';

const DashboardHeading = ({ title, subTitle }) => {
    
  return (
    <Box padding="1rem">
        <Typography 
        textAlign="center"
        variant="h2" 
        color="#fff" 
        fontWeight="bold" 
        sx={{ mb: "5px"}}>
            {title}
        </Typography>
        
    </Box>
  )
}

export default DashboardHeading;


