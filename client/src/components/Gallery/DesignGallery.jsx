import CircularProgress from '@mui/material/CircularProgress';

import DesignItem from './DesignItem';
import { useArtsContext } from '../../hooks/useArtsContext';
import { useUsersContext } from '../../hooks/useUsersContext'

const DesignGallery = () => {
    const { showCount, activeButton, isLoading, error, loadMore, handleClick, filteredDesigns, } = useArtWorkList()

    if (isLoading) return (
        <div className='loading'>
            <div className='loading_inner'>
                <CircularProgress color='error' /> Loading..
            </div>
        </div>
    );
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
                            {filteredDesigns.slice(0, showCount).map((design) => (
                                    <DesignItem key={design.id} design={design} />
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
