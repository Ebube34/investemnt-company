import React, { useState } from "react";
import { Button, Box, Typography, useTheme, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CryptoAddress = ({
  cancelLogo,
  cryptoLogo,
  cryptoAddressText,
  cryptoAddressImg,
  isConfirmClicked,
  priceOfCrypto,
  minimumDepositAmount,
  handleRemoveClick,
  cryptoSentButtonText,
  userId
}) => {
  const theme = useTheme();
  const [isCopied, setIsCopied] = useState(false);
  const [process, setProcess] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");
  const navigate = useNavigate()

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(cryptoAddressText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        window.alert(err)
      });
  };

  const initialValues = {
    amountDeposited: "",
  };

  const checkoutSchema = yup.object().shape({
    amountDeposited: yup.number().required("required"),
  });

  return (
    <>
      <Box
        height="200px"
        width="100%"
        position="absolute"
        top="20%"
        zIndex="3"
        sx={{ visibility: isConfirmClicked ? "visible" : "hidden" }}
      >
        <Box
          position="relative"
          zIndex="4"
          sx={{ backgroundColor: "white" }}
          marginTop="100px"
          border="2px solid white"
        >
          <Box>
            <Box
              sx={{ backgroundColor: theme.palette.secondary[100] }}
              height=""
              padding="0 0 25px 0"
            >
              <Box paddingTop="10px">
                <Box
                  component="img"
                  alt="remove"
                  src={cancelLogo}
                  height="23px"
                  width="23px"
                  borderRadius="50%"
                  marginLeft="87%"
                  sx={{ objectFit: "cover" }}
                  onClick={handleRemoveClick}
                />
              </Box>

              <Box display="flex" justifyContent="center">
                <Box
                  component="img"
                  alt="Bitcoin"
                  src={cryptoLogo}
                  height="50px"
                  width="50px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>

          <Box color="black">
            <Typography padding="10px 0 5px 0">{priceOfCrypto}</Typography>
            <Typography>copy the address or scan the QR code:</Typography>
            <Box color="black">
              <input
                type="text"
                value={cryptoAddressText}
                readOnly
                style={{ width: "50%", border: "0" }}
              />
              <Button onClick={handleCopyClick}>
                <span>{isCopied ? "Copied" : "Copy"}</span>
              </Button>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 0 10px 0"
            >
              <Box
                component="img"
                alt="Tether address"
                src={cryptoAddressImg}
                sx={{ objectFit: "cover" }}
                height="200px"
                width="200px"
              />
            </Box>
          </Box>

          <Box padding="15px" sx={{ backgroundColor: "RGB(33, 41, 92)" }}>
            <Typography paddingBottom="15px">
              Minimum deposit amount is {minimumDepositAmount}
            </Typography>
            <Typography>
              Please note that the exchange rate at the completion of the
              transaction may differ slightly from the above.
            </Typography>
          </Box>

          <Box margin="40px 0 10px 0">
            <Formik
              initialValues={initialValues}
              validationSchema={checkoutSchema}
              onSubmit={(values, {resetForm}) => {
                setProcess(true)
                resetForm({ values: "" }); 

               
                  const configuration = {
                    method: "post",
                url: "https://fx-backend-sever.onrender.com/deposits", 
                data: {
                  amount: values.amountDeposited,
                  network: cryptoSentButtonText,
                  address: cryptoAddressText,
                  userId
                },
                  }
                  
                  axios(configuration).then(() => {
                    toast.warning("Transaction Pending, contact customer support for confirmation", {transition: Bounce});
                    setProcess(false);
                    navigate("/deposit-pending");
                  }).catch((err) => {
                    toast.error(`${err.response.data.message}`, {transition: Bounce});
                    setProcess(false);
                    setErrorMessage(`${err.response.data.message}`)
                  })
            
              }}
            >
              {({
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    variant="filled"
                    sx={{
                      backgroundColor: theme.palette.primary[400],
                      mb: "2rem",
                    }}
                    label="Deposit amount in USD"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      !!touched.amountDeposited && !!errors.amountDeposited
                    }
                    helperText={
                      touched.amountDeposited && errors.amountDeposited
                    }
                    name="amountDeposited"
                    type={"number"}
                    value={values.amountDeposited}
                  />
                  <Button
                    sx={{  
                      height: "60px",
                      borderRadius: "10px",
                      backgroundColor: theme.palette.primary[400],
                      color: process ? "black" : "#fff",
                    }}
                    type="submit"

                  >
                    { process ? (
                    <Loader2 className="animate-spin h-8 w-8 text-zinc-600" />
                  ) : `I have sent ${cryptoSentButtonText} to the address above`}
                  </Button> 
                </form>
              
              )}
             
            </Formik>

                <p style={{ textAlign: "center" }} className="text-red-600">
                  {errorMessage}
                </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CryptoAddress;
