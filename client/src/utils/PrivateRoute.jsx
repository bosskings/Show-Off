import { Outlet, Navigate } from "react-router-dom";
// import { useContext } from "react";

const PrivateRoutes = () => {
    const user = true
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;