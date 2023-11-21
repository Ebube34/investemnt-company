import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"; 
import MenuItem from "@mui/material/MenuItem";
import FilledInput from "@mui/material/FilledInput";
import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Navbar, Country } from "../landing page cp";
import styles from "../style";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardFooter from "../components/DashboardFooter";

function Register() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [process, setProcess] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const [passwordChange, setPasswordChange] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "", 
    country: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contactNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    password: yup
      .string()
      .required("required"),
    confirmPassword: yup
      .string()
      .matches(passwordChange, "Password does not match")
      .required("required"),
  });
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{
            height: "150px",
            position: "fixed",
          }}
        />
        <Navbar />
        <Box mt="3rem">
          <div className="sign-up_heading">
            <h3 className={`${styles.heading2}`}>Sign up to Quivas</h3>
            <p className={`${styles.paragraph}`}>Enter your details below</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={(values, { resetForm }) => {
              setProcess(true);
              setRegistered(false);
              setErrorMessage("");
              resetForm({ values: "" });

              const configuration = {
                method: "post",
                url: "https://fx-backend-sever.onrender.com/register", //  http://localhost:8000/
                data: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  phoneNumber: values.contactNumber,
                  password: values.password,
                  country: values.country,
                },
              };

              axios(configuration)
                .then(() => {
                  setProcess(false);
                  toast(
                    "Almost there! Check your email for confirmation.", {transition: Bounce}
                  );
                  setRegistered(true);
                })
                .catch((error) => {
                  setProcess(false);
                  setRegistered(false);
                  toast.error(
                    ` ${error.response.data.message}`, {transition: Bounce}
                  );
                  setErrorMessage(error.response.data.message);
                  resetForm({ values: "" });
                });
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
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    label="First Name"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      gridColumn: "span 2",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Last Name"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      gridColumn: "span 2",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Email Address"
                    type="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      gridColumn: "span 4",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    label="Contact Number"
                    type="number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contactNumber}
                    name="contactNumber"
                    error={!!touched.contactNumber && !!errors.contactNumber}
                    helperText={touched.contactNumber && errors.contactNumber}
                    sx={{
                      gridColumn: "span 4",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />

                  <TextField
                    id="outlined-select-currency"
                    fullWidth
                    label="Country..."
                    select
                    variant="filled"
                    name="country"
                    defaultValue=""
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  >
                    {Country.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <FilledInput
                    fullWidth
                    placeholder="Password"
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
                      fontFamily: "'Manrope', sans-serif",
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
                <Box display="flex" justifyContent="center" mt="3rem">
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
                    {process ? "Please wait..." : "Sign Up"}
                  </Button>
                  
                </Box>
                {registered ? (
                    <p style={{textAlign: "center"}} className="text-green-600">
                      registration successful. Check your email for verification
                    </p>
                  ) : (
                    ""
                  )}
                  <p style={{textAlign: "center"}} className="text-red-600">{errorMessage}</p>
              </form>
            )}
          </Formik>
        </Box>
        <DashboardFooter />
      </div>
    </>
  );
}

// gjqunjibtkhtsgyc

export default Register;
