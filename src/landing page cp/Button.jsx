import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ styles, content }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/login")} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      {content}
    </button>
  )
};

export default Button;