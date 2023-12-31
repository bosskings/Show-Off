import { Outlet, Navigate } from "react-router-dom";
import { useUsersContext } from "../hooks/useUsersContext";
import { isExpired } from "react-jwt"


const PrivateRoutes = () => {
    const {user, isLoading} =   useUsersContext();
    
    if(user){
        //Decode the token
        const expired = isExpired(user.token);
        
        // Check if the token is expired
        if (expired) {
            // send user to login page
            return <Navigate to="/login" />;
        } 
        
        if (isLoading) {
            return <div>Loading.....</div> 
        }
        return <Outlet /> 
        
    }else{
        return <Navigate to="/login" />;
    } 
    
    

};

export default PrivateRoutes;