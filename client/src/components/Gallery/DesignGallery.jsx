// src/components/DesignGallery.js
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';
import DesignItem from './DesignItem';
import { designs } from './mockData';

const DesignGallery = () => {
    const [showCount, setShowCount] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [arts, setArts] = useState(null)


    // fetch arts from API end point
    useEffect(()=>{
        
        const getArts = async()=>{
    
            const result = await fetch('api/arts/galleryArts');
            const arts = await result.json();
            setArts(arts)
            
        }

        getArts();

    }, [])

    const loadMore = () => {
        setShowCount((prevCount) => prevCount + 4);
    };

    const { isLoading, error } = useQuery('designs', () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: designs.slice(0, showCount) });
            }, 1000);
        });
    });

    const filteredDesigns = selectedCategory
        ? arts.filter((design) => design.art_category === selectedCategory)
        : arts;

        console.log(filteredDesigns);

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="bg2 section">
            <div className="container">
                <div className="design_gallery">
                    <div className='design__gallery__container'>
                        <div className="gallery__buttons">
                            <div id='gallery__search'>
                                <input type="text" placeholder='Search..' />
                                <button>submit</button>
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
                            {filteredDesigns.map((design) => (
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
