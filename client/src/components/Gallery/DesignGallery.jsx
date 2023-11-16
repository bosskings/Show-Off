import CircularProgress from '@mui/material/CircularProgress';


import DesignItem from './DesignItem';

import { useArtWorkList } from '../../contexts/ArtWorks';

const DesignGallery = ({ handleOpen, handleClose }) => {
    const { showCount, activeButton, isLoading, error, loadMore, handleClick, filteredDesigns, } = useArtWorkList()

    if (isLoading) return (
        <div className='loading'>
            <div className='loading_inner'>
                <CircularProgress color='error' /> Loading..
            </div>
        </div>
    );
    if (error) return <p>Error: {error.message}</p>;

    const buttons = ["All", "Animations", "Branding", "Illustrations", "Paint", "Web Design", "Print"]

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
                                {buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleClick(index, button)}
                                        className={index === activeButton ? "cat" : "category__button"}
                                    >
                                        {button}
                                    </button>
                                ))}
                            </div>
                            <div></div>
                        </div>
                        <div className="content">
                            {filteredDesigns.slice(0, showCount).map((design) => (
                                <DesignItem key={design.id} design={design} handleOpen={handleOpen} />
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
