import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(','),
    h1: {
        fontSize: '40px',
        fontWeight: 700,
    },
    h2: {
        fontSize: '28px',
        fontWeight: 700,
    },
    h3: {
        fontSize: '25px',
        fontWeight: 700,
    },
    h4: {
        fontSize: '22px',
        fontWeight: 700,
    },
    h5: {
        fontSize: '20px',
        fontWeight: 500,
    },
    h6: {
        fontSize: '18px',
        fontWeight: 500,
    },
    subtitle1: {
        fontSize: '16px',
        fontWeight: 500,
    },
    subtitle2: {
        fontSize: '16px',
        fontWeight: 400,
    },
    body1: {
        fontSize: '14px',
        fontWeight: 400,
    },
    body2: {
        fontSize: '12px',
        fontWeight: 400,
    }
};

export default typography;