import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // Step 2: Use state to manage the theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  // Step 3: Load the theme from localStorage on component mount
  useEffect(() => {
    // Clear previous theme classes and add the current theme class
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme);
  }, [theme]);

  // Step 4: Define a function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
