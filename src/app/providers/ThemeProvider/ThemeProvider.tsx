import React, { createContext, useContext } from 'react';
import useTheme, { Theme } from 'shared/lib/hooks/useTheme';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (selectedTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
    const themeSwitcher = useTheme();

    return (
        <ThemeContext.Provider value={themeSwitcher}>{children}</ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
