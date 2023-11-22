import { Outlet, Navigate } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";


const PrivateRoutes = () => {
<<<<<<< HEAD
    const {user, isLoading} =   useUsersContext();
    
    if (isLoading) {
        return <div>Loading.....</div> 
    }

=======
    const user = true
>>>>>>> client
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;