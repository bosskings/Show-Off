import  { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import DesignItem from './DesignItem';
import { useArtsContext } from '../../hooks/useArtsContext';
import { useUsersContext } from '../../hooks/useUsersContext'

const DesignGallery = () => {
    const [showCount, setShowCount] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const {arts, dispatch} = useArtsContext()
    const {user} = useUsersContext()

    // fetch arts from API end point
    useEffect(()=>{

        
        const getArts = async ()=>{
            
            const result = await fetch('api/arts/galleryArts',{
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            });
            const json = await result.json();

            if (result.ok) {
                dispatch({type:'SET_ARTS', payload:json})
            }
            
        }

        if(user){
            getArts();
        }
        
    }, [dispatch, user])

    const loadMore = async () => {
        setShowCount((prevCount) => prevCount + 4);

    };


    const { isLoading, error } = useQuery(arts, () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: arts.slice(4, showCount) });
                console.log('data---'  );
            }, 1000);
        });
    });

    console.log(arts, showCount);
    
        if (isLoading) return <h1>Loading...</h1>;
        if (error) return <p>Error: {error.message}</p>;

    // return null
    const filteredDesigns = selectedCategory
        ? arts.filter((design) => design.art_category === selectedCategory)
        : arts;

    return (
        <div className="bg2 smaller__section">
            <div className="container">
                <div className="design_gallery">
                    <div className='design__gallery__container'>
                        <div className="gallery__buttons">
                            <div id='gallery__search'>
                                <input type="text" placeholder='Search..' />
                                {/* <button>submit</button> */}
                            </div>
                            <div className='category__buttons'>
                                <button onClick={() => setSelectedCategory(null)}>All</button>
                                <button onClick={() => setSelectedCategory('Animation')}>
                                    Animations
                                </button>
                                <button onClick={() => setSelectedCategory('Branding')}>
                                    Branding
                                </button>
                                <button onClick={() => setSelectedCategory('Illustrations')}>
                                    Illustrations
                                </button>
                                <button onClick={() => setSelectedCategory('Painting')}>
                                    Paint
                                </button>
                                <button onClick={() => setSelectedCategory('Web Design')}>
                                    Web Design
                                </button>
                                <button onClick={() => setSelectedCategory('Print')}>
                                    Print
                                </button>
                            </div>
                            <div></div>
                        </div>
                        <div className="content">
                            {filteredDesigns && filteredDesigns.map((design) => (
                                <DesignItem key={design._id} design={design} />
                            ))}
                        </div>
                        <div className='load__more'>
                            {showCount < filteredDesigns.length && (
                                <button id='load__more' onClick={loadMore}>Load More</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignGallery;
