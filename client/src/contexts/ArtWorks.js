import { createContext, useReducer, useContext, useEffect, useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

const ArtWorksContext = createContext();

export function useArtWorkList() {
	return useContext(ArtWorksContext);
}

const artsReducer = (state, action)=>{

    switch (action.type) {
        case 'SET_ARTS':
            return{
                arts : action.payload,
                isLoading:false
            }

        case 'CREATE_ARTS':
            return{
                arts : [action.payload, ...state.arts],
                isLoading:false
            }    
    
        default:
            return state;
    }
}

export function ArtWorkListProvider({ children }) {
	const [showCount, setShowCount] = useState(4);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [error, setError] = useState(null);
	const [activeButton, setActiveButton] = useState(0);
	const [isArtLoading, setIsArtLoading] = useState(true)
	const { user } = useUsersContext()


    const [state, dispatch] = useReducer( artsReducer, {
        arts:null,
        isLoading:true //when arts is unavailable, webpage should be loading
    }) 

	useEffect(()=>{

		const getArts = async ()=>{
			try {
				const result = await fetch('api/arts/galleryArts',{
					headers: {
						"Authorization": `Bearer ${user.token}`
					}
				});
				const json = await result.json();
				// update context when endpoint returns a usefull data
				if (result.ok) {
					dispatch({type:'SET_ARTS', payload:json})
					
				}
			} catch (error) {
				console.log(error);
				setError(error)
			} finally{
				setIsArtLoading(false)
			}
		}

		if(user){
			getArts()
		}
	},[user])

	console.log('ArtsContextState:____', state);

	
	const loadMore = () => {
		setShowCount((prevCount) => prevCount + 4);
	};



	const filterDesignsByCategory = (category) => {
		setSelectedCategory(category === "All" ? null : category);
	};

	const handleClick = (index, button) => {
		setActiveButton(index);
		filterDesignsByCategory(button);
	};

	const filteredDesigns = selectedCategory
		? state.arts.filter((design) => design.art_category === selectedCategory)
		: state.arts;

	const contextValue = {
		showCount,
		activeButton,
		error,
		loadMore,
		handleClick,
		filteredDesigns,
	};


	// Render children only after local storage is loaded
    if (isArtLoading) {
        return null;
    }

	return (
		<ArtWorksContext.Provider value={contextValue}>
			{children}
		</ArtWorksContext.Provider>
	);
}
