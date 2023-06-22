import React from 'react';
import { Box,  Typography,   } from "@mui/material";

const Foregin = () => {
  return (
   <>
        <div style={{ marginTop: "30px" }}>Foregin</div>
      <div>bunch of nothing under Foregin</div>
      <Box>
      <Box>
          <Typography style={{ paddingTop: "20px"}}>Select a preferred Foregin exchange plan </Typography>
            <select style={{ width: "100%", textAlign: "center"}} name="invesyment plan" id="investment plan">
          <optgroup >
            <option value="plan 1">Plan 1 </option>
            <option value="plan 2">Plan 2</option>
            <option value="plan 3">Plan 3</option>
          </optgroup>
          
        </select>
        </Box>
      </Box>
   </>
  )
}

export default Foregin;