import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import ShopItem from '../Shop/ShopItem';
import { designs } from '../Gallery/mockData';

const DesignShop = () => {
    const [showCount, setShowCount] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredDesigns, setFilteredDesigns] = useState([]);

    const incrementShowCount = () => {
        setShowCount((prevCount) => prevCount + 8);
    };

    const fetchData = useQuery('designs', () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: designs.slice(0, showCount) });
            }, 1000);
        });
    });

    const filterDesigns = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Filter designs based on selected category and price
        const filtered = selectedCategory
            ? designs.filter((design) => design.category === selectedCategory && design.price !== null)
            : designs.filter((design) => design.price !== null);

        setFilteredDesigns(filtered);
    }, [selectedCategory]);

    if (fetchData.isLoading) return <p>Loading...</p>;
    if (fetchData.error) return <p>Error: {fetchData.error.message}</p>;

    return (
        <div className='bg2 smaller__section'>
            <div className="container">
                <div className="design_gallery">
                    <div className='design__gallery__container'>
                        <div className="gallery__buttons">
                            <div id='gallery__search'>
                                <input type="text" placeholder='Search..' />
                                {/* <button>submit</button> */}
                            </div>
                            <div className='category__buttons'>
                                <button onClick={() => filterDesigns(null)}>All</button>
                                <button onClick={() => filterDesigns('Animations')}>
                                    Animations
                                </button>
                                <button onClick={() => filterDesigns('Branding')}>
                                    Branding
                                </button>
                                <button onClick={() => filterDesigns('Illustrations')}>
                                    Illustrations
                                </button>
                                <button onClick={() => filterDesigns('Paint')}>
                                    Paint
                                </button>
                                <button onClick={() => filterDesigns('Web Design')}>
                                    Web Design
                                </button>
                                <button onClick={() => filterDesigns('Print')}>
                                    Print
                                </button>
                            </div>
                            <div></div>
                        </div>
                        <div className="content">
                            {filteredDesigns.length > 0 ? (
                                filteredDesigns.slice(0, showCount).map((design) => (
                                    <>
                                        {
                                            design.price
                                            && (
                                                <ShopItem key={design.id} design={design} />
                                            )
                                        }
                                    </>
                                ))
                            ) : (
                                // Display "Empty" image or message when the shop is empty
                                <div className="empty-shop">
                                    {/* <img src="empty-shop-image.jpg" alt="Empty Shop" /> */}
                                    {/* Or a simple text message */}
                                    <p>No products available in the shop.</p>
                                </div>
                            )}
                        </div>
                        <div className='load__more'>
                            {showCount < filteredDesigns.length && (
                                <button id='load__more' onClick={incrementShowCount}>Load More</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignShop;
