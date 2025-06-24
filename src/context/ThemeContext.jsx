import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Selalu pakai light mode, jadi tidak perlu toggle atau state
  const darkMode = false;
  const toggleTheme = () => {}; // tidak melakukan apa-apa

  // Pastikan class `dark` dihapus dari <html>
  if (typeof document !== "undefined") {
    document.documentElement.classList.remove("dark");
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;