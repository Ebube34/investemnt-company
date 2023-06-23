import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";


const BasicPlan = (props) => {
  const [userAmount, setUserAmount] = useState("");
  const theme = useTheme();
  return (
    <>
      <div>
        <p>{props.basicPlanText}</p>
      </div>

      <div className="containerRegister">
        <form className="register">
          <input
            className="inputElement"
            type="text"
            value={props.basicPlanInputText}
            placeholder={props.basicPlanInputText}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.basicPlanInputText2}
            placeholder={props.basicPlanInputText2}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.basicPlanInputText3}
            placeholder={props.basicPlanInputText3}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.basicPlanInputText4}
            placeholder={props.basicPlanInputText4}
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
            style={{
              backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none",
              color: theme.palette.primary[500],
            }}
            className={"test-button"}
            type="submit"
            name="button"
            // onClick={(e) => handleSubmit(e)}
          >
            <Typography style={{ color: theme.palette.primary[500] }}>
              BUY
            </Typography>
          </button>
        </form>
      </div>
    </>
  );
};

export default BasicPlan;
