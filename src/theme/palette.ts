import { PaletteOptions } from "@mui/material";
import { caribbeanGreen, orange } from "./colors";

const palette : PaletteOptions = {
    primary: {
        main: orange[500],

    },
    secondary: {
        main: caribbeanGreen[500],
    },
    // territory: {

    // },
    text: {
        primary: '#050F24',
        secondary: '#6F757E',
        disabled: '#CCCDCD',
    },
    action: {

    },
    background: {
        default: '#FFF4EA',
        paper: '#FFF',
    },
}

export default palette;