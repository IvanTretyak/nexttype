import {createTheme, responsiveFontSizes} from '@mui/material/styles';


let theme = createTheme({
    palette: {
        primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
        },
        secondary: {
            main: "#ce93d8",
            dark: "#ab47bc",
            light: "#f3e5f5",
        },
    },
    typography: {
        fontFamily: "roboto",
        button: {
            fontSize: 12
        },
        h1: {
            fontSize: 64
        },
    }
});
theme = responsiveFontSizes(theme)
export default theme
