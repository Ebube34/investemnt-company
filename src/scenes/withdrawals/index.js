import React, { useState } from "react";
import DashboardHeading from "../../components/dashboard-heading";
import DashboardFooter from "../../components/DashboardFooter";
import { Button, Box, TextField, useMediaQuery, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";
import { getUserId } from "../../components/getUserId";
import Loading from "../../components/LoaderCompoent";
import { useNavigate } from "react-router-dom";

const walletList = [
  {
    value: "BTC",
    label: "Bitcoin",
  },
  {
    value: "ETH",
    label: "Ethereum",
  },
  {
    value: "BNB",
    label: "Binance coin",
  },
  {
    value: "USDT",
    label: "Tether (USDT) Erc 20",
  },
  {
    value: "LTC",
    label: "Litecoin",
  },
  {
    value: "DOGE",
    label: "Dogecoin",
  },
  {
    value: "SHIBA",
    label: "Shiba Bep 20",
  },
  {
    value: "TRC",
    label: "Tron",
  },
];

const Withdrawals = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [process, setProcess] = useState(false);
  const userId = getUserId();
  const navigate = useNavigate();

  const initialValues = {
    amount: "",
    wallet: "",
    Address: "",
  };

  const checkoutSchema = yup.object().shape({
    amount: yup.number().required("required"),
    wallet: yup.string().required("required"),
    Address: yup.string().required("required"),
  });

  if (process) {
    return <Loading />
  }
  return (
    <>
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={6000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{
            height: "300px",
            position: "fixed",
            padding: "2rem"
          }}
          transition={Bounce}
        />
        <DashboardHeading title="Withdraw" />
        <Box height="50px" />
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={(values, { resetForm }) => {
            setProcess(true);
            resetForm({ values: "" });

            const configuration = {
              method: "post",
              url: "https://fx-backend-sever.onrender.com/withdrawals",
              data: {
                amount: values.amount,
                walletAddress: values.Address,
                network: values.wallet,
                userId,
              },
            };

            axios(configuration)
              .then(() => {
                toast.warning(
                  "Withdrawal Pending, contact customer support for confirmation"
                );
                setProcess(false);
                navigate("/withdrawal-pending");
              })
              .catch((error) => {
                toast.error(`${error.response.data.message}`);
                setProcess(false);
              });
          }}
        >
          {({
            values,
            touched,
            errors,
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
              >
                <TextField
                  fullWidth
                  variant="filled"
                  value={values.amount}
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Amount in USD"
                  error={!!touched.amount && !!errors.amount}
                  helperText={touched.amount && errors.amount}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Your wallet"
                  name="wallet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.wallet}
                  error={!!touched.wallet && !!errors.wallet}
                  helperText={touched.wallet && errors.wallet}
                  sx={{
                    gridColumn: "span 4",
                  }}
                >
                  {walletList.map((options) => (
                    <MenuItem key={options.value} value={options.value}>
                      {options.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  variant="filled"
                  value={values.Address}
                  label="Wallet Address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.Address && !!errors.Address}
                  helperText={touched.Address && errors.Address}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />

                <Box
                  display="flex"
                  justifyContent="center"
                  mt="1rem"
                  sx={{
                    gridColumn: "span 4",
                  }}
                >
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
                    {process ? "Please wait..." : "Withdraw"}
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
        <DashboardFooter />
      </div>
    </>
  );
};

export default Withdrawals;
