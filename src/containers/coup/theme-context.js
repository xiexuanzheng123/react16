import React from 'react';

export const themes = {
    light: {
        foreground: '#ffffff',
        background: 'green'
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee'
    }
};
export const ThemeContext = React.createContext(
    {
        theme: themes.dark,
        toggleTheme: () => {}
    }

);