import { useState, useEffect } from "react";

export const useColorScheme = () => {
  const query = "(prefers-color-scheme: dark)";
  const localStorageKey = "colorScheme";

  const [mode, setMode] = useState(
    () =>
      window.localStorage.getItem(localStorageKey) ||
      (window.matchMedia(query).matches ? "dark" : "light")
  );

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, mode);
  }, [mode]);

  return [mode, toggleMode];
};
