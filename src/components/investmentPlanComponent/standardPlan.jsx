import React, { useState } from "react";
import {  Typography, useTheme } from "@mui/material";


const StandardPlan = (props) => {
  const [userAmount, setUserAmount] = useState("");
  const theme = useTheme();

  const percentage = props.percentageValue;
  const minimumAmountValue = props.minmumAmountValue;
  return (
    <>
        <div>
        <p style={{ padding: "10px"}}>{props.standardPlanText}</p>
        <ul >
          <li style={{ padding: "7px"}}>Profits will be credited to your account at the end of each month.</li>
          <li style={{ padding: "7px"}}>Starting capital invested will be returned at the end of each contract.</li>
          <li style={{ padding: "7px"}}>Contracts can be terminated at any point after purchase.</li>
          <li style={{ padding: "7px 7px 0 7px"}}>Contracts are automatically terminated one year after purchase.</li>
        </ul>
      </div>

      <div className="containerRegister">
        <form className="register">
          <input
            className="inputElement"
            type="text"
            value={props.standardPlanInputText}
            placeholder={props.standardPlanInputText}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.standardPlanInputText2}
            placeholder={props.standardPlanInputText2}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.standardPlanInputText3}
            placeholder={props.standardPlanInputText3}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.standardPlanInputText4}
            placeholder={`Minimum starting capital ${props.standardPlanInputText4}`}
            disabled
          />

          <label>Capital Amount(USD)</label>
          <input
          placeholder="Input your starting capital amount(USD)"
            className="inputElement"
            type="number"
            value={userAmount}
            onChange={(e) => setUserAmount(e.target.value)}
          />
         <button
            //   process ? "test-button button--loading" :
            style={{  backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none", color: theme.palette.primary[500] }}
            className={"test-button"}
            type="submit"
            name="button"
            // onClick={(e) => handleSubmit(e)}
          >
            <Typography style={{ color: theme.palette.primary[500] }}>BUY</Typography>
          </button>
          
        </form>
      </div>
    </>
  );
};

export default StandardPlan;
