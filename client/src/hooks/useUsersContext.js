import { AuthContext } from "../contexts/UsersContext";
import { useContext } from "react";

const useUsersContext = () =>{
    const context = useContext(AuthContext);

    if (!context) {
        throw Error ('useUserContext must be inside a useUserContext provider!')
    }
    return context;
}

export { useUsersContext };