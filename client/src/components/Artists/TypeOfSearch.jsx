import React, { useState } from "react";

const TypeOfSearch = () => {
    const [activeButton, setActiveButton] = useState(0);
    const buttons = ["Digital", "Hands-on"];

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    return (
        <div className="typeof__search">
            <p>TYPE OF SEARCH</p>
            <div className="typeof__search-button">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
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
