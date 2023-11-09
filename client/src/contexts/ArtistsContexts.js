import { createContext, useContext, useState, useEffect } from "react";
import { users } from "../components/Artists/userData";

const ArtistsContext = createContext();

export function useArtistsList() {
  return useContext(ArtistsContext);
}

export function ArtistsListProvider({ children }) {
  const [selectedSearch, setSelectedSearch] = useState("Digital");
  const [filteredArtists, setFilteredArtists] = useState(users);
  const [keyWord, setKeyWord] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [experienceFilter, setExperienceFilter] = useState([]);
  const [checked, setChecked] = useState({});

  const [removeMenu, setShowMenu] = useState("remove-menu");

  const toggleRemoveMenu = () => {
    setShowMenu((curr) => curr === "filter__media" && "remove-menu");
  };
  const toggleShowMenu = () => {
    setShowMenu((curr) => curr === "remove-menu" && "filter__media");
  };

  const filterArtists = (selectedSearch) => {
    setSelectedSearch(selectedSearch);
  };

  const handleKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  const handleCheck = (value) => {
    if (checked[value]) {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [value]: false,
      }));
      setPosition("");
    } else {
      setChecked((prevChecked) => ({
        ...prevChecked,
        [value]: true,
      }));
      setPosition(value);
    }
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleExperienceFilter = (experience) => {
    if (experienceFilter.includes(experience)) {
      setExperienceFilter((prevFilters) =>
        prevFilters.filter((filter) => filter !== experience)
      );
    } else {
      setExperienceFilter([...experienceFilter, experience]);
    }
  };

  useEffect(() => {
    let filteredResults = users;

    if (selectedSearch) {
      filteredResults = filteredResults.filter(
        (user) => user.productType === selectedSearch
      );
    }

    if (keyWord) {
      filteredResults = filteredResults.filter(
        (user) => user.specialty === keyWord
      );
    }

    if (location) {
      filteredResults = filteredResults.filter(
        (user) => user.location === location
      );
    }

    if (position) {
      filteredResults = filteredResults.filter(
        (user) => user.position === position
      );
    }

    if (experienceFilter.length > 0) {
      filteredResults = filteredResults.filter((user) =>
        experienceFilter.includes(
          user.yearsOfExperience > 8
            ? "9+"
            : user.yearsOfExperience > 5
            ? "6-8"
            : user.yearsOfExperience > 2
            ? "3-5"
            : "1-2"
        )
      );
    }

    setFilteredArtists(filteredResults);
  }, [selectedSearch, keyWord, location, position, experienceFilter]);

  const contextValue = {
    filteredArtists,
    filterArtists,

    selectedSearch,

    keyWord,
    handleKeyWord,

    location,
    handleLocation,

    checked,
    handleCheck,

    experienceFilter,
    handleExperienceFilter,

    removeMenu,
    toggleRemoveMenu,
    toggleShowMenu,
  };

  return (
    <ArtistsContext.Provider value={contextValue}>
      {children}
    </ArtistsContext.Provider>
  );
}
