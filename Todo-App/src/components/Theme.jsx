import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { toggleTheme } from '../redux/themeAction';

const ThemeToggle = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={handleToggle} className={darkMode ? 'dark' : 'light'}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggle;
