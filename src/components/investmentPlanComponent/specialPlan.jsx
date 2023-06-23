import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";

const SpecialPlan = (props) => {
  const theme = useTheme();
  const [userAmount, setUserAmount] = useState("");
  return (
    <>
      <div>
        <p>{props.specialPlanText}</p>
      </div>

      <div className="containerRegister">
        <form className="register">
          <input
            className="inputElement"
            type="text"
            value={props.specialPlanInputText}
            placeholder={props.specialPlanInputText}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.specialPlanInputText2}
            placeholder={props.specialPlanInputText2}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.specialPlanInputText3}
            placeholder={props.specialPlanInputText3}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={props.specialPlanInputText4}
            placeholder={`Minimum starting capital ${props.specialPlanInputText4}`}
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

export default SpecialPlan;
