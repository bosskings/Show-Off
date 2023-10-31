import { useTheme } from '../../../contexts/ThemeContext';

const DarkThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <i className={`uil uil-moon ${theme}`} onClick={toggleTheme}></i>
    );
};

export default DarkThemeToggle;
