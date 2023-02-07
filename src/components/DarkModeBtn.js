import { useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

function DarkModeBtn({ toggle }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    setIsDarkMode(() => {
      if (localStorage.getItem('theme') === 'light-theme') return false;
      else return true;
    });
  }, []);
  return (
    <DarkModeToggle
      onChange={() => {
        toggle();
        setIsDarkMode(!isDarkMode);
      }}
      checked={isDarkMode}
      size={30}
    />
  );
}
export default DarkModeBtn;
