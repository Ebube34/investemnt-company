import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboardmaincomponent from "../../components/dashboardmaincomponent";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { useGetUserQuery } from "../../state/api";






const DashboardMain =  () => {
  const navigate = useNavigate();
  const token = Cookies.get("Token");
  const secretPass = "Xkhzg478tYUAEQivas65";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
  const userId =  JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));
  const { data } = useGetUserQuery(userId);

  if (token) {
    return (
     <Dashboardmaincomponent user={data || {}} />
    );
  } else {
    return navigate("/login");
  }
};

export default DashboardMain;
