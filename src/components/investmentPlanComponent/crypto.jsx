import { Box,  Typography,  } from "@mui/material";
import React from "react";

const Crypto = () => {
  
  return (
    <>
      <div style={{ marginTop: "30px" }}>crypto</div>
      <div>bunch of nothing under crypto</div>
      <Box>
      <Box>
          <Typography style={{ paddingTop: "20px"}}>Select a preferred Cryptocurrency plan </Typography>
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
  );
};

export default Crypto;
