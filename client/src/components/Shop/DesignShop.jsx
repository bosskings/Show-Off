import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import ShopItem from '../Shop/ShopItem';
import { designs } from '../Gallery/mockData';
import { CircularProgress } from '@mui/material';

const DesignShop = () => {
    const [showCount, setShowCount] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredDesigns, setFilteredDesigns] = useState([]);
    const [activeButton, setActiveButton] = useState(0);

    const incrementShowCount = () => {
        setShowCount((prevCount) => prevCount + 8);
    };

    const fetchData = useQuery('designs', () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: designs.slice(0, showCount) });
            }, 2000);
        });
    });

    const filterDesigns = (category) => {
        setSelectedCategory(category === "All" ? null : category);
    };

    const handleClick = (index, button) => {
        setActiveButton(index)
        filterDesigns(button)
    }

    useEffect(() => {
        // Filter designs based on selected category and price
        const filtered = selectedCategory
            ? designs.filter((design) => design.category === selectedCategory && design.price !== null)
            : designs.filter((design) => design.price !== null);

        setFilteredDesigns(filtered);
    }, [selectedCategory]);

    if (fetchData.isLoading) return (
        <div className='loading'>
            <div className='loading_inner'>
                <CircularProgress color='error' /> Loading..
            </div>
        </div>
    );
    if (fetchData.error) return <p>Error: {fetchData.error.message}</p>;

    const buttons = ["All", "Animations", "Branding", "Illustrations", "Paint", "Web Design", "Print"]

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
