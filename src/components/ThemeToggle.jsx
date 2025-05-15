import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-accent text-white shadow-lg z-[9999]"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}
