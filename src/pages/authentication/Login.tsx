import { ReactElement } from 'react';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import loginBanner from 'assets/authentication-banners/login.png';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';

const Login = (): ReactElement => {
  return (
    <Stack
      direction="row"
      bgcolor={(theme) => theme.palette.background.paper}
      boxShadow={(theme) => theme.shadows[3]}
      height={560}
      width={{ md: 960 }}
    >
      <Stack width={0.5} m={(theme) => theme.spacing(2.5)} gap={10}>
        <Link href="/" width="fit-content">
          <Image src={logo} width={82.6} />
        </Link>
        <Stack alignItems="center" gap={2.5} width={330} mx="auto">
          <Typography variant="h3">Login</Typography>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="email-input">
              Email
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your email"
              id="email-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-email" width={1} height={1} />
                </InputAdornment>
              }
              sx={(theme) => ({
                width: 1,
                backgroundColor: theme.palette.action.focus,
              })}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="password-input">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="********"
              type="password"
              id="password-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-key" width={1} height={1} />
                </InputAdornment>
              }
              sx={(theme) => ({
                width: 1,
                backgroundColor: theme.palette.action.focus,
              })}
            />
          </FormControl>
          <Typography
            variant="body1"
            sx={{
              alignSelf: 'flex-end',
            }}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            <Link href="/authentication/reset-password" underline="hover">
              Forget password
            </Link>
          </Typography>
          <Button variant="contained" fullWidth>
            Log in
          </Button>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.text.secondary}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            Don't have an account ?{' '}
            <Link
              href="/authentication/sign-up"
              underline="hover"
              fontSize={(theme) => theme.typography.body1.fontSize}
            >
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <Image
        alt="Login banner"
        src={loginBanner}
        sx={{
          width: 0.5,
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Stack>
  );
};

export default Login;
