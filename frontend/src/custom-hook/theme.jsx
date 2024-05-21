import { useState, useEffect } from "react";

// Custom hook for theme management

const useTheme = () => {

    const themes = ["light", 'dark'];
    const savedThemes = localStorage.getItem("theme") || themes[0];
    const [theme, setTheme] = useState(savedThemes);

     // Funtion to toggle
     const toggleTheme = () => {
        const newTheme = theme === themes[0] ? themes[1] : themes[0];
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Apply the saved theme
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    })

    return {theme, toggleTheme}

}

export default useTheme;





