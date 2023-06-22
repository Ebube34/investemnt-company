import React from "react";
import { Box,  Typography, } from "@mui/material";

const Trading = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>Trading</div>
      <div>bunch of nothing under trading</div>

      <Box>
      <Box>
          <Typography style={{ paddingTop: "20px"}}>Select a preferred Trading plan </Typography>
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

export default Trading;
