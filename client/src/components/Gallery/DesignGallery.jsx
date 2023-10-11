import React, { useState } from 'react';
import { useQuery } from 'react-query';


import DesignItem from './DesignItem';
import { designs } from './mockData';

const DesignGallery = () => {
    const [showCount, setShowCount] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);

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
        setSelectedCategory(category);
    };

    const filteredDesigns = selectedCategory
        ? designs.filter((design) => design.category === selectedCategory)
        : designs;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                                <button onClick={() => filterDesignsByCategory(null)}>All</button>
                                <button onClick={() => filterDesignsByCategory('Animations')}>
                                    Animations
                                </button>
                                <button onClick={() => filterDesignsByCategory('Branding')}>
                                    Branding
                                </button>
                                <button onClick={() => filterDesignsByCategory('Illustrations')}>
                                    Illustrations
                                </button>
                                <button onClick={() => filterDesignsByCategory('Paint')}>
                                    Paint
                                </button>
                                <button onClick={() => filterDesignsByCategory('Web Design')}>
                                    Web Design
                                </button>
                                <button onClick={() => filterDesignsByCategory('Print')}>
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
