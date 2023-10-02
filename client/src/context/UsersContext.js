import { createContext, useEffect, useReducer } from 'react'

const AuthContext = createContext();

const authReducer = (state,action)=>{
   
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload};

        case 'LOGOUT':
            return {user: null};

        default:
            return state    
    }
}

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    // update users context with data from local storage if isset when page first loads
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));

        if(user){
            dispatch({type: "LOGIN", payload:user})
        }
        
    }, [])

    console.log('AuthcontextState: ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
 
export {AuthContextProvider, authReducer, AuthContext }