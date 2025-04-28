import React, {createContext, useContext, useState, useCallback} from 'react';
import {THEME_TYPE} from '../Types/CommonTypes';
import {DarkTheme, DayTheme} from '../Config/Theme';

interface ThemeContextProps {
  theme: THEME_TYPE;
  setTheme: (theme: THEME_TYPE) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEME_TYPE>(DayTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme.type === 'dark' ? DayTheme : DarkTheme));
  }, []);

  const value = {theme, setTheme, toggleTheme};

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
