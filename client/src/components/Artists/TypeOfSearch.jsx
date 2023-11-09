import React, { useState } from "react";

import { useArtistsList } from "../../contexts/ArtistsContexts";

const TypeOfSearch = () => {
    const [activeButton, setActiveButton] = useState(0);
    const { filterArtists } = useArtistsList();

    const buttons = ["Digital", "Hand-on"];

    const handleButtonClick = (index, button) => {
        setActiveButton(index);
        filterArtists(button)
        console.log(filterArtists)
    };
    return (
        <div className="typeof__search">
            <p>TYPE OF SEARCH</p>
            <div className="typeof__search-button">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index, button)}
                        className={index === activeButton ? "active" : "typeof__button"}
                    >
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TypeOfSearch;
