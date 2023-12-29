import { useReducer, createContext } from "react";

const ArtsContext = createContext();

const artsReducer = (state, action)=>{

    switch (action.type) {
        case 'SET_ARTS':
            return{
                arts : action.payload
            }

        case 'CREATE_ARTS':
            return{
                arts : [action.payload, ...state.arts]
            }    
    
        default:
            return state;
    }
}

const ArtsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer( artsReducer, {
        arts:null
    }) 

    return (  
        <ArtsContext.Provider value={{...state, dispatch}}>
            {children}
        </ArtsContext.Provider>
    );
}
 
export {ArtsContext, ArtsContextProvider, artsReducer } ;