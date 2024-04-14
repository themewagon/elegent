import { createTheme } from "@mui/material";
import typography from "./typography";
import palette from "./palette";
import { shadows } from "./shadows";
import TextField from "./components/TextField";
import InputBase from "./components/InputBase";
import InputLabel from "./components/InputLabel";
import FilledInput from "./components/FilledInput";
import Card from "./components/Card";

export const theme = createTheme({
    typography: typography,
    palette: palette,
    components: {
        MuiTextField: TextField,
        MuiInputBase: InputBase,
        MuiInputLabel: InputLabel,
        MuiFilledInput: FilledInput,
        MuiCard: Card,
    }
});

shadows.forEach((shadow, index) => {
    theme.shadows[index + 1] = shadow;
});