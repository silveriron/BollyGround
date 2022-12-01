import React from 'react'
import {ThemeProvider, createTheme} from '@mui/material'

interface Props {
    children: React.ReactNode
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#1C1C1C'
        },
        secondary: {
            main: '#F9F8F9'
        }
    }
})

const MuiThemeProvider:React.FC<Props> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;