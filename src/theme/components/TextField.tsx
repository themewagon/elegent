import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
    defaultProps: {
        variant: "filled",
    },
    styleOverrides: {
        root: {
            // backgroundColor: '#FFF',
            // width: '330px',
            // color: '#6F757E',
            // border: '1px solid #E1E1E1',
            // borderRadius: '30px',
            // '&::before, &::after': {
            //     border: 0,
            //     borderBottom: 0,
            // },
            // '&:hover:not(.Mui-disabled, .Mui-error):before': {
            //     border: 0,
            // },
            // '&.Mui-focused:after': {
            //     border: 0,
            // },
        },
    },
}

export default TextField;