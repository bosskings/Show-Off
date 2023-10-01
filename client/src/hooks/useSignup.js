import { useState } from "react";
import { useUsersContext } from "./useUsersContext";

const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUsersContext();

    const signup = async (name, user_type, user_email, user_password)=>{
        setIsLoading(true)
        setError(null)

        const result = await fetch('/api/user/signup', {
            method:'POST',
            headers: {'Content-type':'Application/json'},
            body: JSON.stringify({name, user_type, user_email, user_password})
        })

        const json = await result.json();

        if (!result.ok) {
            setIsLoading(false)
            setError(json.error);
        }else{
            // save user to local storeage
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(json))
        }

        // update user contetext
        dispatch({type:"LOGIN", payload:json})        

        setIsLoading(false)

    }

    return {signup, isLoading, error}
}

export default useSignup