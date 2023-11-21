import React, { useState } from "react";
import { Box, useMediaQuery, Button } from "@mui/material";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";
import TextField from "@mui/material/TextField";
import styles from "../../style";
import DashboardFooter from "../DashboardFooter";
import { useEffect } from "react";
import ReactLoading from "react-loading"; 

const BasicPlan = ({
  investmentPlanText,
  investmentType,
  investmentPlan,
  percentageProfitText,
  minimumAmountText,
  percentageProfitValue,
  minmumAmountValue,
  walletBalanceData,
  userId,
  rating,
}) => {
  const [successful, setSuccessful] = useState(false);
  const [errorContent, setErrorContent] = useState(``);
  const [process, setProcess] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (walletBalanceData === null || walletBalanceData === undefined) {
      setLoading(true);
    } else if (Object.keys(walletBalanceData).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [walletBalanceData]);

  const initialValues = {
    investmentType: investmentType,
    investmentPlan: investmentPlan,
    percentageProfitText: percentageProfitText,
    minimumAmountText: minimumAmountText,
    capitalAmount: "",
  };

  const checkoutSchema = yup.object().shape({
    capitalAmount: yup.number().required("required"),
  });
  return (
    <>
      <div style={{ opacity: "0.6", padding: "2rem 0" }}>
        <p style={{ padding: "20px 0 20px 10px" }}>{investmentPlanText}</p>
        <ul>
          <li style={{ padding: "10px" }}>
            Earnings will be credited at the end of month.
          </li>
          <li style={{ padding: "10px" }}>
            Starting capital invested credited at the end of each contract.
          </li>
          <li style={{ padding: "10px" }}>
            Contracts can be terminated at any point after purchase.
          </li>
          <li style={{ padding: "10px 10px 0 10px" }}>
            Contracts are automatically terminated a year after purchase and
            will have to be renewed.
          </li>
        </ul>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={(values, { resetForm }) => {
          setProcess(true);
          setSuccessful(false);
          setErrorContent(``);
          resetForm({ values: "" });

          if (values.capitalAmount < minmumAmountValue) {
            setProcess(false);
            values.capitalAmount = "";
            setErrorContent(
              `Capital should be equal to or more than the minimum amount`
            );
            toast.error(
              "Capital should be equal to or more than the minimum amount"
            );
          } else if (Object.keys(walletBalanceData).length === 0) {
            setProcess(false);
            values.capitalAmount = "";
            setErrorContent(
              "Can't access account balance, check your internet conectivity and try again"
            );
            toast.error(
              "Can't access account balance, check your internet conectivity and try again"
            );
          } else if (
            walletBalanceData === null ||
            walletBalanceData === undefined
          ) {
            setProcess(false);
            values.capitalAmount = "";
            setErrorContent(
              "Can't access account balance, check your internet conectivity and try again"
            );
            toast.error(
              "Can't access account balance, check your internet conectivity and try again"
            );
          } else if (values.capitalAmount > walletBalanceData.walletBalance) {
            setProcess(false);
            values.capitalAmount = "";
            setErrorContent(
              `You currently do not have sufficient balance to purchase this contract.
          `
            );
            toast.error(
              "You currently do not have sufficient balance to purchase this contract"
            );
          } else {
            const configuration = {
              method: "post",
              url: "https://fx-backend-sever.onrender.com/contract/contract-purchase",
              data: {
                investmentType: values.investmentType,
                investmentPlan: values.investmentPlan,
                capitalAmount: values.capitalAmount,
                percentageProfitValue,
                userId,
                rating,
              },
            };

            axios(configuration)
              .then(() => {
                values.capitalAmount = "";
                setProcess(false);
                setSuccessful(true);
                toast(
                  `Congrats purchase completed ${(
                    <Link to="/active-contracts">View contracts</Link>
                  )}`
                );
              })
              .catch((error) => {
                values.capitalAmount = "";
                setProcess(false);
                setErrorContent(error.response.data.message);
                toast.error(`${error.response.data.message}`, {
                  transition: Bounce,
                });
              });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="2rem"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
              marginTop="2rem"
            >
              <TextField
                fullWidth
                value={values.investmentType}
                type={"text"}
                variant="filled"
                sx={{
                  gridColumn: "span 2",
                }}
                disabled
                placeholder={values.investmentType}
              />
              <TextField
                fullWidth
                type={"text"}
                value={values.investmentPlan}
                variant="filled"
                sx={{
                  gridColumn: "span 2",
                }}
                disabled
                placeholder={values.investmentPlan}
              />
              <TextField
                fullWidth
                type={"text"}
                value={values.percentageProfitText}
                variant="filled"
                sx={{
                  gridColumn: "span 4",
                }}
                disabled
                placeholder={values.percentageProfitText}
              />
              <TextField
                fullWidth
                type={"text"}
                value={values.minimumAmountText}
                variant="filled"
                sx={{
                  gridColumn: "span 4",
                }}
                disabled
                placeholder={values.minimumAmountText}
              />
              <Box
                sx={{ gridColumn: "span 4", textAlign: "center", gap: "0rem" }}
              >
                <p className={`${styles.paragraph}`}>
                  wallet balance{" "}
                  {loading ? (
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                      className="spinner-div"
                    >
                      <ReactLoading
                        type={"spinningBubbles"}
                        color={"#1CEEEB"}
                        height={20}
                        width={20}
                      />
                    </div>
                  ) : (
                    <p>${Number(walletBalanceData.walletBalance).toFixed(2)}</p>
                  )}
                </p>
              </Box>
              <TextField
                fullWidth
                value={values.capitalAmount}
                name="capitalAmount"
                label="Starting capital"
                type={"number"}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                sx={{
                  gridColumn: "span 4",
                }}
                error={!!touched.capitalAmount && errors.capitalAmount}
                helperText={touched.capitalAmount && errors.capitalAmount}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="2rem">
              <Button
                sx={{
                  width: "170px",
                  height: "60px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  border: "3px solid #171B25",
                  color: "#fff",
                  opacity: "0.6",
                  letterSpacing: "1.5px",
                  fontWeight: "bold",
                }}
                type="submit"
              >
                {process ? "Please wait..." : "Purchase"}
              </Button>
            </Box>
            {successful ? (
              <p style={{ textAlign: "center" }} className="text-green-600">
                Contract purchased and registered successfully{" "}
                <span>
                  <Link to="/active-contracts">View contract</Link>
                </span>
              </p>
            ) : (
              ""
            )}

            <p style={{ textAlign: "center" }} className="text-red-600">
              {errorContent}
            </p>
          </form>
        )}
      </Formik>
      <DashboardFooter />
      <Outlet />
    </>
  );
};

export default BasicPlan;
