import { Box, CircularProgress, Stack, StackOwnProps } from '@mui/material';

const PageLoader = (props: StackOwnProps) => {
  return (
    <Stack alignItems="center" width={1} justifyContent="center" height={1} {...props}>
      <Box height={'10vh'} width={'25vw'} textAlign={'center'}>
        <CircularProgress color="secondary" />
      </Box>
    </Stack>
  );
};

export default PageLoader;
