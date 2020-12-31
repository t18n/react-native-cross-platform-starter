import React, {
  createContext,
  useContext,
  useState,
  useCallback,
} from 'react';

import { lightTheme, darkTheme } from 'src/styles/theme';

interface ThemeContextData {
  toggleTheme(): void;
  theme: any;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.paletteName === 'light' ? darkTheme : lightTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeSystem = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useThemeSystem };