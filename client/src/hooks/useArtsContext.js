import { ArtsContext } from "../context/ArtsContext";
import { useContext } from "react";

const useArtsContext = () => {
    
    const context = useContext(ArtsContext)
    
    if(!context){
        throw Error('artsContext is out of place..')
    }
    
    return context;
    
}
 
export {useArtsContext} ;