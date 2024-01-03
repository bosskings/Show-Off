import { useUsersContext } from "./useUsersContext";

const useLogout = () => {
    const { dispatch } = useUsersContext();
    
    // Function to log the user out 
    const logout = () => {
        // Clear local storage
        localStorage.removeItem('user');
        
        // Update global state
        dispatch({ type: "LOGOUT" });
        
    };
    
    
    return {logout};
        
};

export default useLogout;