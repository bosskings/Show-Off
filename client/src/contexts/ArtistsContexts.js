import { createContext, useContext, useState, useEffect } from "react";

import { users } from "../components/Artists/userData";

const ArtistsContext = createContext();

export function useArtistsList() {
  return useContext(ArtistsContext);
}

export function ArtistsListProvider({ children }) {
  const [selectedSearch, setSelectedSearch] = useState("Digital");
  const [keyWord, setKeyWord] = useState("");
  const [filteredArtists, setFilteredArtists] = useState([]);

  const filterArtists = (selectedSearch) => {
    setSelectedSearch(selectedSearch);
  };

  useEffect(() => {
    // Filter designs based on selected category and price
    const typeofsearch =
      selectedSearch &&
      users.filter((user) => user.productType === selectedSearch);
    const keywordsearch =
      selectedSearch &&
      users.filter(
        (user) =>
          user.productType === selectedSearch && user.specialty === keyWord
      );

    setFilteredArtists(typeofsearch, keywordsearch);
  }, [selectedSearch]);

  const contextValue = {
    keyWord,
    setKeyWord,
    filteredArtists,
    filterArtists,
  };

  return (
    <ArtistsContext.Provider value={contextValue}>
      {children}
    </ArtistsContext.Provider>
  );
}
