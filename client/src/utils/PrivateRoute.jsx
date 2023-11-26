import { Outlet, Navigate } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";


const PrivateRoutes = () => {
    const {user, isLoading} =   useUsersContext();
    
    if (isLoading) {
        return <div>Loading.....</div> 
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;