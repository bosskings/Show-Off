import { useState } from "react";
import { useUsersContext } from "./useUsersContext";

const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUsersContext();

    const signup = async (name, userType, userEmail, userPassword)=>{
        setIsLoading(true)
        setError(null)

        const result = await fetch('api/users/signup', {
            method:'POST',
            body: JSON.stringify({name, userType, userEmail, userPassword}),
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

    return {signup, isLoading, error}
}

export {useSignup};