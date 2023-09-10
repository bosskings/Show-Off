import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

const PrivateRoutes = () => {
    const user = false
    return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;