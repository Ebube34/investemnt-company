import { Outlet, Navigate } from "react-router-dom";
import { userAuth } from "./userAuth";


function PrivateRoutes() {
    const token = userAuth();
    return token ? <Outlet /> : <Navigate to="/login" /> 
}

export default PrivateRoutes;