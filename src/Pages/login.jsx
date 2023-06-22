import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const cookies = new Cookies();
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [process, setProcess] = useState(false);
  const [newError, setNewError] = useState(false);
  const [errorContent, setErrorContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcess(true);
    setErrorContent("");
    setNewError(false);

    const configurations = {
      method: "post",
      url: "https://fx-backend-sever.onrender.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configurations)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        localStorage.setItem("userDetails", JSON.stringify(result.data));
        setEmail("");
        setPassword("");
        setProcess(false);
        navigate("/dashboard");
        window.location.reload(true);
      })
      .catch((error) => {
        
        setProcess(false);
        setNewError(true);
        setErrorContent(error.message);
        setPassword("");
        
      });
  };

  return (
    <>
      <div class="containerRegister">
        <div className="textBox">
          <p className="signpText">Login your account</p>
          <p className="signuptext2">
            Dont have an account? <Link to="/register">Signup here</Link>
          </p>
        </div>

        <form class="register" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="inputElement"
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputElement"
            required
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={process ? "test-button button--loading" : "test-button"}
            type="submit"
            name="button"
            onClick={(e) => handleSubmit(e)}
          >
            <span class="button_text">Sign in</span>
          </button>
        </form>
        <p>
          <Link to="/forgot-password">Forgot pasword?</Link>
        </p>
        {login ? (
          <p className="text-success">
            You Are Logged in Successfully! please wait
          </p>
        ) : (
          ""
        )}

        {newError ? (
          <p className="text-danger">invalid attempt to login try again</p>
        ) : ""
        } 
        {<p className="text-danger">{errorContent}</p>}
      </div>
      <Footer />
    </>
  );
}

export default Login;
