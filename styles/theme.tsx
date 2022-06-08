import {createTheme, responsiveFontSizes} from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#6E42CA",
            light: "#ce93d8",
            dark: "#6E42CA",
        },
        secondary: {
            main: "#ce93d8",
            dark: "#ab47bc",
            light: "#f3e5f5",
        },
        text: {
            primary: "#E5E4FA",
            secondary: "#777280",
            disabled: "#ffffff",
        },
        background: {
            paper: "#1C1C33",
            default: "#14072E",
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
        h2: {
            fontSize: 48
        },
        h3: {
            fontSize: 32
        },
        h4: {
            fontSize: 24,
            fontWeight: 500,
        },
        body1: {
            fontSize: 18,
            fontWeight: 400,
        },
    }
});
theme = responsiveFontSizes(theme)
export default theme
