import { createContext, useEffect, useReducer, useState } from 'react'

const AuthContext = createContext();

const authReducer = (state,action)=>{

   
    switch(action.type){
        case 'LOGIN':
            return {
                user: action.payload,
                isLoading: false
            };

        case 'LOGOUT':
            return {
                user: null,
                isLoading: false
            };

        default:
            return state    
    }
}

const AuthContextProvider = ({children}) => {
    const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);
 
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isLoading: true // Set isLoading to true initially
    })
    

    // update users context with data from local storage if isset when page first loads
    useEffect(()=>{
        const user = JSON.parse( localStorage.getItem('user') )
        if(user){
            dispatch({type: "LOGIN", payload:user})
        }
        setIsLocalStorageLoaded(true);
        
    }, [])

    console.log('AuthcontextState: ', state);

    // Render children only after local storage is loaded
    if (!isLocalStorageLoaded) {
        return null;
    }
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
 
export {AuthContextProvider, authReducer, AuthContext }