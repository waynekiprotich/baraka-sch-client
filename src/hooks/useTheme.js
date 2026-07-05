import { useCallback, useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('baraka-theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('baraka-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
