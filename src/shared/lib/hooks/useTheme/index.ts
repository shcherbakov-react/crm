import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'purple';

const themes: Theme[] = ['light', 'dark', 'purple'];

const useTheme = () => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = themes.includes(storedTheme!) ? storedTheme! : 'light';

    const [theme, setTheme] = useState<Theme>(initialTheme);
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (selectedTheme: Theme) => {
        if (themes.includes(selectedTheme)) {
            localStorage.setItem('theme', selectedTheme);
            setTheme(selectedTheme);
        }
    };

    return { theme, toggleTheme };
};

export default useTheme;
