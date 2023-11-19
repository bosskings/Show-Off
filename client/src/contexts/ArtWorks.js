import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

import { designs } from "../components/Gallery/mockData";

const ArtWorksContext = createContext();

export function useArtWorkList() {
  return useContext(ArtWorksContext);
}

export function ArtWorkListProvider({ children }) {
  const [showCount, setShowCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeButton, setActiveButton] = useState(0);

  const loadMore = () => {
    setShowCount((prevCount) => prevCount + 2);
  };

  const { isLoading, error } = useQuery("designs", () => {
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
    setActiveButton(index);
    filterDesignsByCategory(button);
  };

  const filteredDesigns = selectedCategory
    ? designs.filter((design) => design.category === selectedCategory)
    : designs;

  const contextValue = {
    showCount,
    activeButton,
    isLoading,
    error,
    loadMore,
    handleClick,
    filteredDesigns,
  };

  return (
    <ArtWorksContext.Provider value={contextValue}>
      {children}
    </ArtWorksContext.Provider>
  );
}
