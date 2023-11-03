import React, { useState, useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const BasicPlan = ({
  investmentPlanText,
  investmentType,
  investmentPlan,
  percentageProfitText,
  minimumAmountText,
  percentageProfitValue,
  userData,
  minmumAmountValue,
  userId,
}) => {
  const [capitalAmount, setCapitalAmount] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [errorContent, setErrorContent] = useState(``);
  const [process, setProcess] = useState(false);
  const [walletBalance, setWalletBalance] = useState();
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setWalletBalance(userData.walletBalance);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcess(true);
    setSuccessful(false);
    setErrorContent(``);

    if (capitalAmount < minmumAmountValue) {
      setProcess(false);
      setErrorContent(
        `Your starting capital should be equal or more than the minimum amount`
      );
      setCapitalAmount("");
    } else if (capitalAmount > walletBalance) {
      setProcess(false);
      setCapitalAmount("");
      setErrorContent(
        `You currently do not have sufficient balance to purchase this contract.
          Fund your account`
      );
    } else {
      const configuration = {
        method: "post",
        url: "http://localhost:8000/contract/contract-purchase",
        data: {
          investmentType,
          investmentPlan,
          capitalAmount,
          percentageProfitValue,
          userId,
        },
      };
  
      axios(configuration)
        .then((result) => {
          setCapitalAmount("");
          setProcess(false);
          setSuccessful(true);
          setErrorContent(``);
        })
        .catch((err) => {
          setCapitalAmount("");
          setProcess(false);
          setErrorContent(err.response.data);
        });
    }
   
  };

  return (
    <>
      <div style={{ fontFamily: "Montserrat, sans-serif", opacity: "0.7", fontSize: "1rem" }}>
        <p style={{ padding: "20px 0 20px 10px",  }}>{investmentPlanText}</p>
        <ul>
          <li style={{ padding: "10px" }}>
            Earnings will be credited to your account at the end of each month.
          </li>
          <li style={{ padding: "10px" }}>
            Starting capital invested to be credited back at the end of each
            contract.
          </li>
          <li style={{ padding: "10px" }}>
            Contracts can be terminated at any point after purchase.
          </li>
          <li style={{ padding: "10px 10px 0 10px" }}>
            Contracts are automatically terminated one year after purchase.
          </li>
        </ul>
      </div>

      <div style={{fontFamily: theme.typography.fontFamily, opacity: "0.8"}} className="containerRegister">
        <form className="register">
          <input
            className="inputElement"
            type="text"
            value={investmentType}
            placeholder={investmentType}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={investmentPlan}
            placeholder={investmentPlan}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={percentageProfitText}
            placeholder={percentageProfitText}
            disabled
          />
          <input
            className="inputElement"
            type="text"
            value={minimumAmountText}
            placeholder={minimumAmountText}
            disabled
          />

          <label>
            Wallet balance:{" "}
            <span className="number-font">${Number(walletBalance).toFixed(2)}</span>
          </label>
          <input
            placeholder="Input your starting capital amount(USD)"
            className="inputElement"
            type="number"
            value={capitalAmount}
            onChange={(e) => setCapitalAmount(e.target.value)}
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
            onClick={(e) => handleSubmit(e)}
          >
            <Typography fontFamily="Noto Serif, serif" style={{ color: theme.palette.primary[500], fontWeight: "600", fontSize: "1.2rem" }}>
              {process ? "Please wait..." : "BUY"}
            </Typography>
          </button>
        </form>

        {successful ? (
          <p style={{ padding: "20px", fontSize: "1rem", fontFamily: "Montserrat, sans-serif"}} className="text-success">
            Congratulations! you have successfully purchased your contract.{" "}
            <span>
              <Link to="/active-contracts">View contract</Link>
            </span>
          </p>
        ) : (
          ""
        )}

        {<p style={{ padding: "20px", fontSize: "1rem", fontFamily: "Montserrat, sans-serif"}} className="text-danger">{errorContent}</p>}
      </div>
    </>
  );
};

export default BasicPlan;
