import React, { useState } from 'react';
import { useQuery } from 'react-query';


import DesignItem from './DesignItem';
import { designs } from './mockData';

const DesignGallery = () => {
    const [showCount, setShowCount] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeButton, setActiveButton] = useState(0);

    const loadMore = () => {
        setShowCount((prevCount) => prevCount + 8);
    };

    const { isLoading, error } = useQuery('designs', () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: designs.slice(0, showCount) });
            }, 1000);
        });
    });

    const filterDesignsByCategory = (category) => {
        setSelectedCategory(category === "All" ? null : category);
    };


    const handleClick = (index, button) => {
        setActiveButton(index)
        filterDesignsByCategory(button)
    }

    const filteredDesigns = selectedCategory
        ? designs.filter((design) => design.category === selectedCategory)
        : designs;

    if (isLoading) return <p>Loading...</p>;
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
