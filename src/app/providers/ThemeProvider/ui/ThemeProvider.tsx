import React, {FC} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import createTheme from "@mui/material/styles/createTheme";

const ThemeProviderComponent: FC = ({children}) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#b692f6', // Здесь вы можете задать цвет основной палитры
            },
            secondary: {
                main: '#2196f3', // Здесь вы можете задать цвет вторичной палитры
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
};

export default ThemeProviderComponent;
