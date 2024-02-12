import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Navbar } from "../../landing page cp";
import styles from "../../style";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import DashboardFooter from "../../components/DashboardFooter";
import Loading from "../../components/LoaderCompoent";

function ForgotPassword() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const [process, setProcess] = useState(false);
  const [resetSuccessful, setResetSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const [passwordChange, setPasswordChange] = useState("");

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup
      .string()
      .matches(passwordChange, "password does not match")
      .required("required"),
  });

  if(process) {
    return <Loading />
  }

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          style={{
            height: "300px",
            position: "fixed",
          }}
        />
        <Navbar />
        <Box mt="3rem">
          <div style={{marginTop: "11rem"}} className="sign-up_heading">
            <h3 className={`${styles.heading2}`}>Reset Password</h3>
            <p className={`${styles.paragraph}`}>Enter your details below</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={(values, { resetForm }) => {
              setProcess(true);
              resetForm({ values: "" });
              setErrorMessage("");
              setResetSuccessful(false);

              const configuration = {
                method: "post",
                url: "https://fx-backend-sever.onrender.com/how/reset-password", // http://localhost:8000/
                data: {
                  email: values.email,
                  password: values.password,
                },
              };

              axios(configuration)
                .then((result) => {
                  const _id = result.data.userId;
                  const secretPass = "Xkhzg478tYUAEQivas65"

                  const data = CryptoJS.AES.encrypt(
                    JSON.stringify(_id), 
                    secretPass
                  ).toString();

                  Cookies.set("Token", data, {path: "/", expires: 3})
                  
                  setProcess(false);
                  setResetSuccessful(true);
                  toast(`Welcome ${result.data.name} `);
                  navigate("/dashboard");
                  window.location.reload(true);
                 
                })
                .catch((error) => {
                  setProcess(false);
                  toast.error(`${error.response.data.message}`)
                  setErrorMessage(error.response.data.message);
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
                    value={values.email}
                    type={"email"}
                    variant="filled"
                    name="email"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />

                  <FilledInput
                    fullWidth
                    placeholder="New Password"
                    variant="filled"
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    {...setPasswordChange(values.password)}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />

                  <FilledInput
                    fullWidth
                    variant="filled"
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    name="confirmPassword"
                    error={
                      !!touched.confirmPassword && !!errors.confirmPassword
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    sx={{
                      gridColumn: "span 4",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />
                </Box>
                <Box display="flex" justifyContent="center" mt="1rem">
                  <Button
                    sx={{
                      width: "200px",
                      height: "60px",
                      borderRadius: "10px",
                      fontSize: "15px",
                      border: "3px solid #171B25",
                      color: "#fff",
                      opacity: "0.6",
                      letterSpacing: "1px",
                      fontWeight: "bold",                   
                    }}
                    type="submit"
                  >
                    {process ? "Please wait..." : "reset password"}
                  </Button>
                </Box>

                {resetSuccessful ? (<p style={{textAlign: "center"}} className="text-green-600">
                      Password has been changed successfully
                    </p>) : ""}

                    <p style={{textAlign: "center"}} className="text-red-600">{errorMessage}</p>
              </form>
            )}
          </Formik>
        </Box>
      </div>
      <DashboardFooter />
    </>
  );
}

export default ForgotPassword;


