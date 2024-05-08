import { createTheme } from '@mui/material';

import TablePagination from './components/TablePagination';
import PaginationItem from './components/PaginationItem';
import InputAdornment from './components/InputAdornment';
import ListItemButton from './components/ListItemButton';
import OutlinedInput from './components/OutlinedInput';
import DataGrid from './components/DataGrid/DataGrid';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import FilledInput from './components/FilledInput';
import CssBaseline from './components/CssBaseline';
import Pagination from './components/Pagination';
import IconButton from './components/IconButton';
import InputLabel from './components/InputLabel';
import TextField from './components/TextField';
import InputBase from './components/InputBase';
import Toolbar from './components/Toolbar';
import Button from './components/Button';
import AppBar from './components/AppBar';
import Stack from './components/Stack';
import Badge from './components/Badge';
import Input from './components/Input';
import Paper from './components/Paper';
import Card from './components/Card';
import Link from './components/Link';

import typography from './typography';
import palette from './palette';
import shadows from './shadows';
import Grid2 from './components/Grid2';

export const theme = createTheme({
  typography: typography,
  palette: palette,
  components: {
    MuiTablePagination: TablePagination,
    MuiInputAdornment: InputAdornment,
    MuiListItemButton: ListItemButton,
    MuiPaginationItem: PaginationItem,
    MuiOutlinedInput: OutlinedInput,
    MuiListItemText: ListItemText,
    MuiListItemIcon: ListItemIcon,
    MuiCssBaseline: CssBaseline,
    MuiFilledInput: FilledInput,
    MuiIconButton: IconButton,
    MuiPagination: Pagination,
    MuiInputLabel: InputLabel,
    MuiInputBase: InputBase,
    MuiTextField: TextField,
    MuiDataGrid: DataGrid,
    MuiToolbar: Toolbar,
    MuiButton: Button,
    MuiAppBar: AppBar,
    MuiPaper: Paper,
    MuiInput: Input,
    MuiBadge: Badge,
    MuiGrid2: Grid2,
    MuiStack: Stack,
    MuiCard: Card,
    MuiLink: Link,
  },
});

shadows.forEach((shadow, index) => {
  theme.shadows[index] = shadow;
});
