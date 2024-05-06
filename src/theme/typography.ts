import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['IBM Plex Sans', 'Poppins', 'sans-serif'].join(','),
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.563rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.375rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

export default typography;
