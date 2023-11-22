import React from "react";
import { useArtistsList } from "../../contexts/ArtistsContexts";
import { users } from "../Artists/userData";

const Sorting = () => {
    const { keyWord, handleKeyWord, checked, handleCheck, handleExperienceFilter, location, handleLocation, } = useArtistsList();
    const positions = ["Remote", "On-site"];
    const experienceLevels = ["1-2", "3-5", "6-8", "9+"];
    const specialties = Array.from(new Set(users.map((user) => user.specialty)));

    return (
        <div className="sorting">
            <div className="sorting__container">
                <div className="field__wrapper">
                    <p>Keyword Search</p>
                    <input
                        type="text"
                        placeholder="Search keywords..."
                        onChange={handleKeyWord}
                        value={keyWord}
                    />
                </div>
                <div className="field__wrapper">
                    <p>Specialties</p>
                    <input
                        type="text"
                        placeholder="Search Specialties..."
                        list="specialtiesList"
                        onChange={(e) => handleKeyWord(e)}
                        value={keyWord}
                    />
                    <datalist id="specialtiesList">
                        {specialties.map((specialty) => (
                            <option key={specialty} value={specialty} />
                        ))}
                    </datalist>
                </div>
                <div className="field__wrapper">
                    <p>Location</p>
                    <input
                        type="text"
                        placeholder="Search Location..."
                        onChange={handleLocation}
                        value={location}
                    />
                </div>
                <div className="sorting__positions">
                    {positions.map((position) => (
                        <div className="v-checkbox" key={position}>
                            <input
                                type="checkbox"
                                checked={checked[position] || false}
                                onChange={() => handleCheck(position)}
                            />
                            <p>{position} Position</p>
                        </div>
                    ))}
                </div>
                <div className="sorting__yearsofexperience">
                    <p className="sorting__yearsofexperience-head">Experience Level</p>
                    <div className="level__container">
                        {experienceLevels.map((level) => (
                            <div className="v-checkbox" key={level}>
                                <input
                                    type="checkbox"
                                    checked={checked[level]}
                                    onChange={() => handleExperienceFilter(level)}
                                />
                                <p>{level} years</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sorting;
