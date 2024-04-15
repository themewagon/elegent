import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    defaultProps: {
        variant: "filled",
    },
    styleOverrides: {
        root: {
            backgroundColor: '#FFF',
            width: '330px',
            // height: '45px',
            color: '#6F757E',
            border: '1px solid #E1E1E1',
            borderRadius: '30px',
            '&::before, &::after': {
                border: 0,
                borderBottom: 0,
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                border: 0,
            },
            '&.Mui-focused:after': {
                border: 0,
            },
        },
    },
    // styleOverrides: {
    //     root: {
    //         'label + &': {
    //             marginTop: 3,
    //         },
    //         '& .MuiInputBase-input': {
    //             borderRadius: 4,
    //             position: 'relative',
    //             backgroundColor: theme => theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    //             border: '1px solid',
    //             borderColor: theme => theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    //             fontSize: 16,
    //             width: 'auto',
    //             padding: '10px 12px',
    //             transition: theme => theme.transitions.create([
    //                 'border-color',
    //                 'background-color',
    //                 'box-shadow',
    //             ]),
    //             // Use the system font instead of the default Roboto font.
    //             fontFamily: [
    //                 '-apple-system',
    //                 'BlinkMacSystemFont',
    //                 '"Segoe UI"',
    //                 'Roboto',
    //                 '"Helvetica Neue"',
    //                 'Arial',
    //                 'sans-serif',
    //                 '"Apple Color Emoji"',
    //                 '"Segoe UI Emoji"',
    //                 '"Segoe UI Symbol"',
    //             ].join(','),
    //             '&:focus': {
    //                 boxShadow: theme => `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    //                 borderColor: theme => theme.palette.primary.main,
    //             },
    //         },
    //     },
    // }
}

export default TextField;