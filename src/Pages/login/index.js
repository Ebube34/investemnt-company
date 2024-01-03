import React, { useState } from "react";
import axios from "axios";
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
import "react-toastify/dist/ReactToastify.minimal.css";
import FilledInput from "@mui/material/FilledInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CryptoJS from "crypto-js";
import DashboardFooter from "../../components/DashboardFooter";
import Cookies from "js-cookie";
import Loading from "../../components/LoaderCompoent";


function Login() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [process, setProcess] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });

if (process) {
  return <Loading />
}

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
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
          transition={Bounce}
          style={{
            height: "150px",
            position: "fixed",
          }}
        />

        <Navbar />

        <Box ml="1rem" mr="1rem" mt="12rem">
          <div className="sign-up_heading">
            <h3 className={`${styles.heading2}`}>Login your account</h3>
            <p className={`${styles.paragraph}`}>Enter your details below</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={(values, { resetForm }) => {
              setProcess(true);
              setLogedIn(false);
              resetForm({ values: "" });
              setErrorMessage("");

              const configuration = {
                method: "post",
                url: "https://fx-backend-sever.onrender.com/login", //  http://localhost:8000/
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

                  Cookies.set("Token", data, { path: "/", expires: 3 });

                  setLogedIn(true);
                  setProcess(false);
                  toast(`Welcome ${result.data.name}`);
                  navigate("/dashboard");
                  window.location.reload(true);
                })
                .catch((error) => {
                  setProcess(false);
                  setLogedIn(false);
                  setErrorMessage(error.response.data.message);
                  toast.error(`${error.response.data.message}`);
                });
            }}
          >
            {({
              values,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
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
                    placeholder="Password"
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
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      gridColumn: "span 4",
                    }}
                  />
                  <Box
                    sx={{
                      gridColumn: "span 4",
                      textAlign: "center",
                      gap: "0px",
                    }}
                  >
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/reset-password")}
                      className={`${styles.paragraph}`}
                    >
                      Forgot Password?
                    </p>{" "}
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" mt="1rem">
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
                    {process ? "Please wait..." : "Sign in"}
                  </Button>
                </Box>

                {logedIn ? (
                  <p style={{ textAlign: "center" }} className="text-green-600">
                    registration successful. Check your email for verification
                  </p>
                ) : (
                  ""
                )}

                <p style={{ textAlign: "center" }} className="text-red-600">
                  {errorMessage}
                </p>
              </form>
            )}
          </Formik>
        </Box>
      </div>
      <DashboardFooter />
    </>
  );
}

export default Login;
