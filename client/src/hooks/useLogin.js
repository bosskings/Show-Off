import { useState } from "react";
import { useUsersContext } from "./useUsersContext";

const useLogin = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUsersContext();

    const login = async (userEmail, userPassword)=>{
        setIsLoading(true)
        setError(null)

        const result = await fetch('api/users/signin', {
            method:'POST',
            body: JSON.stringify({userEmail, userPassword}),
            headers: {'Content-Type':'application/json'}
        })

        const json = await result.json();

        if (!result.ok) {
            setIsLoading(false)
            setError(json.error);
        }else{
            // save user to local storeage
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(json))
            
            // update user contetext
            dispatch({type:"LOGIN", payload:json})        
        }


    }

    return {login, isLoading, error}
}

export {useLogin}