import { Box, SxProps } from '@mui/material';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  sx?: SxProps;
}

const Image = ({ src, sx, ...rest }: ImageProps) => (
  <Box component="img" src={src} sx={sx} {...rest} />
);

export default Image;
