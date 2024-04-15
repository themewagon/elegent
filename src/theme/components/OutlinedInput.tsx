import { Theme, outlinedInputClasses } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const OutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            backgroundColor: '#FFF',
            width: '330px',
            height: '45px',
            color: '#6F757E',
            // border: '1px solid #E1E1E1',
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
            [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: '#E1E1E1',
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: '1px solid black'
            },
        },
        input: {
            "&::placeholder": {
                color: "#6F757E",
                fontSize: '14px',
                fontWeight: 400,
            },
        }
    }
};

export default OutlinedInput;