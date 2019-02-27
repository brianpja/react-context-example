import React from 'react';
import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // receives theme and toggleTheme function
  return (
    <ThemeContext.Consumer>
      { ({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={ {backgroundColor: theme.background} }>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
