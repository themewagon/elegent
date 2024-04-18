import { createTheme } from "@mui/material";

import typography from "./typography";
import palette from "./palette";
import { shadows } from "./shadows";
import TextField from "./components/TextField";
import InputBase from "./components/InputBase";
import InputLabel from "./components/InputLabel";
import FilledInput from "./components/FilledInput";
import Card from "./components/Card";
import OutlinedInput from "./components/OutlinedInput";
import Input from "./components/Input";
import Button from "./components/Button";
import InputAdornment from "./components/InputAdornment";
import ListItemButton from "./components/ListItemButton";
import TablePagination from "./components/TablePagination";
import Pagination from "./components/Pagination";
import Paper from "./components/Paper";
import Toolbar from "./components/Toolbar";
import Badge from "./components/Badge";
import PaginationItem from "./components/PaginationItem";
import { DataGrid } from "@mui/x-data-grid";

export const theme = createTheme({
    typography: typography,
    palette: palette,
    components: {
        MuiInput: Input,
        MuiTextField: TextField,
        MuiInputBase: InputBase,
        MuiInputLabel: InputLabel,
        MuiFilledInput: FilledInput,
        MuiOutlinedInput: OutlinedInput,
        MuiCard: Card,
        MuiButton: Button,
        MuiInputAdornment: InputAdornment,
        MuiListItemButton: ListItemButton,
        MuiTablePagination: TablePagination,
        MuiPagination: Pagination,
        MuiPaginationItem: PaginationItem,
        MuiPaper: Paper,
        MuiToolbar: Toolbar,
        MuiBadge: Badge,
    },
    mixins: {
        MuiDataGrid: {
            containerBackground: '#FFF',
            borderBottom: 'none',
            
        },
    },
});

shadows.forEach((shadow, index) => {
    theme.shadows[index + 1] = shadow;
});