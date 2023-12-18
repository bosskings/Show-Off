import { useUsersContext } from "./useUsersContext";

const useLogout = () => {
    const {dispatch} = useUsersContext();
    
    // function to log user out 
    const logout = () =>{
        // clear local storage
        localStorage.removeItem('user')

        // update global state
        dispatch({type:"LOGOUT"})
    }

    return {logout}
    
}
 
export default useLogout;